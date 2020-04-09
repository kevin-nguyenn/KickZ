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
                <p className="profile-message">
                    Thank you for visiting KickZ! 
                    You can find the GitHub repo for KickZ
                    <a href="https://github.com/kevin-nguyenn/KickZ">
                        &nbsp;here.
                    </a>
                </p>
            </div>
        )
    }
};

export default ProfileShow;