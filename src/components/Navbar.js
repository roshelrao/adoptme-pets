import React from 'react'
import './Navbar.css'

export const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="Navbar-logo">
                AdoptMe
            </div>
            <div className="Navbar-middle">
                <ul className="navbar-links">
                    <li>Home</li>
                    <li>Add a pet</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className="Navbar-search">
                <input type="text" placeholder="Search"/>
            </div>
        </div>
    )
}

export default Navbar;