import logo from '../../assets/logo.png'
import './NavBar.css'
import BurgerMenu from '../BurgerMenu/BurgerMenu'

const NavBar = () => {
    return (
    <nav className="navbar">
        <img className="logo" src={logo} alt="The Blue Dolphin Logo" />
        <h1 className="title">The Blue Dolphin</h1>
        <BurgerMenu />
    </nav>
    );
} 

export default NavBar;