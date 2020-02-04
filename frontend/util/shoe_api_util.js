export const fetchShoes = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/shoes`
    });
};

export const fetchShoe = (id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/shoes/${id}`
    });
};

export const createShoe = (shoe) => (
    $.ajax({
        method: 'POST',
        url: '/api/shoes',
        data: { shoe }
    })
);

export const updateShoe = (shoe) => (
    $.ajax({
        method: 'PATCH',
        url: `/api/shoes/${shoe.id}`,
        data: { shoe }
    })
);