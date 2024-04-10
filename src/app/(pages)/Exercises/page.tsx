import SearchBar from "@/app/components/Search/SearchBar"
import Filters from "@/app/components/Filters/Filters"
import Products from "@/app/components/Products/Products"

function Exercises() {
    return (
        <div className="exercises-container">
            <div className="mt-20">
                <SearchBar specificPlaceHolder="Search for exercises"/>
                <Filters/>
            </div>
            <Products src="../../pages/ExerciseInfo"/>  
        </div>
    )
}

export default Exercises