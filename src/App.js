import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Order from "./components/Order";
import Write from "./components/Write";

function App() {
  return (
    <div className="App">
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/order" element={<Order/>} />
        </Routes>
      </Router> */}
      <Navbar />
      <Header/>
      <Order/>
    </div>
  );
}

export default App;
