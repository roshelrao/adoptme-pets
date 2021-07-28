import React from 'react'
import './Landing.css'
import Untitled from '../images/Untitled.png';

export const Landing = () => {
    return (
        <div className="Landing">
            <div className="Landing-body">
                <div className="Landing-body-text">
                <p><h1>Lorem ipsum dolor sit amet</h1>
                Nunc bibendum felis in justo tristique sagittis. Donec facilisis, lacus eu pretium interdum, tellus justo convallis neque, vitae feugiat nisi nulla et diam.
                </p>
                </div>
                <div className="Landing-btn">
                <button>Browse</button>
                </div>
            </div>
        </div>
    )
}

export default Landing;
