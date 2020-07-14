import {
    RECEIVE_SHOES,
    RECEIVE_SHOE
} from '../../actions/shoe_actions';

const shoesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_SHOES:
            let newState = Object.assign({}, oldState);
            action.shoes.forEach(shoe => newState[shoe.id] = shoe);
            return newState;

        case RECEIVE_SHOE:
            const shoe = action.shoe;
            if (action.shoe) {
                return Object.assign({}, oldState, { [action.shoe.id]: action.shoe });
            } else {
                return oldState;
            }
    
        default:
            return oldState;
    }
}; 

export default shoesReducer;