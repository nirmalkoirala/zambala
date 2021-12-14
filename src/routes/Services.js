import React from 'react'
import Footer from '../components/Footer/Footer'
import Form from '../components/Form'
import InfoSection from '../components/InfoSection/InfoSection'
import Navbar from '../components/Navbar/Navbar'
import Pricing from '../components/Pricing/Pricing'
 

const Services = () => {
    return (
        <div>
            <Navbar />
            <InfoSection heading='SERVICES.' text=''/>
            <Pricing />
            <Form />
            <Footer />
        </div>
    )
}

export default Services
