import { connect } from 'react-redux';

import Profile from './profile';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users
});

const mapDispatchToProps = (dispatch) => {
    return ({});
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);