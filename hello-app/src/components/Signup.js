import { useState } from "react";
import { Link } from "react-router-dom"; 

function Signup(){

    //Hooks = useState Hook
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const save = () => {
        alert(username + " " + password);
    }

    return(
        <div id = "signup-div">
            <h2>Signup</h2>
            Username: <input type="text" onChange={(e) => setUsername(e.target.value)} /> <br /> <br />
            Password: <input type="password" onChange={(e) => setPassword(e.target.value)} /> <br /><br /> 
            <button onClick={save}> Sign Up</button> <br /> <br />
            <Link to="/login"> Alrady Registered ?? Login</Link>
         </div>
    );
}

export default Signup;