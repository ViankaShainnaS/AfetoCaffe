import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./components/Home";
import Menu from './components/Menu'
import Classic from "./components/Classic";
import Food from './components/Food'
import Snack from './components/Snack'
import Login from "./components/Login";
import Register from "./components/Register"
import Drink from './components/Drink'
import Catering from './components/cateringMenu'
import './style.css'
import Reservation from "./components/Reservation";
import Admin from "./components/Admin/menuAdmin";
import EditCatering from './components/Admin/editCatering'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/catering" element={<Catering/>}></Route>
        <Route path="/classic" element={<Classic/>} />
        <Route path="/classic/food" element={<Food/>} />
        <Route path="/classic/snack" element={<Snack/>} />
        <Route path="/classic/drink" element={<Drink/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/regist" element={<Register/>}/>
        <Route path="/resev" element={<Reservation/>}/>
        <Route path="/menu/editCatering" element={<EditCatering/>}/>
        <Route path="/menu" element={<Admin/>}/>
      </Routes>
    </Router>
  );
}

export default App;
