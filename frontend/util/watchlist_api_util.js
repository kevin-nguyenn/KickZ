export const fetchWatchlists = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/watchlists`
    });
};

export const fetchWatchlist = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/watchlists/${id}`
    });
};

export const createWatchlist = (watchlist) => (
    $.ajax({
        method: 'POST',
        url: `/api/watchlists/${ watchlist.shoe_id }/watchlists`,
        data: { watchlist }
    })
);

// export const updateWatchlist = (watchlist) => (
//     $.ajax({
//         method: 'PATCH',
//         url: `/api/watchlists/${watchlist.id}`,
//         data: { watchlist }
//     })
// );

export const addItem = (id, item) => (
    $.ajax({
        method: 'POST',
        url: `/api/users/${id}/watchlist`,
        data: { item }
    })
);

export const removeItem = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/watchlist/${id}`
    })
);