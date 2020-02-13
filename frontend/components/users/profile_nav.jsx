import React from 'react';
import { Link } from 'react-router-dom';

class ProfileNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        <ul className="profile-nav-links">
            <span className="profile-nav-name">{this.props.currentUser ? this.props.currentUser.name : ""}</span>
            <Link to="/profile">
                <li>
                    <span className="nav-icon-img"></span>
                    <span className="nav-title">Profile</span>
                </li>
            </Link>
            <Link to="/profile/cop-list">
                <li>
                    <span className="nav-icon-img"></span>
                    <span className="nav-title">Following</span>
                </li>
            </Link>
        </ul>
    }
};

export default ProfileNav;