import ChangeUserInfo from "@/app/components/ChangeUserInfo";
import { getCurrentUser } from "../../../../lib/appwrite";
import { redirect } from "next/navigation";


async function UserProfile() {
    const user = await getCurrentUser()
    if(!user){
        redirect("/Login")
    }
    
    return (
        <ChangeUserInfo/>
    );
}

export default UserProfile;