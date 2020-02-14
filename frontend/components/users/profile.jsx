import React from 'react';
import { Route, Router } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import ProfileNavContainer from './profile_nav_container';
import ProfileShowContainer from './profile_show_container';

class Profile extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        <div className="profile">
            <ProfileNavContainer/>
            <div className="profile-contents">
                <Route exact path="/profile" component={ProfileShowContainer} />
                <ProtectedRoute />
            </div>
        </div>
    }
}

export default Profile;