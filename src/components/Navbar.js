import React, {useState, useEffect} from 'react';
import logoNavbar from '../images/logoNavbar2.png'
import {Link} from 'react-router-dom'
import accountLogo from '../images/account_circle.svg'

function Navbar() {
    const[nav,setnav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50){
            setnav(true);
        } else {
            setnav(false);
        };
    }
    window.addEventListener('scroll',changeBackground)
  return (
    <nav className={nav ? "nav active":"nav"}>
        <Link to='/' className='logo'>
            <img src={logoNavbar} alt=''></img>
        </Link>
        <input className='menu-btn' type='checkbox' id='menu-btn'/>
        <label className='menu-icon' htmlFor='menu-btn'>
            <span className='nav-icon'></span>
        </label>
        <ul className='menu'>
            {/* {
                sectionIds.map((sectionId, i)=> (
                    <li key={i}>
                        <Link to="/">{sectionId}</Link>
                    </li>
                ))
            } */}
            {/* <li><Link onClick="/">Home</Link></li>
            <li><Link onClick="/order">Order's</Link></li>
            <li><Link onClick="/about">Information</Link></li>
            <li><Link onClick="information">Gallery</Link></li> */}
            <li><a href="/">Home</a></li>
            <li><a href="/menu">Menu's</a></li>
            <li><a href="/information">Information</a></li>
            <li><a href="/gallery">Gallery</a></li>

        </ul>
        <Link to='login' className='account'>
            <img src={accountLogo} to="/" alt=''></img>
        </Link>
    </nav>
  )
}

export default Navbar