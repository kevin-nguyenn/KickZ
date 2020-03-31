import { RECEIVE_ORDER, 
    RECEIVE_ORDER_ERRORS 
} from '../../actions/order_actions';

export default (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_ORDER_ERRORS:
            return action.errors;

        case RECEIVE_ORDER:
            return [];

        default:
            return state;
    }
};