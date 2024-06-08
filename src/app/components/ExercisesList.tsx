'use client';
import { useState } from 'react'
import SearchExercises from './SearchExercises/SearchExercises';
import ExercisesCard from './ExercisesCard/ExercisesCard';

function ExercisesList() {

    const [bodyPart, setBodyPart] = useState<string[]>(['all']);
    const [exercises, setExercises] = useState([]);
    return (
        <div className="exercises-container flex flex-col justify-center items-center" id="Exercises">
            <div className="mt-20">
                <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            </div>
            <ExercisesCard exercise={exercises} exercises={exercises} setExercises={setExercises} bodyPart={bodyPart}/>
        </div>
    )
}

export default ExercisesList