import React from 'react'
import Slider from './Slider'
import FeaturedProperties from './FeaturedProperties'
import './hero.css'

const Hero = () => {
  return (
    <div className='heroContainer'>
        <Slider/>
        <FeaturedProperties/>
    </div>
  )
}

export default Hero