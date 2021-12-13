import React from 'react'
import './AnnouncementStyles.css'
import { Link } from 'react-router-dom'

import Pic1 from '../../assets/drukul1.jpg'

const Announcement = () => {
    return (
        <div className='training'>
            <div className='left'>
                <h1>Announcement</h1>
                <p>Stay tuned for announcements.</p>
            <Link to='/contact'><button className='btn'>Contact Us</button></Link>
            </div>
            <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={Pic1} className='img' alt='' />
                </div>
            </div>
        </div>
       </div>
    )
}

export default Announcement