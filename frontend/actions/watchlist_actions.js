import * as WatchlistAPIUtil from '../util/watchlist_api_util';

export const RECEIEVE_WATCHLISTS = 'RECEIVE_WATCHLISTS'
export const RECEIEVE_WATCHLIST = 'RECEIVE_WATCHLIST'
export const RECEIEVE_WATCHLIST_ERRORS = 'RECEIVE_WATCHLIST_ERRORS'

export const receiveWathlists = (watchlists) => ({
    type: RECEIEVE_WATCHLISTS,
    watchlists
});

export const receiveWathlist = (watchlist) => ({
    type: RECEIEVE_WATCHLIST,
    watchlist
});

export const receiveWathlistsErrors = errors => ({
    type: RECEIEVE_WATCHLIST_ERRORS,
    errors
});

export const fetchWatchlists = () => dispatch => {
    return WatchlistAPIUtil.fetchWathclists()
        .then((watshlists) => dispatch(receiveWatchlists(watshlists)));
};

export const fetcWatchlist = (id) => dispatch => {
    return WatchlistAPIUtil.fetcWathclist(id)
        .then(watchlist => dispatch(receiveWatchlist(watchlist)));
};

export const updatWatchlist = watchlist => dispatch => {
    return WatchlistAPIUtil.updatWathclist(watchlist)
        .then(p => dispatch(receiveWatchlist(p)), errors => dispatch(receiveWatchlistErrors(errors.responseJSON)));
};