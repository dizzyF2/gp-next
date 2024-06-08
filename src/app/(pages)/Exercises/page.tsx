import { redirect } from "next/navigation";
import { getCurrentUser } from "../../../../lib/appwrite";
import ExercisesList from "@/app/components/ExercisesList";


async function Exercises() {
    const user = await getCurrentUser()
    if(!user){
        redirect("/Login")
    }

    return (
        <ExercisesList/>
    )
}

export default Exercises