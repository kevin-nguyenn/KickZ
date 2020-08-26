import { connect } from 'react-redux';
// import { removeItem } from '../../actions/portfolio';
import { updateOrder } from '../../actions/order_actions';
import { fetchOrdersByProduct } from '../../actions/order_actions';

import ListingItem from './listing_item';

const mapStateToProps = (state, ownProps) => {
    let isLoggedIn = (state.session.id ? true : false);
    return ({
        currentUser: (isLoggedIn ? state.entities.users : null),
        shoes: state.entities.shoes,
    });
};

const mapDispatchToProps = dispatch => ({
    fetchProduct: (id) => dispatch(fetchProduct(id)),
    updateOrder: (order) => dispatch(updateOrder(order)),
    fetchOrdersByProduct: (id) => dispatch(fetchOrdersByProduct(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingItem);