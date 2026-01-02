import { NavLink } from 'react-router'
import './App.css'
export default function Header() {
    return (
        <>
            <div id='header'>
                <nav>
                    <NavLink to={'/'} >home-page</NavLink><NavLink to={'/buy'}>buy</NavLink>
                    <NavLink to={'/sell'}>sell</NavLink>
                </nav>

                <h1>Pcs Reality</h1>
                <button>log in </button>
            </div>


            <hr />
        </>
    )
}