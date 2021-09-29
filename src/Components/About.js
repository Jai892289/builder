import React from 'react';
import image from "../images/p2.png";


const About = () => {
    return (
    
        <div className="about">

        <div className="about-model">
        <img src={image} alt="about" width="500"/>

        </div>
        <div className="about-text">
        <h1><span>Buy</span> and <span>Sell</span>Properties</h1>
            <p className="details"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
             The point of using Lorem Ipsum is that it has a more-or-less normal distributi</p>
             <button>VIEW MORE</button>

             </div>

        </div>

    )
}

export default About
