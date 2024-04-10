import SearchBar from "@/app/components/Search/SearchBar"
import Filters from "@/app/components/Filters/Filters"
import Products from "@/app/components/Products/Products"

function Coaches() {
    return (
        <div className="coaches-container">
            <div className="mt-20">
                <SearchBar specificPlaceHolder="search for coach"/>
                <Filters/>
            </div>
            <Products src="../../pages/coachPage"/>
        </div>
    )
}

export default Coaches