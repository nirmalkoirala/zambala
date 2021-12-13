import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import Footer from '../components/Footer/Footer'
import InfoSection from '../components/InfoSection/InfoSection'
import Navbar from '../components/Navbar/Navbar'


const Aboutus = () => {
    return (
        <div>
            <Navbar />
            <InfoSection heading='ABOUT US' text='Samdpai Dondrup Education'/> 
            <AboutUs />
            <Footer />
        </div>
    )
}

export default Aboutus
