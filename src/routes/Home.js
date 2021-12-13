import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Footer from '../components/Footer/Footer'
import Pricing from '../components/Pricing/Pricing'
import Landing from '../components/Landing/Landing'
import Vision from '../components/Vision/Vision'
import Form from '../components/Form'


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero />
            <Landing/>
            <Pricing />
            <Vision />
            <Form />
            <Footer />
        </div>
    )
}

export default Home
