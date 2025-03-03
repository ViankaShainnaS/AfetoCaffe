import React from 'react'
import background from '../images/aft.png'
import Whatsapp from '../images/icon-wa.svg'
import Location from '../images/location-icon.png'
import telephone from '../images/icon-telp.png'
// import Logo from '../images/biru2.png'
import Instagram from '../images/icons8-instagram-100.png'
import instagramColored from '../images/instagram-colored.svg'
import Maps from '../images/maps-colored.svg'
import Logo from '../images/putih 2.png'
import {Link} from 'react-router-dom'

function Reservation() {
  return (
    <section id='resev-menu'>
        <div className='resev'>
        <Link to='/'className='arrow-food'>
            <img src={Logo}/>
        </Link>
        <h1>More Info:</h1>
        <h5>(Reservation & orders only via Whatsapp)</h5>
        <div className='icon'>
          <a href='https://www.instagram.com/afeto.coffeeneatery/'>
            <img src={instagramColored} alt='icon-ig'></img>
          </a>
          <a href='https://api.whatsapp.com/send/?phone=6285866000075&text&type=phone_number&app_absent=0'>
            <img src={Whatsapp} alt='icon-wa'></img>
          </a>
          <a href='https://maps.app.goo.gl/6FFa8Anr8uwTaNDm8'>
            <img src={Maps} alt='icon-map'></img>
          </a>
          </div>
        </div>
    </section>
  )
}

export default Reservation