import React from 'react'
import Logo from '../images/biru2.png'
import Email from '../images/Icon.svg'
import Password from '../images/iconpass.svg'
import {Link} from 'react-router-dom'


function Register() {

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

      <form onSubmit='' className='regist-form'>
        <h1>Registration</h1>
        <div className='email-form'>
          <input className='email' type='email' placeholder='Email'></input>
          <img src={Email} className='email-icon'/>
        </div>
        <div className='pass-form'>
          <input className='password' type='password' placeholder='Password'></input>
          <img src={Password} className='pass-icon'/>
        </div>
        <div className='passconfirm-form'>
          <input className='passconfirm' type='password' placeholder='Confirm your password here'></input>
          <img src={Password} className='pass-icon'/>
        </div>
          <button onClick='' className="login-btn">Regist</button>
      </form>
    </section>
  )
}

export default Register