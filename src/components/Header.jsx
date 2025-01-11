import React from 'react'
import {Link} from 'react-scroll'
import gambarMenu from '../images/gambarMenu1.png'
import gambarMenu2 from '../images/gambarMenu2.png'
import gambarMenu3 from '../images/gambarMenu3.png'
import gambarMenu4 from '../images/gambarMenu4.png'

function Header() {
  return (
    <div id='main'>
     <div className='pr-heading'>
      <h1>Afeto</h1>
      <h2><span>Coffe and Eatery</span></h2>
      {/* <p className='details'>Afeto Café merupakan kafe bergaya Santorini yang menghadirkan suasana khas pulau Yunani 
        dengan desain arsitektur dominan warna putih dan biru.Menyajikan berbagai makanan khas Indonesia, salad segar, dan minuman eksotis.
        Afeto Café merupakan tempat yang cocok untuk bersantai, berfoto, atau berkumpul bersama teman dan keluarga. </p> */}
      <div className='header-btns'>
        <Link to='/order'>
          <a href='#'className='header-btn'>Order Now {'>>'} </a>
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