import { redirect, useParams } from "next/navigation" 
import { getCurrentUser } from "../../../../../lib/appwrite"
import ExerciseDetails from "@/app/components/ExerciseDetails"


async function ExerciseDetailsPage() {

    const user = await getCurrentUser()
    if(!user){
        redirect("/Login")
    }

    return (
        <ExerciseDetails/>
    )
}

export default ExerciseDetailsPage