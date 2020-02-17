import { RECEIVE_WATCHLIST, 
    RECEIVE_ITEM, 
    DELETE_ITEM, } from '../../actions/watchlist_actions';

export default (oldState = {}, action) => {
    Object.freeze(oldState);
    
    switch (action.type) {
        case RECEIVE_WATCHLIST:
            return Object.assign({}, action.watchlist);

        case RECEIVE_ITEM:
            if (action.item) {
                return Object.assign({}, oldState, { [action.item.id]: action.item });
            } else {
                return oldState;
            };

        case DELETE_ITEM:
            let newState = Object.assign({}, state);
            newState[action.itemId] = undefined;
            return newState;
    
        default:
            return oldState;
    }
};