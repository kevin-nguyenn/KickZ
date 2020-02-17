import { connect } from 'react-redux';
import { fetchShoes } from '../../actions/shoe_actions';
import { fetchWatchlist } from '../../actions/watchlist_actions';

import Watchlist from './watchlist';

const mapStateToProps = (state) => {
    let isLoggedIn = (state.session.currentUserId ? true : false);
    return ({
        currentUser: (isLoggedIn ? state.entities.currentUser : null),
        products: state.entities.products,
        watchlist: state.entities.watchlist,
        errors: state.errors.watchlist
    });
};

const mapDispatchToProps = dispatch => ({
    fetchShoes: () => dispatch(fetchShoes()),
    fetchWatchlist: () => dispatch(fetchWatchlist())
});

export default connect(mapStateToProps, mapDispatchToProps)(Watchlist);