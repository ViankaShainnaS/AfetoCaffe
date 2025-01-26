import React from 'react' 
import menu from '../images/menu.png'
import catering from '../images/catering.png'
import { Link } from 'react-router-dom'

const Menu = () =>  {
    return (
      <section id="menu">
        <div className='description'>
            <p>Afeto Café, with its Santorini-inspired white and blue design, offers a relaxing atmosphere with rustic décor and greenery. Serving Indonesian dishes, fresh salads, and exotic drinks, it's perfect for unwinding, taking photos, or enjoying time with loved ones, all in a romantic, Instagram-worthy setting.</p>
        </div>
        {/* <div className='title'>
            <p> Afeto </p>
          </div> */}
          <div className='quote'>
            <p>-Better food for a better mood-</p>
          </div>
          <div className='pick-menu'>
            <div className='menu'>
              <img src={menu}></img>
              <div className='menu-btns'>
                <Link to='classic' className='menu-btn'>
                  Menu {'>'}
                </Link>
              </div>
            </div>
            <div className='cat'>
              <img src={catering}></img>
              <div className='cat-btns'>
                <Link to='catMenu' className='cat-btn'>
                  Catering {'>'}
                </Link>
              </div>
            </div>
          </div>
      </section>
    )
  }
  
  export default Menu