import { Search } from "lucide-react"
import "./searchbar.css"

type defindtype={
    specificPlaceHolder: string;
}
function SearchBar({specificPlaceHolder}:defindtype) {
    return (
        <div className="search flex justify-center gap-1">
            <div className="search-bar flex flex-row items-center p-2 w-[325px] md:w-[450px] bg-white dark:bg-[#333232b4] rounded-lg">
                <Search className="cursor-pointer hover:size-6" color="black" size={20} style={{marginRight:10}}/>
                <input className="border-none outline-none shadow-none w-full text-base font-semibold bg-[#fff0]" type="search" placeholder={specificPlaceHolder}/>
            </div>
            <button className="bg-[#FF2625] p-1 rounded-lg text-white">Search</button>
        </div>
    )
}

export default SearchBar