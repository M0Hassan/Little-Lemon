import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const ConfirmedBooking = () => {

    const pStyle = {
        textAlign: "center",
        fontSize: "45px",
        fontWeight: "bold",
        marginTop: "50px",
        backgroundColor: ""
    }

    const sectionStyle = {
        height: "300px",
    }

    return (
        <>
            <Navbar />
            <section style={sectionStyle}>
                <p style={pStyle}>Your Booking is Confirmed!</p>
            </section>
            <Footer />
        </>
    )
}

export default ConfirmedBooking;