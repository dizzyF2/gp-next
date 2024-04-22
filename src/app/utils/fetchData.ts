
export const ExerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key':process.env.NEXT_PUBLIC_EXERCISE_RAPID_API_KEY
    }
};


export const fetchData = async (url:string, options:any) =>{
    const response  = await  fetch(url, options);
    const data = await response.json();

    return data;
}