import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import Footer from '../../src/Footer'
import InfoSection from '../components/InfoSection/InfoSection'
import Navbar from '../components/Navbar/Navbar'
import Form from '../components/Form/index'


const Aboutus = () => {
    return (
        <div>
            <Navbar />
            <InfoSection heading='ABOUT US' text='' />
            <AboutUs />
            {/* <Form /> */}
            <Footer />
        </div>
    )
}

export default Aboutus
