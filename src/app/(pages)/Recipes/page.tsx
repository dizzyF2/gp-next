import Products from "@/app/components/Products/Products"
import SearchBar from "@/app/components/Search/SearchBar"
import Filters from "@/app/components/Filters/Filters"

function Recipes() {
    return (
        <div className="recipes-container">
            <div className="mt-20">
                <SearchBar specificPlaceHolder={"Search For Recipe..."}/>
                <Filters/>
            </div>
            <Products src="/"/>
        </div>
    )
}

export default Recipes