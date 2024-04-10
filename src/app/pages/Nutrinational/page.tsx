import SearchBar from "@/app/components/Search/SearchBar"
import "./globals.css"
import Filters from "@/app/components/Filters/Filters"
import Products from "@/app/components/Products/Products"

function Nutrinational() {
    return (
        <div className="bulk-container">
            <div className="mt-20">
                <SearchBar specificPlaceHolder="Search..."/>
                <Filters/>
            </div>
            <Products src="/"/>
        </div>
    )
}

export default Nutrinational