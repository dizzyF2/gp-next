import Link from "next/link"
import "../Products/products.css"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { ExerciseOptions, fetchData } from "@/app/utils/fetchData"
import Image from "next/image"

function ExercisesCard({exercise, exercises, setExercises, bodyPart}:any) {
    console.log(exercises)
    //const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];
            try {
                if (bodyPart === 'all') {
                    exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', ExerciseOptions);
                } else {
                    exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, ExerciseOptions);
                }
                // Ensure that exercisesData is an array
                if (!Array.isArray(exercisesData)) {
                    console.error('Exercises data is not an array:', exercisesData);
                    return;
                }
                // Set exercises only if exercisesData is an array
                setExercises(exercisesData);
            } catch (error) {
                console.error('Error fetching exercises data:', error);
                // Handle the error, display a message, or set a default value for exercises
            }
        };
        fetchExercisesData();
    }, [bodyPart]);

    /*useEffect(() => {
        const fetchExercisesData = async () =>{
            let exercisesData = [];
            if(bodyPart === 'all'){
                exercisesData =  await fetchData('https://exercisedb.p.rapidapi.com/exercises', ExerciseOptions);
            }else{
                exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, ExerciseOptions);
            }

            setExercises(exercisesData);
        }
        fetchExercisesData();
    },[bodyPart]) */

    return (
        <>
            <div className="product-container" id="exercises">
                {exercises.map((exercise:any, index:any) =>(
                    <div key={index} className="card flex flex-col justify-between rounded-md dark:border-[#5dbcfc4d] dark:border-2 dark:hover:border-[#5dbcfc] bg-gradient-to-t from-[#7c7a7a18] to-[#7c7a7a18] dark:bg-gradient-to-t dark:from-[#ffffff0d] dark:to-[#ffffff0d]">
                        <Image unoptimized className="flex items-center justify-center w-72 rounded-t-md" src={exercise.gifUrl} width={150} height={150} alt={exercise.name} loading="lazy"/>
                        <div className="card-info">
                            <button className="mb-2 mr-1 text-white bg-[#ffa9a9] text-sm rounded-xl capitalize p-2">
                                {exercise.bodyPart}
                            </button>
                            <button className="mb-2 mr-1 text-white bg-[#fcc757] text-sm rounded-xl capitalize p-2">
                                {exercise.target}
                            </button>
                            <h2 className="title dark:text-[#f4f4f5] font-bold text-[22px]">{exercise.name}</h2>
                            
                        </div>
                            <div className="flex justify-end mb-2 mr-2">
                                <Link className="flex text-[#4489b8] hover:text-[#1f1fe4c4] font-medium dark:text-[#5dbcfc] dark:hover:text-[#4ab1f5ea] duration-300 text-lg" href={`http://localhost:1234/tttt`}>Details <ArrowRight className="self-center" size={15} /></Link>
                            </div>
                    </div>
                ))}
            </div>
            <div className="mt-[100px] flex justify-center items-center">
                {/*exercises.length < 3 && (
                    <div className="flex justify-center items-center">
                        <div className="flex justify-center gap-5">
                        <div className="cursor-pointer"><ChevronLeft onClick={()=>{setCurrentPage(currentPage-1)}}/></div>
                        <div className=" text-center rounded-full px-2 bg-cover cursor-pointer hover:bg-slate-200 hover:text-black">{currentPage}</div>
                        <div className="cursor-pointer"><ChevronRight onClick={()=>{setCurrentPage(currentPage+1)}}/></div>
                        </div>
                    </div>
                )*/}
            </div>
        </>
    )
}

export default ExercisesCard