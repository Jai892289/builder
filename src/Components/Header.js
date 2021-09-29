import React from 'react';
import Navbar from "./Navbar"

const Header = () => {
    return (
        <div className="header">
            <Navbar />
            <div className="intro">
            <p>Looking for a property</p>
            <h1><span>Buy</span> and <span>Sell</span>Properties</h1>
            <p className="details"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
             The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
             <a href="#" className="header-btn">Details</a>

             </div>
        </div>
    )
}

export default Header
