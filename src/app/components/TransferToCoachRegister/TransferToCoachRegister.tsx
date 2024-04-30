import Link from "next/link"

function TransferToCoachRegister() {
    return (
        <div className="flex flex-col justify-center items-center gap-5 ml-10 md:ml-0">
            
            <h2 className="capitalize font-bold text-2xl md:text-3xl text-left mb-10">interest to become a coach?</h2>
            <button className="ml-36 bg-[#ff2625] uppercase rounded-lg p-2 text-sm text-white"><Link href={"/Register"}>register now</Link></button>
        </div>
    )
}

export default TransferToCoachRegister