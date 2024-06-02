import Image from 'next/image';

function RecipeDetail({recipe}:any) {
    const {image, label, cusisineType, dietLabel, mealType, uri} = recipe?.recipe

    return(
        <div className='w-full'>
            <div>
                detail page
            </div>
        </div>
    )
}

export default RecipeDetail

