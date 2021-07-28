import React from 'react'
import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import RecentScreen from './RecentScreen'

export const Homescreen = () => {
    return (
        <>
            <Navbar/>
            <Landing/>
            <RecentScreen/>
        </>
    )
}

export default Homescreen;