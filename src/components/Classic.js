import React from 'react'
import Panah from '../images/panah kiri.png'
import logoBiru from '../images/logoNavbar.png'
import {Link} from 'react-router-dom'
import Food from '../images/food.png'
import Snack from '../images/snack.png'
import Drink from '../images/drink.png'


function Classic() {
  return (
    <section id='cMenu'>
        <div className='arrow-cat'>
          <Link to='../'>
            <img src={Panah}/>
          </Link>
        </div>
        <div className='logo'>
            <img src={logoBiru}/>
        </div>
        <div className='menu-cat'>
          <h1>Menu Category</h1>
        </div>
        <div className='category'>
            <Link to='food' className='food-btn'>
              <img src={Food}/>
              <p>FOOD</p>
            </Link>
            <Link to='snack' className='snack-btn'>
              <img src={Snack}/>
              <p>SNACK</p>
            </Link>
            <Link to='drink' className='drink-btn'>
              <img src={Drink}/>
              <p>DRINK</p>
            </Link>
        </div>
    </section>
  )
}

export default Classic