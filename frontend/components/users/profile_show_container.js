import { connect } from 'react-redux';
import { updateUser, removeUser } from '../../actions/user_actions';

import ProfileShow from './profile_show';

const mapStateToProps = (state) => ({
    currentUser: state.entities.currentUser
});

const mapDispatchToProps = dispatch => ({
    updateUser: (user) => dispatch(updateUser(user)),
    removeUser: (id) => dispatch(removeUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileShow);