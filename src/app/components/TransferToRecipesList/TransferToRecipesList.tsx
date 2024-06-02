import { RecipesReview } from "@/app/constants"
import Image from "next/image"
import Link from "next/link"


function TransferToRecipesList() {
    return (
        <div className=" mr-5 text-center m-auto">
            <h2 className="capitalize font-bold text-2xl md:text-3xl text-left mb-10 ml-10 md:ml-0">Explore Healthy Recipes </h2>
            <div className="mt-10 flex flex-col space-x-0 space-y-3 m-20 md:flex-row md:space-x-3 md:space-y-0 md:m-0 mb-0">
                {RecipesReview.map((item)=>(
                    <div key={item.key} className="bg-slate-100 border border-slate-200 flex flex-col items-center p-6 space-y-2 rounded-lg dark:bg-gradient-to-t dark:from-[#ffffff0d] dark:to-[#ffffff0d]">
                        <Image loading="lazy" className="w-full h-56" src={item.img} alt="" width={250} height={200}/>
                        <h5 className="font-bold text-lg text-slate-900">Recipe name</h5>
                        <p className="text-sm leading-5 dark:text-black">{item.review}</p>
                        <div className="flex justify-between w-full pt-5 pb-0">
                            <div></div>
                            <button className="bg-[#ff2625] uppercase rounded-lg p-2 text-sm text-white"><Link href={"/Recipes/RecipeInfo"}>more info</Link></button>
                        </div>
                    </div>
                ))}      
            </div>
            <div className="flex justify-center md:justify-end pt-2">
                    <button className="bg-[#ff2625] uppercase rounded-lg p-2 text-white"><Link href={"/Recipes"}>Show All</Link></button>
            </div>
        </div>
    )
}

export default TransferToRecipesList