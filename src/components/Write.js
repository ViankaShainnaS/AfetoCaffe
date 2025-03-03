import React, {useState,useEffect} from 'react';
import app from '../firebase';
import { getDatabase, ref, set, push} from "firebase/database";
import { useNavigate } from 'react-router-dom';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import './write.css';
import axios from 'axios';


function Write() {
    const db = getFirestore(app);
      const [image, setImage] = useState(null);
    
      const handleFileChange = (e) => {
        if(e.target.files[0]) {
          setImage(e.target.files[0]);
        }
      };
    
      const handleUpload = async () => {
        if (!image) {
          alert("Pilih gambar terlebih dahulu!");
          return;
        }
    
        const formData = new FormData();
        formData.append('file', image);

        formData.append('upload_preset', 'MENU_PICTURE'); 
    
        try {
          const response = await axios.post(
            'https://api.cloudinary.com/v1_1/de80jcwxd/upload',
            formData
          );
    
          const imageUrl = response.data.secure_url;
          console.log("Image URL:", imageUrl);
    
          await addDoc(collection(db, 'images'), {
            url: imageUrl,
            createdAt: new Date()
          });
    
          alert("Gambar berhasil diupload dan link disimpan ke Firebase!");
    
        } catch (error) {
          console.error("Error uploading image", error);
          alert("Terjadi kesalahan saat mengupload gambar");
        }
      };
    const navigate = useNavigate();
 let [inputValue1,  setInputValue1] = useState("")
 let [inputValue2,  setInputValue2] = useState("")
 let [inputValue3,  setInputValue3] = useState("")

 const saveData = async () => {
    const db = getFirestore(app);
    const newDocRef = push(ref(db,"menu/editCatering"))
    set(newDocRef,{
        menuName: inputValue1,
        menuDescription: inputValue2
    }).then(()=>{
        alert("data berhasil disimpan")
    }).catch((error) =>{
        alert("error: ", error.message)
    })
 }
  return (
    <section id='write' className='--flex-center'>

    <div>
    <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} style={{ marginLeft: "10px" }}>
        Upload
      </button>
        <br/><br/>
        <input type='text' value={inputValue1}
        onChange={(e)=>setInputValue1(e.target.value)}></input>
        <input type='text' value={inputValue2}
        onChange={(e)=>setInputValue2(e.target.value)}/> <br/>
         <input type='text' value={inputValue3}
        onChange={(e)=>setInputValue3(e.target.value)}/> <br/>

        <button onClick={saveData}>SIMPAN DATA</button>
        <br/>
        <br/>
        <br/>
        <button className='button1'onClick={()=>navigate('/updateread')}>UPDATE READ</button> <br/>
        <button className='button2'onClick={()=>navigate('/read')}>READ</button>
        <button className='button3'onClick={()=>navigate('/login')}>login</button>
    </div>
        </section>
  )
}

export default Write