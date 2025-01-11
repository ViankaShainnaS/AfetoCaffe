import React, {useState} from 'react';
import logoNavbar from '../images/logoNavbar2.png'
import {Link} from 'react-scroll'
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
            <li><Link to="main">Home</Link></li>
            <li><Link to="order" smooth={true} duration={500}>Order's</Link></li>
            <li><Link to='/information'>Information</Link></li>
            <li><Link to='/gallery'>Gallery</Link></li>
        </ul>
        <Link to='/account' className='account'>
            <img src={accountLogo} to="/" alt=''></img>
        </Link>
    </nav>
  )
}

export default Navbar