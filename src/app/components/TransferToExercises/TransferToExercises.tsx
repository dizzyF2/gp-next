import "./transferToExercises.css"
import Link from 'next/link'
import Image from 'next/image'
import exercisesImage from "../../../../public/HomeExercisesSection/exercise1.jpg"

function TransferToExercises() {
    return (
        <div className='p-5 flex flex-col-reverse md:flex-row mx-auto space-x gap-1 md:gap-10'>
            <div className='md:w-1/2 flex flex-col justify-center py-2  md:pt-32 text-center md:text-left'>
                
                <div className='capitalize font-bold text-3xl md:text-5xl sm:text-4xl'>
                    start your week of the right track
                </div>
                <div className='capitalize text-xl leading-9 mb-5'>
                    check out the most effective exercises
                </div>
                <button className='uppercase bg-[#FF2625] text-white p-3 rounded-lg self-center md:self-start'><Link href={"/Exercises"}>explore exercises</Link></button>
                <div className='font-semibold text-[200px] text-[#ff2625] opacity-15 hidden md:block'>
                    Exercises
                </div>
            </div>
            <div className="md:w-1/2 z-10">
                <Image className='md:rounded-l-3xl w-96 h-80 md:w-[450px] md:h-[550px]' alt='' src={exercisesImage} loading="lazy"/>
            </div>
    </div>
    )
}

export default TransferToExercises

/**
 * <div className='capitalize font-semibold text-2xl text-[#FF2625]'>
                    fitness club
                </div>
 */