import React from 'react'

function Information() {
  return (
  <div id='information'>
    <div className='wave'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,320L48,288C96,256,192,192,288,160C384,128,480,128,576,149.3C672,171,768,213,864,208C960,203,1056,149,1152,133.3C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
    </div>
      <div className='judul'>
        <h1>Information</h1>
      </div>
      <div className='information-box'>
        <p className='open'>Open : 10.00 am</p>
        <p className='close'>Close : 10.00 pm</p>
      </div>
    </div>
  )
}

export default Information