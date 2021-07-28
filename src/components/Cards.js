import React from 'react'
import './Cards.css'
import dog from '../images/dog.jpg'
import { FaLocationArrow } from 'react-icons/fa'

export const Cards = () => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={dog} alt="dog"/>
            </div>
            <div className="card-body">
                <p><FaLocationArrow/> Wennappuwa</p>
                <div className="card-button">
                    <button>View</button>
                </div>
            </div>
        </div>
    )
}

export default Cards;