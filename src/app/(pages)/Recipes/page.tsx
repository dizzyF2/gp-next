import SearchBar from "@/app/components/Search/SearchBar"
import Filters from "@/app/components/Filters/Filters"
import RecipesProduct from "@/app/components/RecipesProduct/RecipesProduct"

function Recipes() {
    return (
        <div className="recipes-container">
            <div className="mt-20">
                <SearchBar specificPlaceHolder={"Search For Recipe..."}/>
                <Filters/>
            </div>
            <RecipesProduct/>
        </div>
    )
}

export default Recipes