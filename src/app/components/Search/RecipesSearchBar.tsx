import { Search } from "lucide-react";


interface props{
    type?:any;
    placeholder?:string;
    required?:any;
    value?:any;
    name?:string;
    handleInputChange?:any;
    rightIcon?:any;
}
const RecipeSearchBar = ({type,placeholder,required = false,value,name,handleInputChange,rightIcon}:props) => {
    return (
        <div>
            <div className="search flex justify-center gap-1">
                <div className="search-bar flex flex-row items-center p-2 w-[325px] md:w-[450px] bg-white dark:bg-[#333232b4] rounded-lg">
                    <Search className="cursor-pointer hover:size-6" color="black" size={20} style={{marginRight:10}}/>
                    <input
                        type={type || "text"}
                        name={name}
                        placeholder={placeholder}
                        value={value}
                        onChange={handleInputChange}
                        required={required}
                        className={`border-none outline-none shadow-none w-full text-base font-semibold bg-[#fff0]`}
                    />
                </div>
            </div>
        </div>
    );
    };

export default RecipeSearchBar;