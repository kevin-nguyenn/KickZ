import { connect } from 'react-redux';
import { createOrder } from '../../actions/order_actions';
import { fetchShoes } from '../../actions/shoe_actions';
// import { resetErrors } from '../../actions/errors';

import ListingsForm from './listings_form';


const mapStateToProps = (state) => {
    let isLoggedIn = (state.session.id ? true : false);
    return ({
        currentUser: (isLoggedIn ? state.entities.users : null),
        shoes: state.entities.shoes,
        errors: state.errors.portfolio
    });
};

const mapDispatchToProps = dispatch => ({
    createOrder: (item) => dispatch(createOrder(item)),
    fetchShoes: () => dispatch(fetchShoes()),
    // resetErrors: () => dispatch(resetErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingsForm);