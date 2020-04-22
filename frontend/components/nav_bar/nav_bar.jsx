import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    handleHelp(e) {
        e.preventDefault();
        alert(`Don't worry, you can't actually buy anything :).`);
    }

    render() {
        if (this.props.location.pathname === '/login' || this.props.location.pathname === '/signup' )
        {
            return null;
        }
        
        const showNavLinks = (
            <li>
                <span className="nav-link-item">
                    <Link to="/shoes">Browse</Link>
                    <a href="https://stockx.com/news/">
                        News
                    </a>
                    <a href="https://github.com/kevin-nguyenn" target="_blank">
                        About
                    </a>
                    <a href="#" onClick={this.handleHelp}>
                        Help
                    </a>
                </span>
            </li>
        )

        const sessionDisplay = this.props.currentUser ? (
            <div className="nav-links">
                { showNavLinks }
                <div className="nav-dropdown">
                    <li className="nav-link-account">
                        <span className="nav-link-item">
                            <Link to="/profile">My Account</Link>
                        </span>
                    </li>
                    <div className="nav-dropdown-items">
                        {/* <Link to="/profile/listings">Listings</Link> */}
                        <Link to="/profile">Profile</Link>
                        <Link to="/profile/cop-list">Following</Link>
                        {/* <a href="#">Portfolio</a> */}
                        <a href="#" onClick={this.props.logout}>Logout</a>
                    </div>
                </div>
            </div>
        ) : (
            <div className="nav-links">
                { showNavLinks }
                <li>
                    <span className="nav-link-item">
                        {/* <Link to="/login">Login</Link> */}
                        <NavLink to="/login">Login</NavLink>
                    </span>
                </li>
                <li>
                    <span className="nav-link-item">
                        <Link to="/signup">Sign up</Link>
                    </span>
                </li>
            </div>
        )

        return (
            <nav className="header-nav">
                <span className="header-logo-span">
                    <a href="/" className="header-logo">Kick</a>
                    <a href="/" className="header-z">Z</a>
                </span>

                <ul className="header-list">
                    { sessionDisplay }
                </ul>
                
            </nav>
        )
    }
}


export default withRouter(NavBar);
