import React from 'react'
import Panah from '../images/panah kiri.png'
import { Link } from 'react-router-dom'



function Catering() {
  return (
    <section id='catering'>
        <Link to='/'className='arrow-food'>
            <img src={Panah}/>
            <h1>Catering</h1>
        </Link>
        <div className='cat-title'>
          <h1>Weekly Menu</h1>
          <p>7 January</p>
        </div>
        <div className='sec-cat'>
          <div className='isi-menu'>
            <h1>NAMA</h1>
            <p>description</p>
            <div className='harga'>
              <p>15k</p>
            </div>
          </div>
          <div className='isi-menu'>
            <h1>NAMA</h1>
            <p>description</p>
            <div className='harga'>
              <p>15k</p>
            </div>
          </div>
        </div>
        </section>
    )
    }

    export default Catering