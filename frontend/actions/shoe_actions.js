import * as ShoeAPIUtil from '../util/shoe_api_util';

export const RECEIVE_SHOES = "RECEIVE_SHOES";
export const RECEIVE_SHOE = "RECEIVE_SHOE";

const receiveShoes = (shoes) => ({
    type: RECEIVE_SHOES,
    shoes
});

const receiveShoe = (shoe) => ({
    type: RECEIVE_SHOE,
    shoe
});

export const fetchShoes = () => dispatch => {
    return ShoeAPIUtil.fetchShoes()
        .then((shoes) => dispatch(receiveShoes(shoes)));
};

export const fetchShoe = (shoeId) => dispatch => {
    return ShoeAPIUtil.fetchShoe(shoeId)
        .then(shoe => dispatch(receiveShoe(shoe)));
};

