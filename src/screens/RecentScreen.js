import React from 'react'
import Cards from '../components/Cards'
import './RecentScreen.css'

export const RecentScreen = () => {
    return (
        <>
        <h1 className="card-title">Recently added</h1>
        <div className="recent-screen">
            <Cards/>
            <Cards/>
            <Cards/>
        </div>
        </>
    )
}

export default RecentScreen;
