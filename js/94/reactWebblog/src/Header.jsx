import { NavLink } from "react-router";
import { HashLink } from "react-router-hash-link";
import './styles/Header.css';
export default function Header(props) {
    const isPost  = props.isPost;

    return (
        <header>
            <p>PCS Webblog</p>
            <nav>
                <NavLink to='/'>home</NavLink>
                <HashLink to='/#users'>blogs</HashLink>
                {isPost && <NavLink to ={`/blog/${isPost?.id}`}>posts</NavLink>}
                <HashLink to='/#aboutUs'>about us</HashLink>
                <HashLink to='/#contactUs'>contact us</HashLink>
            </nav>
            <button id="logIn">Log In</button>
        </header>
    )
}