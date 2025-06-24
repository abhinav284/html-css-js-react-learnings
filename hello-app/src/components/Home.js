import { Link } from "react-router-dom";

function Home(props){
    const name = "John";
    const age = 21;
    const msg = <h2>MY name is {name} and My Age is {age}</h2>

    return(
        <div>
            <ul>
                <li>Home</li>
                <li><Link to ="/users">Users</Link></li>
                <li>Products</li>
                <li>Orders</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li><Link to="/">Logout</Link></li> 
            </ul>
            <h2>Home Component</h2>
            <h2>Welcome {name}</h2>
            {msg}
            <h2>Author is {props.author} and book volume is {props.volume}</h2>
        </div>
    );
}

export default Home;