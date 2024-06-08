import CoachesProfileList from "@/app/components/CoachesProfileList/CoachesProfileList"
import { trainerFilters } from "@/app/constants"
import "../../components/Filters/filters.css"


function Coaches() {
    return (
        <div className="coaches-container">
            <div className="mt-20">
                {/*<SearchBar specificPlaceHolder="search for coach"/> */}
                <div className="filters">
                    <button className="active cursor-pointer">
                        All
                    </button>
                    {trainerFilters.map((name)=>(
                        <button key={name.key}>
                            {name.filter}
                        </button>
                    ))}
                </div>
            </div>
            <CoachesProfileList/>
        </div>
    )
}

export default Coaches