import React from 'react'
import Logo from '../images/Logo.png'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img alt="contains logo of restaurant" src={Logo} className='nav--logo' width="160px"/>
            <ul className='nav--links'>
                <li><a href='/home'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/menu'>Menu</a></li>
                <li><a href='/reservations'>Reservations</a></li>
                <li><a href='/orderonline'>Order Online</a></li>
                <li><a href='/login'>Login</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;

