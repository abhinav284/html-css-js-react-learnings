import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Users from './components/Users';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
function App() {
  return (
    // modify div only
    <div>
      {/* <h2>Welcome to My Web Ap</h2>
      <p>This is my App component in React App</p>
      <p>Welcome John</p> 
       <Home author="Alex" volume= "1" /> 
      <Signup /> 
      <Login />  */}
      <Router>
        <Routes>
          <Route path="/" element={<Login />}> </Route>
          <Route path="/login" element={<Login />}> </Route>
          <Route path="/users" element={<Users />}> </Route>
          <Route path="/signup" element={<Signup />}> </Route>
          <Route path="/home" element={<Home author="Alex" volume = "1" />}> </Route>
        </Routes>
      </Router>
    </div>
  );
}
export default App;