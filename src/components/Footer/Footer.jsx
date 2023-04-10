import React from 'react'
import './footer.css'
import logo from './../../assets/logo.png'

const Footer = () => {
  return (
    <div className='footerBg'>
      <div className='footerWrapper'>
        <div>
          <img src={logo} height={160} alt='Zeeshan' />
          <h3>Zeeshan</h3>
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
        <p className='socialItem'>fb</p>
        <p className='socialItem'>insta</p>
        <p className='socialItem'>twitter</p>
        <p className='socialItem'>wp</p>
      </div>
      <div>copyright section</div>
    </div>
  )
}

export default Footer