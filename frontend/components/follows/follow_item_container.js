import { connect } from 'react-redux';
import { deleteFollow } from '../../actions/follow_actions';
import { fetchShoe } from '../../actions/shoe_actions';

import FollowItem from './follow_item';

const mapStateToProps = (state, ownProps) => {
    let isLoggedIn = (state.session.currentUserId ? true : false);
    return ({
        currentUser: (isLoggedIn ? state.entities.currentUser : null),
        shoes: state.entities.shoes,
    });
};

const mapDispatchToProps = dispatch => ({
    fetchShoe: (id) => dispatch(fetchShoe(id)),
    deleteFollow: (id) => dispatch(deleteFollow(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowItem);