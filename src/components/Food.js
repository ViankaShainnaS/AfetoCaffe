import React from 'react'
import Panah from '../images/panah kiri.png'
import { Link } from 'react-router-dom'


function Food() {
  return (
    <section id='food'>
        <Link className='arrow-food'>
            <img src={Panah}/>
            <p>Food Category</p>
        </Link>
        <div className='Brunch'>
            <div className='x-scroll'>
                <div className='brunch1'></div>
            </div>
        </div>
    </section>
  )
}

export default Food