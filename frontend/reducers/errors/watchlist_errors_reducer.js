import { RECEIEVE_WATCHLIST_ERRORS } from '../../actions/watchlist_actions';

export default (oldState = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIEVE_WATCHLIST_ERRORS:
            return action.errors;
    
        default:
            return oldState;
    }
};