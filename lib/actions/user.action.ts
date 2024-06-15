'use server';

import { ID, Query } from "node-appwrite";
import { createAdminClient, createSessionClient } from "../appwrite";
import { cookies } from "next/headers";
import { parseStringify } from "@/app/utils/utils";
import { redirect } from "next/navigation";


export const getUserInfo = async ({ userId }: getUserInfoProps) => {
    try {
        const { database } = await createAdminClient();

        const user = await database.listDocuments(
        process.env.APPWRITE_DATABASE_ID!,
        process.env.APPWRITE_USER_COLLECTION_ID!,
        [Query.equal('userId', [userId])]
        )

        return user.documents[0];
    } catch (error) {
        console.log(error)
    }
}
// export const signIn = async ({ email, password }: signInProps): Promise<User | null> => {
//     try {
//         const { account } = await createAdminClient();
//         const session = await account.createEmailPasswordSession(email, password);

//         // Set session cookie
//         cookies().set("appwrite-session", session.secret, {
//             path: "/",
//             httpOnly: true,
//             sameSite: "strict",
//             secure: true,
//         });

//         // Fetch user information
//         const user = await getUserInfo({ userId: session.userId })

//         return parseStringify(user);
//     } catch (error) {
//         console.error('Error signing in', error);
//         return null;
//     }
// };

export const signIn = async ({ email, password }: signInProps) => {
    try {
        const { account } = await createAdminClient();
        const session = await account.createEmailPasswordSession(email, password);

        cookies().set("appwrite-session", session.secret, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: true,
        });

        const user = await getUserInfo({ userId: session.userId }) 

        return user;
    } catch (error) {
        console.error('Error', error);
    }
}

export const signUp = async (userData: SignUpParams) =>{
    const {email, password, firstName, lastName} = userData;
    
    try {
        const { account } = await createAdminClient();

        const newUserAccount = await account.create(
            ID.unique(), 
            email, 
            password, 
            `${firstName} ${lastName}`
        );

        const session = await account.createEmailPasswordSession(email, password);

        cookies().set("appwrite-session", session.secret, {
            path: "/",
            httpOnly: true,
            sameSite: "strict",
            secure: true,
        });

        return parseStringify(newUserAccount);

    } catch (error) {
        console.log("Error", error)
    }
}

export const logoutAccount = async () =>{
    try {
        const { account } = await createSessionClient();

        cookies().delete("appwrite-session");

        await account.deleteSession('current');
    } catch (error) {
        return null;
    }
}

export const navigate = async(path:string)=>{
    redirect(path);
}



/* export async function getCurrentUser() {
    try {
        const { account } = await createSessionClient();
        const result = await account.get();

        const user = await getUserInfo({ userId: result.$id})
        
        console.log("from getCurrentUser Function", user)
        return parseStringify(user);
    } catch (error) {
        console.log(error)
        return null;
    }
} */
