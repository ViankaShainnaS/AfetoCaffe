import React from 'react'
import background from '../images/aft.png'
import Whatsapp from '../images/icon-wa.svg'
import Location from '../images/location-icon.png'
import telephone from '../images/icon-telp.png'
import Logo from '../images/biru2.png'
import Instagram from '../images/icons8-instagram-100.png'
import instagramColored from '../images/instagram-colored.svg'
import Maps from '../images/maps-colored.svg'

function Reservation() {
  return (
    <section id='reservation'>
        <div className='resev'>
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
        <div className='footer'>
          <div className='logo-afeto'>
            <img src={Logo}></img>
          </div>
          <div className='info'>
           <div className='address'>
            <a href='https://maps.app.goo.gl/6FFa8Anr8uwTaNDm8'>
              <img src={Location}></img>
              <h6>Jl. Dr. Cipto Kp. Subuh No.345, Karangturi, Kec. Semarang Tim., Kota Semarang, Jawa Tengah 50124</h6>
            </a>
           </div>
           <div className='telp'>
            <img src={telephone}></img>
            <h6>+62 878-0692-3803</h6>
           </div>
           <div className='instagram'>
            <a href='https://www.instagram.com/afeto.coffeeneatery/'>
            <img src={Instagram}></img>
            <h6>@afeto.coffeeneatery</h6>
            </a>
           </div>
          </div>
          <div className='copy-right'>
            <p>©2024 Afeto Coffee and Eatery, All Rights Reserved.</p>
          </div>
        </div>
    </section>
  )
}

export default Reservation