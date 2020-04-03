import { connect } from 'react-redux';
import { fetchFollows } from '../../actions/follow_actions';
import { fetchShoes } from '../../actions/shoe_actions';

import Follows from './follows';

const mapStateToProps = (state) => {
    let isLoggedIn = (state.session.id ? true : false);
    return ({
        currentUser: (isLoggedIn ? state.entities.users : null),
        shoes: state.entities.shoes
    });
};

const mapDispatchToProps = dispatch => ({
    fetchShoes: () => dispatch(fetchShoes()),
    fetchFollows: (id) => dispatch(fetchFollows(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Follows);