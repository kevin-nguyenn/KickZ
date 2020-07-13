import * as PortfolioAPIUtil from '../utils/api-portfolio-util';

export const RECEIVE_PORTFOLIO = 'RECEIVE_PORTFOLIO';
export const RECEIVE_ITEM = 'RECEIVE_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const RECEIVE_PORTFOLIO_ERRORS = 'RECEIVE_PORTFOLIO_ERRORS'

const receivePortfolio = portfolio => ({
    type: RECEIVE_PORTFOLIO,
    portfolio
});

const receiveItem = item => ({
    type: RECEIVE_ITEM,
    item
});

const deleteItem = itemId => ({
    type: DELETE_ITEM,
    itemId
});

const receivePortfolioErrors = errors => ({
    type: RECEIVE_PORTFOLIO_ERRORS,
    errors
});

export const fetchPortfolio = (id) => dispatch => {
    return PortfolioAPIUtil.fetchPortfolio(id)
        .then(
            portfolio => dispatch(receivePortfolio(portfolio))
        );
}

export const addItem = (id, item) => dispatch => {
    return PortfolioAPIUtil.addItem(id, item)
        .then(
            newItem => dispatch(receiveItem(newItem)), 
            errors => dispatch(receivePortfolioErrors(errors.responseJSON))
        );
}

export const removeItem = id => dispatch => {
    return PortfolioAPIUtil.removeItem(id)
        .then(
            () => dispatch(deleteItem(id))
        );
}