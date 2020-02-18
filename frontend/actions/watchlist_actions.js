import * as WatchlistAPIUtil from '../util/watchlist_api_util';

// export const RECEIEVE_WATCHLISTS = 'RECEIVE_WATCHLISTS';
export const RECEIVE_WATCHLIST = 'RECEIVE_WATCHLIST';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const RECEIEVE_WATCHLIST_ERRORS = 'RECEIVE_WATCHLIST_ERRORS';

// export const receiveWathlists = (watchlists) => ({
//     type: RECEIEVE_WATCHLISTS,
//     watchlists
// });

export const receiveWathlist = (watchlist) => ({
    type: RECEIVE_WATCHLIST,
    watchlist
});

export const receiveItem = item => ({
    type: RECEIVE_ITEM,
    item
});

export const deleteItem = itemId => ({
    type: DELETE_ITEM,
    itemId
});

export const receiveWathlistsErrors = errors => ({
    type: RECEIEVE_WATCHLIST_ERRORS,
    errors
});

// export const fetchWatchlists = () => dispatch => {
//     return WatchlistAPIUtil.fetchWathclists()
//         .then((watchlists) => dispatch(receiveWatchlists(watchlists)));
// };

export const fetchWatchlist = (id) => dispatch => {
    return WatchlistAPIUtil.fetchWatchlist(id)
        .then(watchlist => dispatch(receiveWatchlist(watchlist)));
};

// export const updatWatchlist = watchlist => dispatch => {
//     return WatchlistAPIUtil.updatWathclist(watchlist)
//         .then(shoe => dispatch(receiveWatchlist(shoe)),
//         errors => dispatch(receiveWatchlistErrors(errors.responseJSON)));
// };

export const addItem = (id, item) => dispatch => {
    return WatchlistAPIUtil.addItem(id, item)
        .then(newItem => dispatch(receiveItem(newItem)), 
        errors => dispatch(receiveWathlistsErrors(errors.responseJSON)));
};

export const removeItem = id => dispatch => {
    return WatchlistAPIUtil.removeItem(id)
        .then(() => dispatch(deleteItem(id)));
};