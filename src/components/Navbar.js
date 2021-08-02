import React from 'react'
import './Navbar.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="Navbar-logo">
                AdoptMe
            </div>
            <div className="Navbar-middle">
                <ul className="navbar-links">
                <Link to="/home"><li>Home</li></Link>
                <Link to="/new"><li>Add a pet</li></Link>
                <Link to="/view"><li>View all pets</li></Link>
                </ul>
            </div>
            <div className="Navbar-search">
                <input type="text" placeholder="Search"/>
            </div>
        </div>
    )
}

export default Navbar;