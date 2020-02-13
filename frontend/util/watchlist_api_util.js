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
        url: '/api/watchlists',
        data: { watchlist }
    })
);

export const updateWatchlist = (watchlist) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/watchlists/${watchlist.id}`,
        data: { watchlist }
    })
);