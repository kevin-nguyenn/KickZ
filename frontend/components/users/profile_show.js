import React from 'react';

class ProfileShow extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div className="profile-show">
                <div className="profile-show-title">
                    PROFILE
                </div>
                <p className="profile-gretting">
                    Hi, {this.props.currentUser[1].username}.
                    {/* ^^^ might only work for demouser */}
                </p>
                {/* try to display currentUser.username */}
            </div>
        )
    }
};

export default ProfileShow;