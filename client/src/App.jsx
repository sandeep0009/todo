
import {Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Register from "./Auth/Register";
import Login from "./Components/Login";
import "./App.css";



function App() {


  return (
    <>
   
  
    <Routes>
      <Route path="/home" element={<Home/>}/>  
      <Route path="/about" element={<About/>}/>  
      <Route path="/register" element={<Register/>} />  
      <Route path="/login" element={<Login/>} />
    </Routes>
   
      
    </>
  )
}

export default App
