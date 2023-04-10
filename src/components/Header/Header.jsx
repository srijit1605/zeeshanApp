import React from 'react'
import './header.css'
import logo from './../../assets/logo.png'

const Header = () => {
  const menuItems = ['About us', 'Explore properties', 'Insights', 'Contact us']
  return (
    <div className='headerContainer'>
      <div className='headerSection'>
        <div><img src={logo} height={60} alt='Zeeshan'/>Zeeshan</div>
        <div className='headerRight'>
        <div className='nav'>
          {menuItems.map((menuItem) => <p className='navItem'>{menuItem}</p>)}
        </div>
        <div>
          <p><a href='/'>+2345678893</a></p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Header