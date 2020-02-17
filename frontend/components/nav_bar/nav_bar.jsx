import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.location.pathname === '/login' || this.props.location.pathname === '/signup' )
        {
            return null;
        }
        
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
                        <span className="nav-link-item"><Link to="/profile">My Account</Link></span>
                    </li>
                    <div className="nav-dropdown-items">
                        <a href="#">Buying</a>
                        <a href="#">Selling</a>
                        <Link to="/profile">Profile</Link>
                        <Link to="/profile/cop-list">Following</Link>
                        <a href="#">Portfolio</a>
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
                {/* <h1 className="header-logo">KickZ</h1> */}
                <a href="/" className="header-logo">KickZ</a>

                <ul className="header-list">
                    { sessionDisplay }
                </ul>
                
            </nav>
        )
    }
}


export default withRouter(NavBar);
