import React from 'react'
import './header.css'
import logo from './../../assets/logo.png'

const Header = () => {
  const menuItems = ['About us', 'Explore properties', 'Insights', 'Contact us']
  return (
    <div className='headerContainer'>
      <div className='headerSection'>
        <div className='logo'><img src={logo} height={60} alt='Zeeshan' /><h1 className='logoText'>Zeeshan Construction</h1></div>
        <div className='headerRight'>
          <div className='nav'>
            {menuItems.map((menuItem) => <p className='navItem'>{menuItem}</p>)}
          </div>
          <div>
            <p><a href='tel:+916290751329'>+91 6290751329</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header