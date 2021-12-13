import React from 'react'
import './AboutUsStyles.css'
import { Link } from 'react-router-dom'

import Pic1 from '../../assets/drukul1.jpg'
import Pic2 from '../../assets/drukul2.jpg'

const AboutUs = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>About Us</h1>
                <p>Samdpai Dondrup Education Consultancy is an education agent and service provider established in 2019 with our main office in Thimphu, Bhutan.</p>
            <Link to='/contact'><button className='btn'>Contact Us</button></Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Pic2} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Pic1} className='img' alt='' />
                    </div>
                </div>
            </div>
       </div>
    )
}

export default AboutUs