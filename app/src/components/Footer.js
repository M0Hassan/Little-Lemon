import React from 'react'
import V_Logo from '../images/V_Logo.jpg'


const Footer = () => {
    return (
        <footer className='footer'>
            <img className='footer--logo' alt="logo in footer" src={V_Logo} />
            <article className='footer--article'>
                <h5>Doormat Navigation</h5>
                <ul className='footer--links'>
                    <li><a href='/home'>Home</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/booking'>Reservations</a></li>
                    <li><a href='/orderonline'>Order Online</a></li>
                    <li><a href='/login'>Login</a></li>
                </ul>
            </article>
            <article className='footer--article'>
                <h5>Contact</h5>
                <ul className='footer--links'>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </article>
            <article className='footer--article'>
                <h5>Social Media Links</h5>
                <ul className='footer--links'>
                    <li><a href="https://facebook">Facebook</a></li>
                    <li><a href="https://twitter">Twitter</a></li>
                    <li><a href="https://insta">Instagram</a></li>
                </ul>
            </article>
        </footer>
    )
}

export default Footer;

