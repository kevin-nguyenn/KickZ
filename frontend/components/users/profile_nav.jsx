import React from 'react';
import { Link } from 'react-router-dom';

class ProfileNav extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)

        this.changeSelected = this.changeSelected.bind(this);
    }

    componentDidMount() {
        $(document.getElementById(`profile-nav-${this.props.selected}`)).addClass('profile-selected');
    }

    changeSelected(e) {
        let selected = document.getElementsByClassName('profile-selected');
        if (selected.length > 0) $(selected[0]).removeClass('profile-selected');
        $(e.currentTarget).addClass('profile-selected');
    }

    render() {
        return (
            <ul className="profile-nav-links">
                <span className="profile-nav-name">
                    {this.props.currentUser ? this.props.currentUser[1].username : ""}
                </span>
                <Link to="/profile/listings">
                    <li id="prof-nav-listings" className="profile-nav-item" onClick={this.changeSelected}>
                        <span className="nav-icon-img">💵</span>
                        <span className="nav-title">Listings</span>
                    </li>
                </Link>
                <Link to="/profile">
                    <li id="prof-nav-profile" className="profile-nav-item" onClick={this.changeSelected}>
                        <span className="nav-icon-img">😎</span>
                        <span className="nav-title">Profile</span>
                    </li>
                </Link>
                <Link to="/profile/cop-list">
                    <li id="prof-nav-follows" className="profile-nav-item" onClick={this.changeSelected}>
                        <span className="nav-icon-img">🧲</span>
                        <span className="nav-title">Following</span>
                    </li>
                </Link>
            </ul>
        )
    }
};

export default ProfileNav;