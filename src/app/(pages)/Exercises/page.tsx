'use client'
import ExercisesCard from "@/app/components/ExercisesCard/ExercisesCard";
import SearchExercises from "@/app/components/SearchExercises/SearchExercises"
import { useState } from "react";


function Exercises() {
    const [bodyPart, setBodyPart] = useState<string[]>(['all']);
    const [exercises, setExercises] = useState([]);


    return (
        <div className="exercises-container" id="Exercises">
            <div className="mt-20">
                <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            </div>
            <ExercisesCard exercise={exercises} exercises={exercises} setExercises={setExercises} bodyPart={bodyPart}/>
        </div>
    )
}

export default Exercises