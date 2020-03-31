import { combineReducers } from "redux";

import sessionErrorsReducer from "./errors/session_errors_reducer";
import shoeErrorsReducer from './errors/shoe_errors_reducer';
import userErrorsReducer from './errors/user_errors_reducer';
import followErrorsReducer from './errors/follow_errors_reducer';
import orderErrorsReducer from './errors/order_errors_reducer';
import saleErrorsReducer from './errors/sale_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    shoe: shoeErrorsReducer,
    user: userErrorsReducer,
    follow: followErrorsReducer,
    order: orderErrorsReducer,
    sale: saleErrorsReducer
});

export default errorsReducer;
