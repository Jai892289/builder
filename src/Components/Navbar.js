import React from 'react';
import logo from "../images/logo1.png"

const Navbar = () => {
    return (
        <nav>
            <a href="#" className='logo' >
                <img src={logo} alt="logo" />
            </a>

            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn">
                <span className="nav-icon"></span>
            </label>


            <ul className='menu' style={{display:"none"}}>
                <li><a href="#" exact={true} className="active">Home </a></li>
               
            </ul>
            <a href="#" className="property"> HOME </a>
        </nav>
    )
}

export default Navbar;
