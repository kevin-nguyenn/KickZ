import * as SalesUtil from '../util/sale_api_util';

export const RECEIVE_SALES = 'RECEIVE_SALES';
export const RECEIVE_SALE = 'RECEIVE_SALE';
export const RECEIVE_LAST_SALE = 'RECEIVE_LAST_SALE';
export const RECEIVE_SALE_ERRORS = 'RECEIVE_SALE_ERRORS';

const receiveSales = sales => ({
    type: RECEIVE_SALES,
    sales
});

const receiveSale = sale => ({
    type: RECEIVE_SALE,
    sale
});

const receiveLastSale = sale => ({
    type: RECEIVE_LAST_SALE,
    sale
});

const receiveSaleErrors = errors => ({
    type: RECEIVE_SALE_ERRORS,
    errors
});

export const fetchSales = (shoe_id) => dispatch => {
    return SalesUtil.fetchSales(shoe_id)
        .then(sales => dispatch(receiveSales(sales)));
};

export const fetchLastSale = (shoe_id) => dispatch => {
    return SalesUtil.fetchLastSale(shoe_id)
        .then(sale => dispatch(receiveLastSale(sale)));
};

export const fetchSalesBySize = (shoe_id) => dispatch => {
    return SalesUtil.fetchSalesBySize(shoe_id, size)
        .then(sales => dispatch(receiveSales(sales)));
};

export const createSale = sale => dispatch => {
    return SalesUtil.createSale(sale)
        .then(sale => dispatch(receiveSale(sale)), 
        errors => dispatch(receiveSaleErrors(errors.responseJSON)));
};

export const updateSale = sale => dispatch => {
    return SalesUtil.updateSale(sale)
        .then(sale => dispatch(receiveSale(sale)), 
        errors => dispatch(receiveSaleErrors(errors.responseJSON)));
};