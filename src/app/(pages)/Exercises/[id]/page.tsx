'use client'

import { useState, useEffect } from "react"
import { useParams } from "next/navigation" 
import { ExerciseOptions, fetchData } from "@/app/utils/fetchData"
import ExerciseDetail from "@/app/components/ExerciseDetail/ExerciseDetail"
import ExerciseVideos from "@/app/components/ExerciseVideos/ExerciseVideos"

function ExerciseDetails() {
    const [exerciseDetail, setExerciseDetail] = useState({});
    const {id} = useParams();

    useEffect(()=>{
        const fetchExercisesData = async () =>{
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, ExerciseOptions);
            setExerciseDetail(exerciseDetailData);
        }
        fetchExercisesData();
    }, [id]);

    return (
        <>
            <ExerciseDetail exerciceDetail={exerciseDetail}/>
            <ExerciseVideos/>
        </>
    )
}

export default ExerciseDetails