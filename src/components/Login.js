import React, {useEffect,useState} from 'react'
import Logo from '../images/biru2.png'
import Email from '../images/Icon.svg'
import Password from '../images/iconpass.svg'
import {Link} from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'  


function Login() {

  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")

  const handleSubmit=async(e)=>{
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password)
      console.log("Berhasil melakukan login")
      if(email == "admin@gmail.com" && password == "123456"){
        window.location.href = "/menu"
        
      } else {
      window.location.href = "/"
      alert("Berhasil melakukan login")
      }
    } catch (error) {
      console.log(error.message)

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
          <p>Don't have any account?</p>
          <Link to='/regist' className='regist-btn'>
            <p>Register</p>
          </Link>
        </div>
        </div>
        </div>

      <form onSubmit='' className='login-form'>
        <h1>Login</h1>
        <div className='email-form'>
          <input className='email' type='email' placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)}></input>
          <img src={Email} className='email-icon'/>
        </div>
        <div className='pass-form'>
          <input className='password' type='password' placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)}></input>
          <img src={Password} className='pass-icon'/>
        </div>
          <button onClick={handleSubmit} className="login-btn">Login</button>
      </form>
    </section>
  )
}

export default Login