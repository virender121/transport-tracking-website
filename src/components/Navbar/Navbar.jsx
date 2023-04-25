import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
   <nav className='navbar'>
    <div className='navbar-content'>
        <ul className='navbar-items'>
            <li><Link to ='/'>Home</Link></li>
            <li><Link to ='/about'>About us</Link></li>
            <li><Link to ='/feature'>Features</Link></li>
            <li><Link to ='/videos'>Our videos</Link></li>
            <li><Link to ='/subscription'>Subscription</Link></li>
            <li><Link to ='/contact'>Contact us</Link></li>
        </ul>
    </div>
   </nav>
  )
}

export default Navbar
