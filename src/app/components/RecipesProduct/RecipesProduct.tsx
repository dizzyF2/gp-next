'use client'

import { useEffect, useState } from "react"
import RecipeCard from "../RecipeCard";
import { fetchRecipes } from "@/app/utils/fetchData";
import Loading from "../Loading";
import RecipeSearchBar from "../Search/RecipesSearchBar";


function RecipesProduct() {

        

        const [recipes, setRecipes] = useState([]);
        const [limit, setLimit] = useState(30);
        const [query, setQuery] = useState('Vega');
        const [loading, setLoading] = useState(false);

        const handleChange = (e:any) => {
            setQuery(e.target.value)
        }
    
        const fetchRecipe = async () => {
            try {
                const data = await fetchRecipes({ query, limit })
    
                setRecipes(data)
    
                setLoading(false)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
    
        const handleSearchedRecipe = async (e:any) => {
            e.preventDefault()
            fetchRecipe()
        }

        const resetquery = async () =>{
            setQuery("vega");
            fetchRecipe()
        }
    
        const showMore = () => {
            setLimit(prev => prev + 10)
            fetchRecipe()
        }
    
        useEffect(() => {
            setLoading(true)
    
            fetchRecipe()
    
        }, [])
    
        if (loading) {
            return (
                <Loading />
            )
        }


    return (
        <div className="flex flex-col justify-center items-center">
            <div className='w-full flex  items-center justify-center pt-10 pb-5 px-0 md:px-10'>
                <form className='w-full flex justify-center lg:w-2/4' onSubmit={handleSearchedRecipe}>
                    <RecipeSearchBar placeholder="eg. Cake, Vegan, Chicken"
                        handleInputChange={handleChange}
                    />
                    <button className="bg-[#FF2625] p-1 rounded-lg text-white" onClick={handleSearchedRecipe}>Search</button>
                </form>
            </div>
            <button className=" bg-[#FF2625] p-2 px-5 rounded-lg text-white" onClick={resetquery}>All</button>
            {
                recipes?.length > 0 ? (
                    <>
                        <div className='w-full flex flex-wrap justify-center gap-10 px-1 lg:px-10 py-10'>
                            {
                                recipes?.map((item, index) => (
                                    <RecipeCard recipe={item} key={index} />))
                            }
                        </div>

                        <div className='flex w-full items-center justify-center py-10'>

                            <button 
                                title="Show More"
                                className="bg-[#ff2526] text-white px-3 py-1 rounded-full text-sm"
                                onClick={showMore}
                                >
                                    Show More
                            </button>
                        </div>
                    </>
                ) : <div className='text-black dark:text-white w-full font-bold items-center justify-center py-10'>
                    <p className='text-center '>No Recipe Found</p>
                </div>
            }
        </div>
    )
}

export default RecipesProduct



/*  

<div className="product-container">
            {["1","2","3","4","5","6","7","8","9","10"].map((item)=>{
                return(
                <div  key={item} className=" flex flex-col justify-between w-[250px] border-2 border-solid border-[#5fbdfc4d] duration-300 hover:border-2 hover:border-solid hover:border-[#5dbcfc] hover:scale-[1.01 hover:rotate-[1deg]">
                    <div className="flex flex-col gap-3 w-full">
                        <Image loading="lazy" className="w-auto h-60" src={image1} alt="" width={250} height={250}/>
                        <h5 className="dark:text-[#f4f4f5] font-extrabold p-1">Recipe name</h5>
                        <p className="text-sm leading-5 dark:text-[#a1a1aa] p-1">discription</p>
                    </div>
                    <div className="flex justify-between w-full pt-5 pb-1">
                        <div></div>
                        <Link className="flex text-[#4489b8] hover:text-[#1f1fe4c4] font-medium dark:text-[#5dbcfc] dark:hover:text-[#4ab1f5ea] duration-300 text-sm" href={"/Recipes/RecipeInfo"}>See More <ArrowRight className="self-center" size={15} /></Link>
                    </div>
                </div>
            )
            })}
        </div>


*/