import { connect } from 'react-redux';
import { fetchShoes } from '../../actions/shoe_actions';

import ShoesSearch from './shoes_search';

const mapStateToProps = (state) => {
    let isLoggedIn = (state.session.id ? true : false);
    return ({
        currentUser: (isLoggedIn ? state.entities.users : null),
        shoes: state.entities.shoes
    });
};

const mapDispatchToProps = dispatch => ({
    fetchShoes: () => dispatch(fetchShoes())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoesSearch);