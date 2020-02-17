import { combineReducers } from "redux";

import usersReducer from "./entities/users_reducer";
import shoesReducer from "./entities/shoes_reducer";
import watchlistsReducer from './entities/watchlist_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    shoes: shoesReducer,
    watchlists: watchlistsReducer
});

export default entitiesReducer;