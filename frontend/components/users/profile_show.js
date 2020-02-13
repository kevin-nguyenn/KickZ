import React from 'react';

class ProfileShow extends React.Component {
    constructor(props) {
        super(props)
    };

    render() {
        return (
            <div>
                <p>Hi, {this.props.currentUser.name}</p>
            </div>
        )
    }
};

export default ProfileShow;