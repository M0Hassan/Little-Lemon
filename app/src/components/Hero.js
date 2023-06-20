import React from 'react'
import { useNavigate } from "react-router-dom";
import HeroPic from '../images/restauranfood.jpg' 


const Hero = () => {
    const navigate = useNavigate()

    const navigateToBooking = () => {
        navigate('/booking')
    }

    return (
        <section className='hero'>
            <article className='hero--article'>
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>
                    We are a family owned mediterranean restaurant, focused on traditional recipes served with a modern twist 
                    </p>
                <button onClick={navigateToBooking}>Reserve a Table</button>
            </article>
            <img src={HeroPic} alt="restaurant food" className='hero--image' />
        </section>
    )
}

export default Hero;