import { useState } from "react";
import { Link } from "react-router-dom";
function Login(){

    //Hooks = useState Hook
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const validate = () => {
        // alert(username + " " + password);
    }

    return(
        <div id = "login-div">
            <h2>Login</h2>
            Username: <input type="text" onChange={(e) => setUsername(e.target.value)} /> <br /> <br />
            Password: <input type="password" onChange={(e) => setPassword(e.target.value)} /> <br /><br /> 
            <button onClick={validate}> <Link to="/home">Login</Link></button> <br /><br />
            <Link to="/signup"> Not yet Registered ?? Sign Up</Link>
         </div>
    );
}

export default Login;