import { connect } from 'react-redux';
import { fetchShoes } from '../../actions/shoe_actions';
import { fetchLastSale } from '../../actions/sales';
import { fetchOrders } from '../../actions/orders'

import Listings from './listings';

const mapStateToProps = (state) => {
    let isLoggedIn = (state.session.currentUserId ? true : false);
    return ({
        currentUser: (isLoggedIn ? state.entities.currentUser : null),
        shoes: state.entities.shoes,
        sales: state.entities.sales,
        orders: state.entities.orders
    });
};

const mapDispatchToProps = dispatch => ({
    fetchShoes: () => dispatch(fetchShoes()),
    fetchLastSale: (id) => dispatch(fetchLastSale(id)),
    fetchOrders: (id) => dispatch(fetchOrders(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Listings);