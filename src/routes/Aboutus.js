import React from 'react'
import AboutUs from '../components/AboutUs/AboutUs'
import Footer from '../components/Footer/Footer'
import InfoSection from '../components/InfoSection/InfoSection'
import Navbar from '../components/Navbar/Navbar'
import Form from '../components/Form/index'


const Aboutus = () => {
    return (
        <div>
            <Navbar />
            <InfoSection heading='ABOUT US' text='ZECA is a registered education consultancy based in Canberra, Australia. We offer education services to students who wish to study in Australia. '/> 
            <AboutUs />
            <Form />
            <Footer />
        </div>
    )
}

export default Aboutus
