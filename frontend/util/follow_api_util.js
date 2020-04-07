export const fetchFollows = (user_id) => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${user_id}/cop-list`
    })
);

export const createFollow = (follow) => (
    $.ajax({
        method: 'POST',
        url: '/api/cop-list',
        data: { follow }
    })
);

export const deleteFollow = (id) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/cop-list/${id}`
    })
);
