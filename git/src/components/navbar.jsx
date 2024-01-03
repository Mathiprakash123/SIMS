import React from 'react'
import './navbar.css'
import { IoIosContact } from "react-icons/io";
import { CiHome } from "react-icons/ci";
import { MdMiscellaneousServices } from "react-icons/md";


import {Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar'>

        <div className="navbar-container">
                <div className="logo-container">
                    <img src='https://writix.com/wp-content/uploads/2020/11/pngegg-300x300.png' className="logo" />
                    <h1 className="logo-text">SIMS</h1>
                </div>
                <ul className="navbar-items">
                    <li className="navbar-list">
                       <Link to={'/'} className='navbar-links'> <CiHome className='nav-home'/>Home</Link>
                    </li>

                    <li className="navbar-list">
                       <Link to={'/about'} className='navbar-links'> <IoIosContact  className='nav-home' />About</Link>
                    </li>

                    <li className="navbar-list">
                       <Link to={'/dashboard'} className='navbar-links'> <MdMiscellaneousServices className='nav-home'  />
Services</Link>
                    </li>
                    <Link className='navbar-button-1' to={'/login'}><button className='navbar-btn-1'>Login</button></Link>
                    <Link className='navbar-button-1' to={'/signup'}><button className='navbar-btn-1'>SignUp</button></Link>

                </ul>
        </div>

    </div>

  )
}

export default Navbar;