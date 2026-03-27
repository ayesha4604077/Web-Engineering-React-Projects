import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import Home from "./components/home";
import Add from "./components/add";
import Students from "./components/students";
import Cards from "./components/cards";

function App(){
    const [list,setList] = useState([]);
    const addstudent = (s) => {
        setList([...list,s])
    }
    return (
            <BrowserRouter>
            <nav className="bg-gray-200 p-4 space-x-4">
                <Link to = "/">Home</Link>
                <Link to = "/students">Students Table</Link>
                <Link to = "/cards">Student Cards</Link>
                <Link to = "/add">Add Student</Link>
            </nav>

            <Routes>
                <Route path = "/" element = {<Home/>} />
                <Route path = "/students" element = {<Students list= {list}/>} />
                <Route path = "/cards" element = {<Cards list = {list}/>} />
                <Route path = "/add" element= {<Add addstudent = {addstudent}/>} />
            </Routes>
            </BrowserRouter>
    );
}

export default App;