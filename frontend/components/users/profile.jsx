import React from 'react';
import { Route } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import ProfileNavContainer from './profile_nav_container';
import ProfileShowContainer from './profile_show_container';
import FollowsContainer from '../follows/follows_container'

class Profile extends React.Component {
    constructor(props) {
        super(props)

        this.selected = this.props.location.pathname.split('/');
        this.selected = this.selected[this.selected.length - 1];
    }

    render() {
        return (
            <div className="profile">
                <ProfileNavContainer selected={this.selected} />
                <div className="profile-contents">
                    <Route exact path="/profile" component={ProfileShowContainer} />
                    <ProtectedRoute path="/profile/follows" component={FollowsContainer} />
                </div>
            </div>
        )
    }
}

export default Profile;