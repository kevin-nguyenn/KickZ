import {
    RECEIVE_SHOES,
    RECEIVE_SHOE
} from '../actions/shoe_actions';

const shoesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_SHOES:
            return Object.assign({}, oldState, action.shoes);

        case RECEIVE_SHOE:
            const shoe = action.shoe;
            return Object.assign({}, oldState, { [shoe.id]: shoe });
    
        default:
            return oldState;
    }
}; 

export default shoesReducer;