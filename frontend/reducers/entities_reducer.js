import { combineReducers } from "redux";

import usersReducer from "./entities/users_reducer";
import shoesReducer from "./entities/shoes_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    shoes: shoesReducer
});

export default entitiesReducer;