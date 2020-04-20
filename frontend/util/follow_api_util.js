export const fetchFollows = (user_id) => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${user_id}/cop-list`
    })
);

export const createFollow = (follow) => {
    return $.ajax({
        method: 'POST',
        url: '/api/follows',
        data: { follow }
    })
};

export const deleteFollow = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/cop-list/${id}`
    })
);
