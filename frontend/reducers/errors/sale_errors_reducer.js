import { RECEIVE_SALE, 
    RECEIVE_SALE_ERRORS 
} from '../../actions/sale_actions';

const saleErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_SALE_ERRORS:
            return action.errors;

        case RECEIVE_SALE:
            return [];
            
        default:
            return state;
    }
};

export default saleErrorsReducer;