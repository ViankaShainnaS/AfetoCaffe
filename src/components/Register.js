import React, {useState} from 'react'
import Logo from '../images/biru2.png'
import Email from '../images/Icon.svg'
import Password from '../images/iconpass.svg'
import {Link} from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase'
import {setDoc, doc,} from 'firebase/firestore'


function Register() {
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const [confirmPass, setConfirmPass] = useState("")

    const handleRegister=async(e)=>{
          

      e.preventDefault()
      try{
       await createUserWithEmailAndPassword(auth,email,password);
       const user= auth.currentUser;
       console.log(user);
       if(confirmPass!==password){
        alert('Konfirmasi password anda berbeda, coba cek kembali!')
       } else {
        await setDoc(doc(db,"Users", user.uid),{
          email: user.email
        })
        // console.log("Pengguna Berhasil di Daftarkan");
        alert("Pengguna Berhasil di Daftarkan")
        window.location.href = "/login"
      }
      } catch (error) {
        console.log(error.message);
        alert(error.message)
      }
    }

  return (
    <section id="login">
      <div className='side-decor'>
        <div className='rectangle1'></div>
        <div className='rectangle2'>
        <img src={Logo} />
        <h3>Welcome to</h3>
        <h1>Afeto</h1>
        <div className='to-regist'>
          <p>Have any account?</p>
          <Link to='/login' className='regist-btn'>
            <p>Login</p>
          </Link>
        </div>
        </div>
        </div>

      <form onSubmit={handleRegister} className='regist-form'>
        <h1>Registration</h1>
        <div className='email-form'>
          <input className='email' type='email' placeholder='Email' onChange={(e)=> setEmail(e.target.value)} required></input>
          <img src={Email} className='email-icon'/>
        </div>
        <div className='pass-form'>
          <input className='password' type='password' placeholder='Password' onChange={(e)=> setPassword(e.target.value)}></input>
          <img src={Password} className='pass-icon'/>
        </div>
        <div className='passconfirm-form'>
          <input className='passconfirm' type='password' placeholder='Confirm your password here'  onChange={(e) => setConfirmPass(e.target.value)}
            required></input>
          <img src={Password} className='pass-icon'/>
        </div>
          <button onClick='' className="login-btn">Register</button>
      </form>
    </section>
  )
}

export default Register