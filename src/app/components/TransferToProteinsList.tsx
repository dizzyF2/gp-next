import Link from "next/link"
import { toProteinList } from "../constants"
import Image from "next/image"


function TransferToProteinsList() {
    return (
        <div className="text-center mx-auto">
            <h2 className="capitalize font-bold text-2xl md:text-3xl text-left mb-10 ml-10 md:ml-0">Explore Protein Products </h2>
            <div className="flex flex-col w-fit">
                <div className="mt-10 flex flex-col space-x-0 space-y-3 m-20 md:flex-row md:space-x-3 md:space-y-0 md:m-0 mb-0">
                {toProteinList.map((item:any)=>(
                    <div key={item} className="product-container">
                        <div  className="card flex flex-col justify-between rounded-md  hover:scale-105 duration-300 ease-in-out bg-gradient-to-t from-[#7c7a7a18] to-[#7c7a7a18] dark:bg-gradient-to-t dark:from-[#ffffff0d] dark:to-[#ffffff0d]">
                        <Image className="flex items-center justify-center w-72 rounded-t-md h-[300px]" src={item.Image} width={150} height={150} alt={""} loading="lazy"/>
                        
                        <div className=" p-1 subtitle flex gap-2 dark:text-[#a1a1aa]  w-fit ">
                        
                            <Link 
                            href={`${item.src1}`}
                            className="dark:text-[#a1a1aa] flex  p-2 hover:text-l hover:font-bold items-baseline hover:text-xl" 
                            >
                                <h1 className="hover:cursor-pointer">{item.links}</h1>
                                <h1 className="text-2xl">🛒</h1>
                            </Link>
                        </div>
                    </div>
                    </div>
            ))}
                </div>
                <div className="flex justify-center md:justify-end pt-2">
                        <button className="bg-[#ff2625] uppercase rounded-lg p-2 text-white"><Link href={"/Proteins"}>Show All</Link></button>
                </div>
            </div>
        </div>
    )
}

export default TransferToProteinsList