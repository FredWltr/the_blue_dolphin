import logo from '../../assets/logo.png';
import '../../styles/Main.css';
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header>
            <h3>The Blue Dolphin</h3>
            <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">Menu</a>
                <a href="/#">Order</a>
                <a href="/#">Location</a>
                <a href="/#">Hours</a>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
                <FaBars/>
            </button>
        </header>
    );
} 

export default NavBar;