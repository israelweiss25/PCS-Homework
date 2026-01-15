import { NavLink } from "react-router";
import './Header.css';
export default function Header() {
    return (
        <header>
            <p>PCS Webblog</p>
            <nav>
                <NavLink to='/#users'>blogs</NavLink>
                <NavLink to = '/#abouUs'>about us</NavLink>
                <NavLink to='/#contactUs'>contact us</NavLink>
            </nav>
            <button id="logIn">Log In</button>
        </header>
    )
}