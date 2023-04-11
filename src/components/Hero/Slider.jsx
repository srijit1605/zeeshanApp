import React from 'react'
import DreamHouse from '../../assets/DreamHouse.jpg'
import './hero.css'

const Slider = () => {
  return (
    <div className='heroSliderContainer'>
     <div className='heroHeader'>
     <h1>The difference between <br/> a house and a home<br/> is us</h1>
      <button className='exploreBtn'>EXPLORE MORE</button>
     </div>
      {/* <img src={DreamHouse} className='heroImage'/> */}
    </div>
  )
}

export default Slider