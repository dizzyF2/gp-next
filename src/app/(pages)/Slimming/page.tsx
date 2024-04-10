import SearchBar from "@/app/components/Search/SearchBar"
import Filters from "@/app/components/Filters/Filters"
import Products from "@/app/components/Products/Products"

function Slimming() {
    return (
        <div className="slimming-container">
            <div className="mt-20">
                <SearchBar specificPlaceHolder="Search..."/>
                <Filters/>
            </div>
            <Products src="/"/>
        </div>
    )
}

export default Slimming