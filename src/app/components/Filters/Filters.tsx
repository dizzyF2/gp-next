import {recipesFilters} from "@/app/constants"
import "./filters.css"


function Filters() {
    return (
        <div className="filters">
            <button className="active cursor-pointer">All</button>
            {recipesFilters.map((name)=>(
                <button key={name.key}>{name.filter}</button>
            ))}
        </div>
    )
}

export default Filters