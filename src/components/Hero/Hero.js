import React from 'react'
import './HeroStyles.css'
import {Link} from 'react-router-dom'
import Video from '../../assets/video2.mp4'
import Img from '../../assets/bg.jpg'


const Hero = () => {
    return (
        <div className="hero">
                {/* <img src={Img} alt="background" /> */}
            <video autoPlay loop muted id='video' >
                 <source src={Video} type='video/mp4' />
            </video>
            <div className='content'>
                <h1 className='heading'>Zambala Education Consultancy</h1>
                <p></p>
                <div>
                <a className="btn" href="tel:+61406789009">0406 789 009</a>
                </div>
            </div>
        </div>
    )
}

export default Hero
