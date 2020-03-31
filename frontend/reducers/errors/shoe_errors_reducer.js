import { RECEIVE_SHOE, 
    RECEIVE_SHOE_ERRORS 
} from '../../actions/shoe_actions';

const shoeErrorsReducer = (state = [], action) => {
    Object.freeze(state);
    
    switch (action.type) {
        case RECEIVE_SHOE_ERRORS:
            return action.errors;

        case RECEIVE_SHOE:
            return [];

        default:
            return state;
    }
};

export default shoeErrorsReducer;