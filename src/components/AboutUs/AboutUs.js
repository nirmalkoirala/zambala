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
                <p>ZEC is a registered education consultancy based in Canberra, Australia. We offer education services to students who wish to study in Australia.</p>
                <p>We are committed to serving and representing in the best interest of students and institutions in line with our principles of respect, objectivity, transparency, confidentiality, and integrity to achieve the desired outcomes.</p>
                <p>We also strive to deliver the highest standard of service and care to enhance the reputation and quality of institutions and the Australian education system at large.</p>
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