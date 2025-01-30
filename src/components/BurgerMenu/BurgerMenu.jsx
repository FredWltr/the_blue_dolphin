import './BurgerMenu.css'
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    
    return (
        <div>
            <div className="burger-menu">
                <div className={`burger-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            <div className={`menu ${isOpen ? "open" : ""}`}>
                <nav>
                    <ul>
                        <li><NavLink onClick={toggleMenu} to="/" >Home</NavLink></li>
                        <li><NavLink onClick={toggleMenu} to="/menu" >Menu</NavLink></li>
                        <li><NavLink onClick={toggleMenu} to="https://www.doordash.com/store/the-blue-dolphin-yukon-25081844/" >Order</NavLink></li>
                        <li><NavLink onClick={toggleMenu} to="/location" >Location & Hours</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default BurgerMenu;