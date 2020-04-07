import { connect } from 'react-redux';
import { deleteFollow } from '../../actions/follow_actions';
import { fetchShoe } from '../../actions/shoe_actions';
import { fetchOrdersByShoe } from '../../actions/order_actions';

import FollowItem from './follow_item';

const mapStateToProps = (state, ownProps) => {
    let isLoggedIn = (state.session.id ? true : false);
    return ({
        currentUser: (isLoggedIn ? state.entities.users : null),
        shoes: state.entities.shoes,
    });
};

const mapDispatchToProps = dispatch => ({
    fetchShoe: (id) => dispatch(fetchShoe(id)),
    deleteFollow: (id) => dispatch(deleteFollow(id)),
    fetchOrdersByShoe: (id) => dispatch(fetchOrdersByShoe(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowItem);