import React from 'react'
import Logo from '../images/Logo.png'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <img alt="contains logo of restaurant" src={Logo} className='nav--logo' width="160px"/>
            <ul className='nav--links'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/menu'>Menu</Link></li>
                <li><Link to='/booking'>Reservations</Link></li>
                <li><Link to='/orderonline'>Order Online</Link></li>
                <li><Link to='/login'>Login</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;

