import { RECEIVE_FOLLOW, 
    RECEIVE_FOLLOW_ERRORS 
} from '../../actions/follow_actions';

const followErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_FOLLOW_ERRORS:
            if (action.errors) {
                return null;
            } else {
                return state;
            };

        case RECEIVE_FOLLOW:
            return [];

        default:
            return state;
    }
};

export default followErrorsReducer;