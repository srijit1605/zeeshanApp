import React from 'react'
import "./projectCategories.css";

const Card = ({name}) => {
  return (
    <div className='cardContainer'>{name}</div>
  )
}

export default Card