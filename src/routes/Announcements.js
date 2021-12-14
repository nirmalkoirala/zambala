import React from 'react'
import Announcement from '../components/Announcement/Announcement'
import Footer from '../components/Footer/Footer'
import Form from '../components/Form'
import InfoSection from '../components/InfoSection/InfoSection'
import Navbar from '../components/Navbar/Navbar'


const Announcements = () => {
    return (
        <div>
            <Navbar />
            <InfoSection heading='ANNOUNCEMENTS' text='Stay tuned for announcements'/> 
            <Announcement />
            <Form />
            <Footer />
        </div>
    )
}

export default Announcements
