import { Link } from 'react-router-dom';
import React, { useState } from "react";
// import logo from '..src/images/putih 2.png';
import Sidebar from './Sidebar';
import account from '../../images/account_circle.svg'


const Admin = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedItem, setSelectedItem] = useState('Category');

    const toggleDropdown = () =>{
        setIsOpen(!isOpen)
    }

    const handleItemClick = (item) =>{
        setSelectedItem(item);  
        setIsOpen(false);
    }
    return (
        <section id="admin-page">
            <Link to='' className="profile">
                <h4>Vianka Shainna</h4>
                <img src={account}></img>
            </Link>
            <div className="option">
            <button onClick={toggleDropdown} className="dropdown-button">
                {selectedItem}
            </button>
            {isOpen==true && (
                <ul>
                    <li><Link to="/editCatering" onClick={() => handleItemClick('Catering')}>Catering</Link></li>
                    <li><Link to="/editFood" onClick={() => handleItemClick('Food')}>Food</Link></li>
                    <li><Link to="/editDrink" onClick={() => handleItemClick('Drink')}>Drink</Link></li>
                    <li><Link to="/editSnack" onClick={() => handleItemClick('Snack')}>Snack</Link></li>
                </ul>
            )}
            </div>
        </section>
    );
};

export default Admin;