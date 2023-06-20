import React from 'react'
import Navbar from './Navbar.js'
import Hero from './Hero.js'
import Highlights from './Highlights.js'
import Testimonials from './Testimonials.js'
import Footer from './Footer.js'

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Highlights />
            <Testimonials />
            <Footer />
        </>
    )
}

export default HomePage;