import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import "../Products/products.css"
import { RecipesCardInfo } from "@/app/constants"


function RecipesProduct() {
    return (
        <div className="product-container">
            {RecipesCardInfo.map((item)=>(
            <div key={item.key} className=" flex flex-col justify-between w-[250px] border-2 border-solid border-[#5fbdfc4d] duration-300 hover:border-2 hover:border-solid hover:border-[#5dbcfc] hover:scale-[1.01 hover:rotate-[1deg]">
                <div className="flex flex-col gap-3 w-full">
                    <Image className="w-full h-56" src={item.img} alt="" width={250} height={250}/>
                    <h5 className="dark:text-[#f4f4f5] font-extrabold p-1">Recipe name</h5>
                    <p className="text-sm leading-5 dark:text-[#a1a1aa] p-1">{item.review}</p>
                </div>
                <div className="flex justify-between w-full pt-5 pb-1">
                    <div></div>
                    <Link className="flex text-[#4489b8] hover:text-[#1f1fe4c4] font-medium dark:text-[#5dbcfc] dark:hover:text-[#4ab1f5ea] duration-300 text-sm" href={"/Recipes/RecipeInfo"}>See More <ArrowRight className="self-center" size={15} /></Link>
                </div>
            </div>
            ))}
        </div>
    )
}

export default RecipesProduct