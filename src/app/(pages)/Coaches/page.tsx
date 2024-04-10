import Filters from "@/app/components/Filters/Filters"
import Products from "@/app/components/Products/Products"
import SearchBar from "@/app/components/Search/SearchBar"


function Coaches() {
    return (
        <div className="coaches-container">
            <div className="mt-20">
                <SearchBar specificPlaceHolder="search for coach"/>
                <Filters/>
            </div>
            <Products src="../Coaches/Profile"/>
        </div>
    )
}

export default Coaches