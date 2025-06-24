import { Link } from "react-router-dom"; 
import {useEffect, useState} from "react";

    function Users(){
    const [data,setResponseData] = useState([]);

    useEffect( () => {
        console.log("loading Users component");
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(resp => resp.json())
        .then(res => {
            console.log("Response data is : " + JSON.stringify(res));
            setResponseData(res);

    });
});
    return(

    <div> <li><Link to="/home">Home</Link></li>
        <h2>Get API using fetch</h2>  
        {/* [https://jsonplaceholder.typicode.com/posts](https://jsonplaceholder.typicode.com/posts) */}  
        {data.map((resp)=>(  
            <ul>  
                <li>{resp.id + " : "}{resp.title}</li>  
            </ul>  
        ))}  
    </div>
    )
}

export default Users;