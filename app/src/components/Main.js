import React from 'react'
import HomePage from './HomePage.js'
import BookingPage from './BookingPage.js'
import AboutPage from './AboutPage.js'
import ConfirmedBooking from './ConfirmedBooking.js'
import { Route, Routes } from 'react-router-dom'

const Main = () => {

    
    return (
        <Routes>
           <Route path="/" element={<HomePage />} />
           <Route path="/about" element={<AboutPage />} />
           <Route path="/booking" element={<BookingPage />} />
           <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
        </Routes>
    )
}

export default Main;

