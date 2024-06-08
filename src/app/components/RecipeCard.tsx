import Image from "next/image"
import Link from "next/link"


function RecipeCard({recipe}:any) {
    const {image, label, cusisineType, dietLabel, mealType, uri} = recipe?.recipe
    
    const id = uri?.split("#")[1]
    
    return (
        <div className="flex flex-col w-fit justify-center items-center ">
            <Link href={`/Recipes/${id}`} className="">
                <div className="flex flex-col justify-between p-3 w-[320px] gap-5">
                    <Image src={image} alt={label} width={400} height={400}/>
                    <div className="flex justify-center">
                        <p className="text-black dark:text-white">{label}</p>
                    </div>
                    <div className="mb-1">
                            <span className="px-5 py-3 font-semibold capitalize bg-slate-200 dark:bg-[#010804b4] shadow-xl rounded-full text-green-500">
                                {mealType}
                            </span>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default RecipeCard