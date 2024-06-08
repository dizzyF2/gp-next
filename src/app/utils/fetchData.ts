
//rapid api exercises DB
export const ExerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key':process.env.NEXT_PUBLIC_EXERCISE_RAPID_API_KEY
    }
};

//rapid api youtube Search api
export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_EXERCISE_RAPID_API_KEY,
    }
};

//edamam Recipes api
export async function fetchRecipes (filter:any){
    const {query, limit} = filter;

    const url = `https://api.edamam.com/search?q=${query}&app_id=${process.env.NEXT_PUBLIC_EDAMAM_APP_ID}&app_key=${process.env.NEXT_PUBLIC_EDAMAM_APP_KEY}&from=0&to=${limit}&`;

    const response = await fetch(url)

    const data = await response.json();

    return data?.hits;
}

//edamam recipe details fetch
export async function fetchRecipe(id:any){
    const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${process.env.NEXT_PUBLIC_EDAMAM_APP_ID}&app_key=${process.env.NEXT_PUBLIC_EDAMAM_APP_KEY}`
    
    const response = await fetch(url)
    
    const data = await response.json();
    
    return data[0];
    }


export const fetchData = async (url:string, options?:any) =>{
    const response  = await  fetch(url, options);
    const data = await response.json();

    return data;
}

