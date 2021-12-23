import React from 'react'
import Footer from '../../src/Footer'
import Form from '../components/Form'
import InfoSection from '../components/InfoSection/InfoSection'
import Navbar from '../components/Navbar/Navbar'
import Pricing from '../components/Pricing/Pricing'
 

const Services = () => {
    return (
        <div>
            <Navbar />
            <InfoSection heading='SERVICES' text='The services mentioned below are not an exhaustive list; we go above and beyond to meet your needs if need be.'/>
            <Pricing />
            {/* <Form /> */}
            <Footer />
        </div>
    )
}

export default Services
