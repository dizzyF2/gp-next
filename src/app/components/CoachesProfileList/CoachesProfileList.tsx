import Image from "next/image"
import { CoachesList } from "@/app/constants"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import "../Products/products.css"


function CoachesProfileList() {
    return (
        <div className="product-container">
                {CoachesList.map((item)=>(
                    <div key={item.key} className="p-3 flex flex-col justify-between w-[250px] border-2 border-solid border-[#5fbdfc4d] duration-300 hover:border-2 hover:border-solid hover:border-[#5dbcfc] hover:scale-[1.01 hover:rotate-[1deg]">
                        <div className="flex flex-col gap-1 justify-center items-center">
                            <Image loading="lazy" className="rounded-full h-24 w-24" src={item.img} alt="" width={200} height={200}/>
                            <h5 className="dark:text-[#f4f4f5] font-extrabold">{item.name}</h5>
                            <p className="text-sm leading-5 dark:text-[#a1a1aa]">{item.review}</p>
                        </div>
                        <div className="flex justify-between w-full pt-5 pb-0">
                            <div></div>
                            <Link className="flex text-[#4489b8] hover:text-[#1f1fe4c4] font-medium dark:text-[#5dbcfc] dark:hover:text-[#4ab1f5ea] duration-300 text-sm" href={"/Coaches/Profile"}>See More <ArrowRight className="self-center" size={15} /></Link>
                        </div>
                    </div>
                ))}      
        </div>
    )
}

export default CoachesProfileList