import { combineReducers } from "redux";

import usersReducer from "./entities/users_reducer";
import shoesReducer from "./entities/shoes_reducer";
import followsReducer from './entities/follows_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    shoes: shoesReducer,
    follows: followsReducer
});

export default entitiesReducer;