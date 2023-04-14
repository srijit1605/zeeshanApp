import React from 'react'
import roomVideo from '../../assets/assistRoom.mp4'
import loanVideo from '../../assets/file.mp4'
import './assist.css'

const Assist = () => {
  return (
    <div>
      <div><h1>Our Assists</h1></div>
      <div className='row'>
      <video autoplay muted width="50%">
      <source src={roomVideo} type="video/mp4"
      />
      Sorry, your browser doesn't support videos.
    </video>
        <div>
          <h2>Interior</h2>
          <p>We provide Interior decoration support for your specific interior requirements</p>
        </div>
      </div>
      <div className='row'>
      <video autoplay muted width="50%">
      <source src={loanVideo} type="video/mp4"
      />
      Sorry, your browser doesn't support videos.
    </video>
        <div>
        <h2>Home loan</h2>
          <p>We provide you full home loan support, so it gets processed hassle free. </p>
        </div>
      </div>
    </div>
  )
}

export default Assist