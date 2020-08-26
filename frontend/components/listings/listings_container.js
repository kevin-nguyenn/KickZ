import { connect } from 'react-redux';
import { fetchShoes } from '../../actions/shoe_actions';
import { fetchLastSale } from '../../actions/sale_actions';
import { fetchOrders } from '../../actions/order_actions'

import Listings from './listings';

const mapStateToProps = (state) => {
    let isLoggedIn = (state.session.id ? true : false);
    return ({
        currentUser: (isLoggedIn ? state.entities.users : null),
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