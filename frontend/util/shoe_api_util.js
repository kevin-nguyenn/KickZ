export const fetchShoes = () => {
    return $.ajax({
        method: 'GET',
        url: `/api/shoes`
    });
};

export const fetchShoe = (shoeId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/shoes/${shoeId}`
    });
};

