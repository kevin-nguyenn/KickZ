import { RECEIVE_FOLLOW, 
    RECEIVE_FOLLOW_ERRORS 
} from '../../actions/follows';

export default (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_FOLLOW_ERRORS:
            return action.errors;

        case RECEIVE_FOLLOW:
            return [];

        default:
            return state;
    }
};