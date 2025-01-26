import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Classic from './Classic'
import Header from './Header'
import Menu from './Menu'
import About from './Information'
import Gallery from './Gallery'
import Navbar from './Navbar'



const Home = () => {
  return (
    <div id='home'>
    <Header/>
    <Menu/>
    <About/>

    </div>
    // <Router>
    //   <Navbar/>
    //     <Routes>
    //       {/* <Route path="/" element={<div><Header/><Menu/></div>} /> */}
    //       <Route path="/" element={<Header/>} />
    //       <Route path="/menu" element={<Menu/>} />
    //       <Route path="/about" element={<About/>} />
    //       <Route path="/menu/classic" element={<Classic/>}/>
    //     </Routes>
    //     {/* <Login /> */}
    //   </Router>
  )
}

export default Home