import { Link } from 'react-router-dom';
import React, { useState } from "react";
// import logo from '..src/images/putih 2.png';
import Sidebar from './Sidebar';
import account from '../../images/account_circle.svg'
import panahBawah from '../../images/Chevron down.svg'


function Admin () {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState('Menu');

    const toggleDropdown = () =>{
        setIsOpen(!isOpen)
    }

    const handleItemClick = (item) =>{
        setSelectedItem(item);  
        setIsOpen(false);
    }
    return (
        <section id='admin-page'>
            <Sidebar/>
            <Link to='' className="profile">
                <h4>admin123@gmail.com</h4>
                <img src={account}></img>
            </Link>
            <div className="option">
            <button onClick={toggleDropdown} className="dropdown-button">
                {selectedItem}
                <img src={panahBawah}/>
            </button>
            {isOpen==true && (
                <div className='dropdown-content'>
                <ul>
                    <li><a href="/menu/editCatering" onClick={() => handleItemClick('Catering')}>Catering</a></li>
                    <li><a href="/menu/editFood" onClick={() => handleItemClick('Food')}>Food</a></li>
                    <li><a href="/menu/editDrink" onClick={() => handleItemClick('Drink')}>Drink</a></li>
                    <li><a href="/menu/editSnack" onClick={() => handleItemClick('Snack')}>Snack</a></li>
                </ul>
                </div>
            )}
            </div>
        </section>
    );
};

export default Admin;