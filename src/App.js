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
import './style.css'

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/classic" element={<Classic/>} />
        <Route path="/classic/food" element={<Food/>} />
      </Routes>
    </Router>
  );
}

export default App;
