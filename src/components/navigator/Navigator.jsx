import './Navigator.css';
import {NavLink} from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <div className="nav-container">


                <ul className="nav-items">
                    <li>
                        <NavLink
                            className={({isActive}) => isActive === true ? "active-menu-link" : "default-menu-link"}
                            to="/">
                            <h3>Home</h3>
                        </NavLink>
                    </li>
                </ul>
            </div>


        </nav>
    );
}

export default Navigation;