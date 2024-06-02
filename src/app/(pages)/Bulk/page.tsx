import axios from "axios";

function Bulk() {
    let response = axios.get("http://localhost:4000/");
    response.then((data)=>{
    console.log(data.data);
})
    
    return (
        <div className="bulk-container">
            
        </div>
    )
}

export default Bulk