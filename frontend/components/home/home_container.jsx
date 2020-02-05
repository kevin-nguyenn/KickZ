import { connect } from 'react-redux';
import Home from './home';
import { logout } from '../../actions/session_actions';

const mSTP = (state) => {
    let isLoggedIn = (state.session.currentUserId ? true : false);
    return ({
        loggedIn: isLoggedIn,
        currentUser: (isLoggedIn ? state.entitites.currentUser : null)
    })
};

const mDTP = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(mSTP, mDTP)(Home);