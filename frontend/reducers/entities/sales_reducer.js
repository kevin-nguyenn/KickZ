import { RECEIVE_SALES, 
    RECEIVE_SALE, 
    RECEIVE_LAST_SALE
} from '../../actions/sale_actions';

const salesReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_SALES:
            return Object.assign({}, action.sales);

        case RECEIVE_SALE:
            if (action.sale) {
                return Object.assign({}, oldState, { [action.sale.product_id]: { [action.sale.id]: action.sale } });
            } else {
                return oldState;
            }

        case RECEIVE_LAST_SALE:
            if (action.sale) {
                return Object.assign({}, oldState, { [action.sale.product_id]: { lastSale: action.sale } });
            } else {
                return oldState;
            }

        default:
            return oldState;
    }
};

export default salesReducer;