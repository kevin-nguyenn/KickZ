import { connect } from 'react-redux';
import { fetchPortfolio } from '../../actions/portfolio_actions';
import { fetchShoes } from '../../actions/shoe_actions';
import { fetchLastSale } from '../../actions/sale_actions';

import PortfolioIndex from './portfolio_index';

const mapStateToProps = (state) => {
    let isLoggedIn = (state.session.id ? true : false);
    return ({
        currentUser: (isLoggedIn ? state.entities.users : null),
        shoes: state.entities.shoes,
        portfolio: state.entities.portfolio,
        sales: state.entities.sales
    });
};

const mapDispatchToProps = dispatch => ({
    fetchShoes: () => dispatch(fetchShoes()),
    fetchPortfolio: (id) => dispatch(fetchPortfolio(id)),
    fetchLastSale: (id) => dispatch(fetchLastSale(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioIndex);