import { RECEIVE_ITEM, 
    RECEIVE_PORTFOLIO_ERRORS 
} from '../../actions/portfolio';
import portfolioReducer from '../entities/portolio_reducer';

// import { CLEAR_ERRORS } from '../../actions/errors';


const portfolioErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_PORTFOLIO_ERRORS:
            return action.errors;

        case RECEIVE_ITEM:
            // console.log('we in clear errors');
            return [];

        default:
            return oldState;
    }
};

export default portfolioErrorsReducer;