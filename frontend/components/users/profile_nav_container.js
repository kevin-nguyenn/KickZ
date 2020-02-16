import { connect } from 'react-redux';

import ProfileNav from './profile_nav';

const mapStateToProps = (state) => ({
    currentUser: state.entities.currentUser
});

const mapDispatchToProps = dispatch => ({
    // updateUser: (user) => dispatch(updateUser(user)),
    // removeUser: (id) => dispatch(removeUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileNav);