import React from 'react'
import './footer.css'
import logo from './../../assets/logo.png'
import fb from './../../assets/fb.png'
import insta from './../../assets/insta.png'
import tw from './../../assets/tw.png'
import yt from './../../assets/yt.png'
import ln from './../../assets/in.png'

const Footer = ({setZeeshanGroup}) => {
  return (
    <div className='footerBg'>
      <div className='footerWrapper'>
        <div>
          <img src={logo} height={160} alt='Zeeshan' />
          <h3 style={{margin: '0', color: '#9d7a50', filter: 'drop-shadow(0 0 4px #000)', textTransform:'uppercase'}}>Zeeshan</h3>
          <h4 style={{margin: '0', color: '#9d7a50', filter: 'drop-shadow(0 0 4px #000)', textTransform:'uppercase'}}>Construction</h4>
          </div>
        <div>
          <p style={{cursor: 'pointer'}} onClick={() => {setZeeshanGroup('group')}}>Company</p>
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
        <img alt ='fb' className='socialItem' src={fb} width={30} height={30}/>
        <img alt ='insta' className='socialItem' src={insta} width={30} height={30}/>
        <img alt ='tw' className='socialItem' src={tw} width={30} height={30}/>
        <img alt ='yt' className='socialItem' src={yt} width={30} height={30}/>
        <img alt ='ln' className='socialItem' src={ln} width={30} height={30}/>
      </div>
      <div style={{height: '20px'}}><p>copyright@Zeeshan Construction</p>
      </div>
      
    </div>
  )
}

export default Footer