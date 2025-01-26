import React from 'react'
import {Link} from 'react-router-dom'
import gambarMenu from '../images/gambarMenu1.png'
import gambarMenu2 from '../images/gambarMenu2.png'
import gambarMenu3 from '../images/gambarMenu3.png'
import gambarMenu4 from '../images/gambarMenu4.png'

function Header() {
  return (
    <div id='main' className=''>
     <div className='pr-heading'>
      <h1 className='text-orange-400 text-3xl'>Afeto</h1>
      <h2><span>Coffe and Eatery</span></h2>
      <div className='header-btns'>
        <Link to='/' className='header-btn'>
          Get in Touch {'>>'}
        </Link>
      </div>
     </div>
     <div className='gallery'>
      <img src={gambarMenu} id='menu1'></img>
      <img src={gambarMenu2} id='menu2'></img>
      <img src={gambarMenu3} id='menu3'></img>
      <img src={gambarMenu4} id='menu4'></img>
     </div>
    </div>
  )
}

export default Header