import React from 'react'
import "./projectCategories.css";

const Card = ({ name, bg }) => {
  return (
    <div className='cardContainer' style={{ background: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', borderRadius: '20px' }}>
      <div className='cardOverlay'>
      {name}
      </div>
    </div>
  )
}

export default Card