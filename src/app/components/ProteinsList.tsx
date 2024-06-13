import Image from "next/image"
import { protienInf } from "../constants"
import Link from "next/link"
import "../components/Products/Products.css"


function ProteinsList() {
    return (
        <div className="product-container items-center m-20" id="exercises">
            {protienInf.map((item:any)=>(
                <div key={item} className="card flex flex-col justify-between rounded-md  hover:scale-105 duration-300 ease-in-out bg-gradient-to-t from-[#7c7a7a18] to-[#7c7a7a18] dark:bg-gradient-to-t dark:from-[#ffffff0d] dark:to-[#ffffff0d]">
                    <Image className="flex items-center justify-center w-72 rounded-t-md h-[300px]" src={item.Image} width={150} height={150} alt={""} loading="lazy"/>
                    <div className="card-info p-4 w-5 h-36 hover:z-50 hover:overflow-visible overflow-hidden overflow-ellipsis">
                        <h2 className="title  dark:text-[#f4f4f5] dark:hover:bg-teal-50 hover:bg-gray-950 hover:text-white dark:hover:text-black font-extrabold">{item.title}</h2>
                    </div>
                    <div className=" p-1 subtitle flex gap-2 dark:text-[#a1a1aa]  w-fit ">
                    
                        <Link 
                        href={`${item.src1}`}
                        target="_blank"
                        className="dark:text-[#a1a1aa] flex  p-2 hover:text-l hover:font-bold items-baseline hover:text-xl" 
                        >
                            <h1 className="hover:cursor-pointer">{item.links}</h1>
                            <h1 className="text-2xl">🛒</h1>
                        </Link>
                    </div>
                </div>
            ))}
    </div>
    )
}

export default ProteinsList