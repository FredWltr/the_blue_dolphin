import logo from '../../assets/dolphin_and_bowl.png';
import '../../styles/Main.css';
import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
    return (
        <header className="navbar">
            <div className="company-info">
                <img src={logo} alt="Dolphin and Bowl by itself" className="my-logo" />
                <h3>The Blue Dolphin</h3>
            </div>
            <div className="navbar-items">
                <nav ref={navRef}>
                    <Link to="/home" onClick={() => navRef.current.classList.remove("responsive_nav")}>Home</Link>
                    <Link to="/menu" onClick={() => navRef.current.classList.remove("responsive_nav")}>Menu</Link>
                    <Link to="https://www.doordash.com/store/the-blue-dolphin-yukon-25081844/">Order</Link>
                    <Link to="/home#location" onClick={() => navRef.current.classList.remove("responsive_nav")}>Location</Link>
                    <Link to="/home#hour" onClick={() => navRef.current.classList.remove("responsive_nav")}>Hours</Link>
                    <button className="nav-btn nav-close-btn" onClick={showNavBar}>
                        <FaTimes/>
                    </button>
                </nav>
                <button className="nav-btn" onClick={showNavBar}>
                    <FaBars/>
                </button>
            </div>
        </header>
    );
} 

export default NavBar;