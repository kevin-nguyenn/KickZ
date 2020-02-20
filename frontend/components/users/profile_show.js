import React from 'react';

class ProfileShow extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div>
                <p>Hi, {this.props.currentUser}</p>
                {/* try to display currentUser.username */}
            </div>
        )
    }
};

export default ProfileShow;