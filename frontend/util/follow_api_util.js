export const fetchFollows = (user_id) => (
    $.ajax({
        method: 'GET',
        url: `/api/follows/${user_id.id}`
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
        url: `/api/follows/${id}`
    })
);
