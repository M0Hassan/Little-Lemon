import React from 'react'
import V_Logo from '../images/V_Logo.jpg'


const Footer = () => {
    return (
        <footer>
            <img alt="logo in footer" src={V_Logo} />
            <article>
                <h5>Doormat Navigation</h5>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </article>
            <article>
                <h5>Contact</h5>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </article>
            <article>
                <h5>Social Media Links</h5>
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </article>
        </footer>
    )
}

export default Footer;

