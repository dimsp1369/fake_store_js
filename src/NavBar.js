import {NavLink} from "react-router-dom";
import './App.css';

function NavBar() {

    return (
        <nav className='navbar'>
            <div >
                <NavLink to='/UserCart' >UserCart</NavLink>
            </div>
            <div >
                <NavLink to='/Products' >Products</NavLink>
            </div>
        </nav>
    );
}


export default NavBar;
