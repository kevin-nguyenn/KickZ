import { RECEIVE_ORDERS, 
    RECEIVE_ORDER
} from '../../actions/order_actions';

const ordersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_ORDERS:
            return Object.assign({}, action.orders);

        case RECEIVE_ORDER:
            if (action.order) {
                return Object.assign({}, oldState, { [action.order.id]: action.order });
            } else {
                return oldState;
            }

        default:
            return oldState;
    }
};

export default ordersReducer;