import RecipeDetail from '@/app/components/RecipeDetail'
import React from 'react'
import { getCurrentUser } from '../../../../../lib/appwrite'
import { redirect } from 'next/navigation'

async function RecipeInfo() {
    const user = await getCurrentUser()
    if(!user){
        redirect("/Login")
    }
    
    return (
        <RecipeDetail/>
    )
    }

export default RecipeInfo