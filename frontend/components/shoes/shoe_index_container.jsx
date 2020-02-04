import { connect } from 'react-redux';
import { fetchShoes } from '../../actions/shoe_actions';

import ShoeIndex from './shoe_index';

const mSTP = (state) => {
    let isLoggedIn = (state.session.currentUserId ? true : false);
    return ({
        currentUser: (isLoggedIn ? state.entities.currentUser : null),
        shoes: state.entities.shoes
    });
};

const mDTP = dispatch => ({
    fetchShoes: () => dispatch(fetchShoes())
});

export default connect(mSTP, mDTP)(ShoeIndex);