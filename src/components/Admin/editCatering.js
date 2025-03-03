import { Link } from 'react-router-dom';
import React, { useState } from "react";
import account from '../../images/account_circle.svg'
import panahBawah from '../../images/Chevron down.svg'
import Sidebar from './Sidebar'
import Admin from './menuAdmin'
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { getDatabase, ref, set, push} from "firebase/database";
import {app,db,auth} from '../../firebase';


const EditCatering = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState('Catering');

    const toggleDropdown = () =>{
        setIsOpen(!isOpen)
    }

    const handleItemClick = (item) =>{
        setSelectedItem(item);  
        setIsOpen(false);
    }
    // let [inputValue1,  setInputValue1] = useState("")
    // let [inputValue2,  setInputValue2] = useState("")
    // let [inputValue3,  setInputValue3] = useState("")
    // let [inputValue4,  setInputValue4] = useState("")
    
    // const saveData = async () => {
    //     const db = getFirestore(app);
    //     const newDocRef = push(ref(db,"menu/editCatering"))
    //     set(newDocRef,{
    //         catName: inputValue1,
    //         catDate: inputValue2,
    //         catDescription: inputValue3,
    //         catPrize: inputValue4
    //     }).then(()=>{
    //         alert("data berhasil disimpan")
    //     }).catch((error) =>{
    //         alert("error: ", error.message)
    //     })
    //  }
    const [products,setProducts] = ([])
    const [newProduct,setNewProduct ] = ({name: '', date: '', link: '' })
    const handleAddProject = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, 'projects'), newProduct);
        setProducts([...products, newProduct]);
        setNewProduct({ name: '', description: '', link: '' });
    };

    return (
      <section id='catering-admin'>
        <div id="admin-page">
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
            </div>
            <div className='container-edit-cat'>
                <div className='catering-title'>
                    <h1>CATERING</h1>
                </div>
                <div className='grid-cat'>
                    <div className='catering-input'>
                        <input  className='nama-menu' type='text' placeholder='Name of Menu'
                               ></input>
                        <input className='tanggal-menu' type='date'></input>
                        <input className='deskripsi-menu' type='text' placeholder='Description'></input>
                        <div className='harga-bg'>
                        <input className='harga-menu' type='text' placeholder='Price'></input>
                        </div>
                        <button className='actioncat-button'>Post</button>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default EditCatering