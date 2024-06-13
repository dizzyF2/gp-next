
import { Facebook, Instagram, MapPin } from "lucide-react"
import Image from "next/image"
import { gymInf } from "../constants"
import "../components/Products/Products.css"
import Link from "next/link";

function GymList() {
    
    return (
        <div className="product-container items-center m-20" id="exercises">
            {gymInf.map((item:any)=>(
                <div key={item} className="card flex flex-col justify-between rounded-md  hover:scale-105 duration-300 ease-in-out bg-gradient-to-t from-[#7c7a7a18] to-[#7c7a7a18] dark:bg-gradient-to-t dark:from-[#ffffff0d] dark:to-[#ffffff0d]">
                    <Image className="flex items-center justify-center w-72 rounded-t-md" src={item.Image} width={150} height={150} alt={""} loading="lazy"/>
                    <div className="card-info p-4">
                        <h2 className="title dark:text-[#f4f4f5] font-extrabold">{item.title}</h2>
                        <div className=" subtitle dark:text-[#a1a1aa] flex ">
                            <Link target="_blank" href={`${item.srcFace}`} className="dark:text-[#a1a1aa] flex  p-2 hover:text-l hover:font-bold" ><Facebook className="text-blue-600 hover:text-blue-900" size={35}/></Link>
                            <Link target="_blank" href={`${item.srcInsta}`} className="dark:text-[#a1a1aa] flex  p-2 hover:text-l hover:font-bold" ><Instagram className="text-pink-600 hover:text-pink-800" size={35}/></Link>
                        </div>
                        <div className="flex justify-start">
                            <Link  href={`${item.srcLocation}`} className="dark:text-[#a1a1aa] flex  p-2 hover:text-l hover:font-bold" ><MapPin className="text-blue-400 hover:text-blue-900" size={25}/></Link>
                        </div>
                    </div>
                    
                </div>
            ))}
    </div>
    )
}

export default GymList
