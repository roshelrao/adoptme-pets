import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'
import './PetScreen.css'

export const PetScreen = () => {
    return (
        <div>
            <div className="pet-cards">
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            <Cards/>
            </div>
        </div>
    )
}

export default PetScreen;