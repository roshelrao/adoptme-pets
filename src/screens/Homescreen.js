import React from 'react'
import Navbar from '../components/Navbar'
import Landing from '../components/Landing'
import RecentScreen from './RecentScreen'
import AddForm from '../components/AddForm'

export const Homescreen = () => {
    return (
        <>
            <Navbar/>
            <Landing/>
            <RecentScreen/>
            <AddForm/>
        </>
    )
}

export default Homescreen;