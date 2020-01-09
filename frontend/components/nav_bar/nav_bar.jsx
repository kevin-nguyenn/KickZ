import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        const sessionDisplay = this.props.currentUser ? (
            <button className="nav-logout-button" onClick={this.props.logout}>
            <Link to="/">Log Out</Link>
            </button>
        ) : (
            <div>
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
                    <li>
                        <span className="nav-links"><Link to="/">Browse</Link></span>
                    </li>
                    { sessionDisplay }
                </ul>
            </nav>
        )
    }
}


export default NavBar;
