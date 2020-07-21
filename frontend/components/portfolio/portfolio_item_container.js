import { connect } from 'react-redux';
import { removeItem } from '../../actions/portfolio_actions';
import { fetchShoe } from '../../actions/shoe_actions';
import { fetchLastSale } from '../../actions/sale_actions';

import PortfolioItem from './portfolio_item';

const mapStateToProps = (state, ownProps) => {
    let isLoggedIn = (state.session.id ? true : false);
    return ({
        currentUser: (isLoggedIn ? state.entities.users : null),
        shoes: state.entities.shoes,
        portfolio: state.entities.portfolio
    });
};

const mapDispatchToProps = dispatch => ({
    fetchShoe: (id) => dispatch(fetchShoe(id)),
    removeItem: (id) => dispatch(removeItem(id)),
    fetchLastSale: (id) => dispatch(fetchLastSale(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioItem);