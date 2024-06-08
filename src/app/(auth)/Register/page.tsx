import AuthForm from "@/app/components/AuthForm";
import { getCurrentUser } from "../../../../lib/appwrite";
import { redirect } from "next/navigation";





async function Register() {
    const user = await getCurrentUser()
    if(user){
        redirect("/")
    }
    return (
        <AuthForm type="sign-up"/>
    )
}

export default Register