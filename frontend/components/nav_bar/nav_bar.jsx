import React from 'react';
import { Link, NavLink } from 'react-router-dom';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const showNavLinks = (
            <li>
                <span className="nav-link-item"><Link to="/shoes">Browse</Link></span>
            </li>
        )

        const sessionDisplay = this.props.currentUser ? (
            <div className="nav-links">
                { showNavLinks }
                <div className="nav-dropdown">
                    <li>
                        <span className="nav-link-item"><Link to="/">My Account</Link></span>
                    </li>
                    <div className="nav-dropdown-items">
                        <a href="#">Buying</a>
                        <a href="#">Selling</a>
                        <a href="#">Portfolio</a>
                        <a href="#" onClick={this.props.logout}>Logout</a>
                    </div>
                </div>
            </div>
        ) : (
            <div className="nav-links">
                { showNavLinks }
                <li>
                    <span className="nav-link-item"><Link to="/login">Login</Link></span>
                </li>
                <li>
                    <span className="nav-link-item"><Link to="/signup">Sign up</Link></span>
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
