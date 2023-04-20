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
import comingSoon from './../assets/comingsoon.gif'

const Homepage = () => {
    return (
        <div className='background'>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <img src={logo} height={60} alt='Zeeshan' />
                <div className='socialButton'>
                    <img className='socialMenuItem' src={fb} width={30} height={30} />
                    <img className='socialMenuItem' src={insta} width={30} height={30} />
                    <img className='socialMenuItem' src={tw} width={30} height={30} />
                    <img className='socialMenuItem' src={yt} width={30} height={30} />
                    <img className='socialMenuItem' src={ln} width={30} height={30} />
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={logo} height={160} alt='Zeeshan' />
                <div><h1>The<span>Zeeshan</span>Group</h1></div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div style={{ width: '30%' }}>
                    <img className='card' src={trading} />
                    <h1>Zeeshan Traders</h1>
                </div>
                <div style={{ width: '30%' }}>
                    <img className='card' src={construction} />
                    <h1>Zeeshan Construction</h1>
                </div>
                <div style={{ width: '30%' }}>
                    <img className='card' src={comingSoon} />
                    <h1>Coming Soon</h1>
                </div>
            </div>
        </div>
    )
}

export default Homepage