'use client'

import Loading from '@/app/components/Loading'
import { fetchRecipe, fetchRecipes } from '@/app/utils/fetchData'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import RecipeCard from '@/app/components/RecipeCard'
import { Pin } from 'lucide-react'




function RecipeDetail() {
    
    

    const [recipe, setRecipe] = useState<any>(null); // Set initial type as any
    const [recipes, setRecipes] = useState<any[]>([]); // Set initial type as any[]
    const [loading, setLoading] = useState(false);

    

    const {id} = useParams()

    
    const getRecipe = async (id:any) => {
        try {
            setLoading(true)

            const data = await fetchRecipe(id)

            setRecipe(data)

            const recommend = await fetchRecipes({ query: recipe?.label, limit: 6 })

            setRecipes(recommend)

            setLoading(false)


        } catch (error) {
            console.log(error)

            setLoading(false)
        }
    }
    
    useEffect(() => {
    getRecipe(id)
    }, [id])

    if (loading) {
        return (
            <div className='w-full h-[100vh] flex items-center justify-center'>
            <Loading />
            </div>
        );
    }

    return (
        <div className='flex flex-col justify-center items-center gap-20 md:gap-10 px-20 my-14'>
            <div className='py-10  gap-10 flex flex-col items-center justify-center'>
                {/*Recipe Picture */}
                <div className=''>
                    <Image className='md:w-[500px]' src={recipe?.image} alt={recipe?.label} width={500} height={500}/>
                </div>
                {/*Recipe Name */}
                <div>{recipe?.label}</div>

                {/*Recipe Details */}
                <div className='flex flex-row gap-5'>
                    {/*Recipe detail Calories: calories */}
                    <div className='flex flex-col justify-between'>
                        <span className=' text-black dark:text-white text-center border border-gray-500 py-1 px-2 rounded-full mb-2'>{(recipe?.calories.toFixed(2))}</span>
                        <p className='text-black dark:text-neutral-100 text-[12px] md:text-sm uppercase'>Calories</p>
                    </div>
                    {/*Recipe detail totalTime: totalTime */}
                    <div className='flex flex-col justify-between'>
                        <span className='text-black dark:text-white text-center border border-gray-500 py-1 px-2 rounded-full mb-2'>{recipe?.totalTime}</span>
                        <p className='text-black dark:text-neutral-100 text-[12px] md:text-sm uppercase'>Total Time</p>
                    </div>
                    {/*Recipe detail servings: yield */}
                    <div className='flex flex-col justify-between'>
                        <span className='text-black dark:text-white text-center border border-gray-500 py-1 px-2 rounded-full mb-2'>{recipe?.yield}</span>
                        <p className='text-black dark:text-neutral-100 text-[12px] md:text-sm uppercase'>servings</p>
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col md:flex-row gap-8 py-10 md:py-20 px-4 md:px-10'>
                {/* LEFT SIDE */}
                <div className='w-full md:w-2/4 md:border-r border-slate-400 dark:border-slate-200 md:pr-1'>
                    <div className='flex flex-col items-center gap-5 w-[500px]'>
                        <p className='text-green-700 dark:text-green-500 w-fit p-3 rounded-3xl text-2xl underline'>Ingredients</p>
                        <div className='flex flex-col gap-3 justify-start items-start'>
                        {
                            recipe?.ingredientLines?.map((item:any, index:any)=>{
                                return(
                                    <p key={index} className='flex text-black gap-2 dark:text-neutral-100 text-xl font-semibold md:text-lg'>
                                        <Pin className='text-xl text-green-800' size={30}/>
                                        {item}
                                    </p>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
                {/* RIGHT SIDE */}
                <div className='w-full md:w-2/4 border-t md:border-none border-slate-400 dark:border-slate-200'>
                    <div className='flex flex-col items-center gap-5 w-[500px]'>
                        <p className='text-green-700 dark:text-green-500 w-fit p-3 rounded-3xl text-2xl underline'>Health label</p>
                        <div className='flex flex-wrap gap-4'>
                        {
                            recipe?.healthLabels?.map((item:any, index:any)=>{
                                return(
                                    <p key={index} className='text-black dark:text-neutral-100 text-xl font-semibold md:text-lg bg-green-500 rounded-full p-3'>
                                        {item}
                                    </p>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center lg:justify-start flex-wrap items-center lg:flex-row lg:gap-[110px] sm:gap-1'>
                    {
                        recipes?.length > 0 &&(
                            <>
                                <p className='text-black dark:text-white text-4xl font-bold capitalize'>you can also try this</p>
                                <div className='flex flex-wrap justify-center gap-6 px-1 mt-3'>
                                    {
                                        recipes?.map((item:any, index:any)=>(
                                            <RecipeCard recipe={item} key={index} />
                                        ))
                                    }
                                </div>
                            </>
                        )
                    }
                </div>
        </div>    
    )
}

export default RecipeDetail