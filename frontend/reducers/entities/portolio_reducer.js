import { RECEIVE_PORTFOLIO, 
    RECEIVE_ITEM, 
    DELETE_ITEM
} from '../../actions/portfolio';

const portfolioReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_PORTFOLIO:
            return Object.assign({}, action.portfolio);

        case RECEIVE_ITEM:
            if (action.item) {
                return Object.assign({}, oldState, { [action.item.id]: action.item });
            } else {
                return oldState;
            }

        case DELETE_ITEM:
            let newState = Object.assign({}, oldState);
            newState[action.itemId] = undefined;
            return newState;

        default:
            return oldState;
    }
};

export default portfolioReducer;