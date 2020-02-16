import { combineReducers } from "redux";

import sessionErrorsReducer from "./errors/session_errors_reducer";
import shoeErrorsReducer from './errors/shoe_errors_reducer';
import userErrorsReducer from './errors/user_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    shoe: shoeErrorsReducer,
    user: userErrorsReducer
});

export default errorsReducer;
