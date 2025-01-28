import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Header from "./components/Header";    
import Menu from "./components/Menu";
import Write from "./components/Write";
import About from "./components/Information";
import Classic from "./components/Classic";
import Food from './components/Food'
import Login from "./components/Login";
import Register from "./components/Register"
import './style.css'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/classic" element={<Classic/>} />
        <Route path="/classic/food" element={<Food/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/regist" element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
