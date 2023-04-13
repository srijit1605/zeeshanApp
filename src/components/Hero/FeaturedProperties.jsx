import React from 'react'
import './hero.css'

const FeaturedProperties = () => {
  return (
    <div className='FeaturedPropertiesContainer'>
      <div className='textBlock'>
        <h1 className='textHeader'>Featured Properties</h1>
      </div>
      <div className='imageBlock'></div>
      <div className='rowBlock'>
        <div className='imageRowBlock1'></div>
        <div className='imageRowBlock2'></div>
      <button className='exploreBtn'>VIEW MORE</button>
      </div>
    </div>
  )
}

export default FeaturedProperties