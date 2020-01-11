import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import shoesReducer from "./shoes_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    shoes: shoesReducer
});

export default entitiesReducer;