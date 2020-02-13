import { RECEIVE_CURRENT_USER } from '../../actions/session_actions';
import { RECEIVE_USER, DELETE_USER } from '../../actions/user_actions';

const usersReducer = (oldState = {}, action) => {

    switch (action.type) {
        case RECEIVE_CURRENT_USER || RECEIVE_USER:
            if (action.user){
                Object.assign({}, oldState, action.user);
            } else {
                return state;
            }

        case DELETE_USER:
            return {};

        default:
            return oldState;
    }
};

export default usersReducer;