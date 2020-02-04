import { RECEIVE_PRODUCT, RECEIVE_PRODUCT_ERRORS } from '../../actions/shoe_actions';

export default (state = [], action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_PRODUCT_ERRORS:
            return action.errors;

        case RECEIVE_PRODUCT:
            return [];

        default:
            return state;
    }
};