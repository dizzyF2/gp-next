import Image from "next/image"
import image1 from '../../../../public/11.webp'
import "./products.css"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

type props ={
    src:string;
}
function Products({src}:props) {
    return (
    <div className='product-container'>
            {["1","2","3","4","5","1","2","3","4","5","1","2","3","4","5"].map((item)=>{
                return(
                    <div key={item} className="card dark:border-[#5dbcfc4d] dark:border-2 dark:hover:border-[#5dbcfc] bg-gradient-to-t from-[#7c7a7a18] to-[#7c7a7a18] dark:bg-gradient-to-t dark:from-[#ffffff0d] dark:to-[#ffffff0d]">
                        <Image className="flex items-center justify-center" src={image1} width={150} height={150} alt=""/>
                        <div className="card-info">
                            <h2 className="title dark:text-[#f4f4f5] font-extrabold">Product Name</h2>
                            <p className="subtitle dark:text-[#a1a1aa]">Lorem ipsum dolori aperiam rerum id quod eligendi debitis earum nesciunt!</p>
                            <div className="more ">
                                <div></div>
                                <Link className="flex text-[#4489b8] hover:text-[#1f1fe4c4] font-medium dark:text-[#5dbcfc] dark:hover:text-[#4ab1f5ea] duration-300 text-sm" href={src}>See More <ArrowRight className="self-center" size={15} /></Link>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Products