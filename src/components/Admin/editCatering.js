import { Link } from 'react-router-dom';
import React, { useState } from "react";
import account from '../../images/account_circle.svg'
import panahBawah from '../../images/Chevron down.svg'
import Sidebar from './Sidebar'
import Admin from './menuAdmin'

const EditCatering = () => {
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
      <section id='catering-admin'>
        <div id="admin-page">
            <Sidebar/>
            <Link to='' className="profile">
                <h4>vianka@gmail.com</h4>
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
            </div>
            <div className='container-edit-cat'>
                <div className='catering-title'>
                    <h1>CATERING</h1>
                </div>
                <div className='grid-cat'>
                    <div className='catering-input'>
                        <input  className='nama-menu' type='text' placeholder='Name of Menu'></input>
                        <input className='tanggal-menu' type='date' placeholder='date'></input>
                        <input className='deskripsi-menu' type='text' placeholder='Description'></input>
                        <input className='harga-menu' type='text' placeholder='Price'></input>
                        <button className='deletecat-button'>delete</button>
                    </div>
                    <div className='catering-input'>
                        <input  className='nama-menu' type='text' placeholder='Name of Menu'></input>
                        <input className='tanggal-menu' type='date' placeholder='date'></input>
                        <input className='deskripsi-menu' type='text' placeholder='Description'></input>
                        <input className='harga-menu' type='text' placeholder='Price'></input>
                        <button className='deletecat-button'>delete</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default EditCatering