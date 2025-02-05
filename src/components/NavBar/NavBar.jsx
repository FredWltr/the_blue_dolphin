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
                <a href="/home">Home</a>
                <a href="/menu">Menu</a>
                <a href="https://www.doordash.com/store/the-blue-dolphin-yukon-25081844/">Order</a>
                <a href="/home#location">Location</a>
                <a href="/home#hour">Hours</a>
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