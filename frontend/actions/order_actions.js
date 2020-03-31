import * as OrdersUtil from '../util/order_api_util';

export const RECEIVE_ORDERS = 'RECEIVE_ORDERS';
export const RECEIVE_ORDER = 'RECEIVE_ORDER';
export const RECEIVE_ORDER_ERRORS = 'RECEIVE_ORDER_ERRORS';


const receiveOrders = orders => ({
    type: RECEIVE_ORDERS,
    orders
});

const receiveOrder = order => ({
    type: RECEIVE_ORDER,
    order
});

const receiveOrderErrors = errors => ({
    type: RECEIVE_ORDER_ERRORS,
    errors
});

export const fetchOrdersByShoe = (shoe_id) => dispatch => {
    return OrdersUtil.fetchOrdersByShoe(shoe_id)
        .then(orders => dispatch(receiveOrders(orders)));
}

export const fetchOrdersByUser = (user_id) => dispatch => {
    return OrdersUtil.fetchOrdersByUser(user_id)
        .then(orders => dispatch(receiveOrders(orders)));
}

export const createOrder = order => dispatch => {
    return OrdersUtil.createOrder(order)
        .then(order => dispatch(receiveOrder(order)), 
        errors => dispatch(receiveOrderErrors(errors.responseJSON)));
}

export const updateOrder = order => dispatch => {
    return OrdersUtil.updateOrder(order)
        .then(order => dispatch(receiveOrder(order)), 
        errors => dispatch(receiveOrderErrors(errors.responseJSON)));
}
