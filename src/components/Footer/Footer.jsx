import React from 'react'
import './footer.css'
import logo from './../../assets/logo.png'
import fb from './../../assets/fb.png'
import insta from './../../assets/insta.png'
import tw from './../../assets/tw.png'
import yt from './../../assets/yt.png'
import ln from './../../assets/in.png'

const Footer = () => {
  return (
    <div className='footerBg'>
      <div className='footerWrapper'>
        <div>
          <img src={logo} height={160} alt='Zeeshan' />
          <h3 style={{margin: '0'}}>Zeeshan</h3>
          <h4>Constructions</h4>
          </div>
        <div>
          <p>Company</p>
          <p>Expertise</p>
          <p>Projects</p>
          <p>Solutions</p>
          <p>Responsibility</p>
        </div>
        <div>
        <p>Media Center</p>
        <p>Careers</p>
        <p>Contact</p>
        </div>
        <div>
        <p>Terms & Conditions</p>
        <p>Privacy Policy</p>
        <p>Cookie Policy</p>
        </div>
      </div>
      <div className='socialButton'>
        <img className='socialItem' src={fb} width={30} height={30}/>
        <img className='socialItem' src={insta} width={30} height={30}/>
        <img className='socialItem' src={tw} width={30} height={30}/>
        <img className='socialItem' src={yt} width={30} height={30}/>
        <img className='socialItem' src={ln} width={30} height={30}/>
      </div>
      <div>copyright section</div>
    </div>
  )
}

export default Footer