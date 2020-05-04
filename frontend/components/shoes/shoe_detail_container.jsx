import { connect } from 'react-redux';
import { fetchShoe } from '../../actions/shoe_actions';
import { fetchOrdersByShoe, updateOrder } from '../../actions/order_actions';
import { fetchSales, fetchLastSale, createSale } from '../../actions/sale_actions';
import { fetchFollows, createFollow, deleteFollow } from '../../actions/follow_actions';

import ShoeDetail from './shoe_detail';

const mSTP = (state, ownProps) => {
    let isLoggedIn = (state.session.id ? true : false);
    return ({
        currentUser: (isLoggedIn ? state.entities.users : null),
        shoes: state.entities.shoes,
        orders: state.entities.orders,
        sales: state.entities.sales,
        follows: state.entities.follows
    });
};

const mDTP = dispatch => {
    return {
        fetchShoe: (shoe) => dispatch(fetchShoe(shoe)),
        fetchOrdersByShoe: (id) => dispatch(fetchOrdersByShoe(id)),
        updateOrder: (order) => dispatch(updateOrder(order)),
        fetchSales: (id) => dispatch(fetchSales(id)),
        fetchLastSale: (id) => dispatch(fetchLastSale(id)),
        createSale: (sale) => dispatch(createSale(sale)),
        fetchFollows: (id) => dispatch(fetchFollows(id)),
        createFollow: (follow) => dispatch(createFollow(follow)),
        deleteFollow: (id) => dispatch(deleteFollow(id)),
    }
};

export default connect(mSTP, mDTP)(ShoeDetail);