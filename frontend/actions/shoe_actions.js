import * as ShoeAPIUtil from '../util/shoe_api_util';

export const RECEIVE_SHOES = "RECEIVE_SHOES";
export const RECEIVE_SHOE = "RECEIVE_SHOE";
export const RECEIVE_SHOE_ERRORS = 'RECEIVE_SHOE_ERRORS'


const receiveShoes = (shoes) => ({
    type: RECEIVE_SHOES,
    shoes
});

const receiveShoe = (shoe) => ({
    type: RECEIVE_SHOE,
    shoe
});

const receiveShoeErrors = errors => ({
    type: RECEIVE_SHOE_ERRORS,
    errors
});

export const fetchShoes = () => dispatch => {
    return ShoeAPIUtil.fetchShoes()
        .then((shoes) => dispatch(receiveShoes(shoes)));
};

export const fetchShoe = (id) => dispatch => {
    return ShoeAPIUtil.fetchShoe(id)
        .then(shoe => dispatch(receiveShoe(shoe)));
};

export const updateProduct = shoe => dispatch => {
    return ShoeAPIUtil.updateShoe(shoe)
    .then(p => dispatch(receiveShoe(p)), errors => dispatch(receiveShoeErrors(errors.responseJSON)));
};