import React from 'react'
import './homepage.css';
import logo from './../assets/logo.png'
import fb from './../assets/fb.png'
import insta from './../assets/insta.png'
import tw from './../assets/tw.png'
import yt from './../assets/yt.png'
import ln from './../assets/in.png'
import trading from './../assets/trading.jpg'
import construction from './../assets/construction.jpg'
import comingSoon from './../assets/comingsoon.jpg'

const Homepage = ({setZeeshanGroup}) => {
    return (
        <div className='background'>
            <div className='bgOverlay'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <img style={{padding: '20px'}} src={logo} height={60} alt='Zeeshan' />
                <div className='socialGroupButton'>
                    <img alt={'fb'} className='socialMenuItem' src={fb} width={30} height={30} />
                    <img alt={'insta'} className='socialMenuItem' src={insta} width={30} height={30} />
                    <img alt={'tw'} className='socialMenuItem' src={tw} width={30} height={30} />
                    <img alt={'yt'} className='socialMenuItem' src={yt} width={30} height={30} />
                    <img alt={'ln'} className='socialMenuItem' src={ln} width={30} height={30} />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img style={{filter: 'drop-shadow(0 0 4px #000)'}} src={logo} height={160} alt='Zeeshan' />
                <div><h1>The<br/><span style={{fontSize: '60px', lineHeight: '70px'}}>Zeeshan</span><br/>Group</h1></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ width: '28%', cursor: 'pointer' }}>
                    <img alt='trading' className='card' src={trading} />
                    <h1>Zeeshan Traders</h1>
                </div>
                <div onClick={() => {setZeeshanGroup('construction')}} style={{ width: '28%', cursor: 'pointer' }}>
                    <img alt='construction' className='card' src={construction} /> 
                    <h1>Zeeshan Construction</h1>
                </div>
                <div style={{ width: '28%', cursor: 'pointer' }}>
                    <img alt='comingSoon' className='card' src={comingSoon} />
                    <h1>Coming Soon</h1>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Homepage