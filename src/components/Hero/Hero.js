import React from 'react'
import './HeroStyles.css'
import {Link} from 'react-router-dom'
import Video from '../../assets/video2.mp4'
import Img from "../../assets/back.jpg"



const Hero = () => {
    return (
        <div id='home' className="hero">
                <img src={Img} alt="background"/>
            {/* <video className='hero-video' autoPlay loop muted>
                 <source src={Video} type='video/mp4' />
            </video> */}
            <div className='content'>
                <h1 className='heading'>Zambala Education Consultancy</h1>
                <p></p>
                <div>
                <a className="btn" href="tel:+61435816031">0435 816 031</a>
                </div>
            </div>
        </div>
    )
}

export default Hero
