import React from 'react'
import photo1 from '../images/gambarMenu3.png'

function Gallery() {
  return (
    <section id='gallery'>
      <div className='gallery-txt'>
        <h2>Our Gallery</h2>
      </div>
      <div className= 'gallery'>
        <div className= 'grid'>
            <img className='photo' src={photo1}/>
            <img className='photo' src={photo1}/>
            <img className='photo' src={photo1}/>
            <img className='photo' src={photo1}/>
            <img className='photo' src={photo1}/>
            <img className='photo' src={photo1}/>
        </div>
      </div>
    </section>
  )
}

export default Gallery