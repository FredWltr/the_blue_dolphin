import './BurgerMenu.css'
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div>
            <div className="menu-icon" onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
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