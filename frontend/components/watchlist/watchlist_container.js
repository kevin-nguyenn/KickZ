import { connect } from 'react-redux';

import Watchlist from '';

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
    fetchWatchlists: () => dispatch(fetchWatchlists())
});

export default connect(mapStateToProps, mapDispatchToProps)();