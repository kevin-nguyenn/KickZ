import React from 'react';
import { Link } from 'react-router-dom';
import NavBarContainer from "./nav_bar_container";


class NavBar extends React.Component {
    render() {
        const sessionDisplay = this.props.currentUser ? (
            <div className="nav-dropdown">
                <Link to="/">My Account</Link>
                <div className="nav-dropdown-items">
                    <a href="#">Buying</a>
                    <a href="#">Selling</a>
                    <a href="#">Portfolio</a>
                    <a href="#" onClick={this.props.logout}>Logout</a>
                </div>
            </div>
        ) : (
            <div>
                <li>
                    <span className="nav-links"><Link to="/">Browse</Link></span>
                </li>
                <li>
                    <span className="nav-links"><Link to="/login">Login</Link></span>
                </li>
                <li>
                    <span className="nav-links"><Link to="/signup">Sign up</Link></span>
                </li>
            </div>
        )

        return (
            <nav className="header-nav">
                <h1 className="header-logo">KickZ</h1>

                <ul className="header-list">
                    { sessionDisplay }
                </ul>
            </nav>
        )
    }
}


export default NavBar;
