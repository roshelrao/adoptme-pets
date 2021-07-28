import React from 'react'
import './Navbar.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PetScreen from '../screens/PetScreen';

export const Navbar = () => {
    return (
        <Router>
        <div className="Navbar">
            <div className="Navbar-logo">
                AdoptMe
            </div>
            <div className="Navbar-middle">
                <ul className="navbar-links">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/new">Add a pet</Link></li>
                    <li><Link to="/view">View all pets</Link></li>
                </ul>
            </div>
            <div className="Navbar-search">
                <input type="text" placeholder="Search"/>
            </div>
        </div>
        </Router>
    )
}

export default Navbar;