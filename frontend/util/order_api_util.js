export const fetchOrdersByShoe = (shoe_id) => {
    return $.ajax({
        method: 'GET',
        url: `api/shoes/${shoe_id}/orders`
    });
};

export const fetchOrdersByUser = (user_id) => {
    return $.ajax({
        method: 'GET',
        url: `/api/users/${user_id}/orders`
    });
};

export const createOrder = (order) => {
    return $.ajax({
        method: 'POST',
        url: '/api/orders',
        data: { order }
    });
};

export const updateOrder = (order) => {
    return $.ajax({
        method: 'PATCH',
        url: `/api/orders/${order.id}`,
        data: { order }
    });
};