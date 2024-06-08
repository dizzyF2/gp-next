import "../Filters/filters.css"

type ExProps={
    data:any;
    bodyPart:string;
    setBodyPart:any;
}
function ExercisesFilter({data, bodyPart, setBodyPart}:ExProps) {
    return (
        <div className="filters">
            {data && data.map((item: any) => (
                <button 
                    onClick={()=>{setBodyPart(item);}}
                    className={bodyPart==item?'active':''}
                    key={item.id || item}
                    itemID={item.id || item}
                    title={item.id || item}
                >
                    {item}
                </button>
            ))}
        </div>
    )
}

export default ExercisesFilter