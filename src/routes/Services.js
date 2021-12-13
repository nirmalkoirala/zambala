import React from 'react'
import Footer from '../components/Footer/Footer'
import InfoSection from '../components/InfoSection/InfoSection'
import Navbar from '../components/Navbar/Navbar'
import Pricing from '../components/Pricing/Pricing'
 

const Services = () => {
    return (
        <div>
            <Navbar />
            <InfoSection heading='SERVICES.' text='hello world'/>
            <Pricing />
            <Footer />
        </div>
    )
}

export default Services
