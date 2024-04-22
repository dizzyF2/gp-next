'use client'
import { ExerciseOptions, fetchData } from '@/app/utils/fetchData'
import { Search } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import ExercisesFilter from '../exercisesFilter/ExercisesFilter';



function SearchExercises({setExercises, bodyPart, setBodyPart}:any) {
    const [search, setSearch] = useState('');
    
    //const [bodyParts, setBodyParts] = useState([])
    //const [bodyParts, setBodyParts] = useState<string[]>([]);
    const [bodyParts, setBodyParts]:any = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', ExerciseOptions)

            setBodyParts(['all', ...bodyPartsData]);
        }
        
        fetchExercisesData();
    }, [])

    const handleSearch = async () => {
        if(search){
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', ExerciseOptions);
            //console.log(exercisesData)
            const SearchedExercises = exercisesData.filter(
                (exercise:any) => exercise.name.toLowerCase().includes(search) 
                || exercise.target.toLowerCase().includes(search)
                || exercise.equipment.toLowerCase().includes(search)
                || exercise.bodyPart.toLowerCase().includes(search)
            ) 
            

            setSearch('');
            setExercises(SearchedExercises);
        } 
    }


    return (
        <>
        <div className="search flex justify-center gap-1">
            <div className="search-bar flex flex-row items-center p-2 w-[325px] md:w-[450px] bg-white dark:bg-[#333232b4] rounded-lg">
                <Search className="cursor-pointer hover:size-6" color="black" size={20} style={{marginRight:10}}/>
                <input className="border-none outline-none shadow-none w-full text-base font-semibold bg-[#fff0]" type="text" value={search}  onChange={(e) =>setSearch(e.target.value.toLowerCase())} placeholder={"Search Exercises..."}/>
            </div>
            <button className="bg-[#FF2625] p-1 rounded-lg text-white" onClick={handleSearch}>Search</button>
        </div>
        <ExercisesFilter data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </>
    )
}

export default SearchExercises