import RecipesProduct from "@/app/components/RecipesProduct/RecipesProduct"
import { getCurrentUser } from "../../../../lib/appwrite"
import { redirect } from "next/navigation"



async function Recipes() {
    const user = await getCurrentUser()
    if(!user){
        redirect("/Login")
    }
    
    return (
        <div className="recipes-container">
            <RecipesProduct/>
        </div>
    )
}

export default Recipes


/*
            <div className="mt-20">
                <Filters/>
            </div>

*/