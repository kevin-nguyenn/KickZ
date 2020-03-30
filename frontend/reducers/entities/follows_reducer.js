import { RECEIVE_FOLLOWS, 
    RECEIVE_FOLLOW, 
} from '../../actions/follow_actions';

const followsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_FOLLOWS:
            return Object.assign({}, action.follows);

        case RECEIVE_FOLLOW:
            if (action.order) {
                return Object.assign({}, oldState, { [action.follow.id]: action.follow });
            } else {
                return oldState;
            }

        default:
            return oldState;
    }
};

export default followsReducer;