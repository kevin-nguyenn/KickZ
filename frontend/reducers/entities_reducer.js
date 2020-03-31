import { combineReducers } from "redux";

import usersReducer from "./entities/users_reducer";
import shoesReducer from "./entities/shoes_reducer";
import followsReducer from './entities/follows_reducer';
import ordersReducer from './entities/orders_reducer';
import salesReducer from './entities/sales_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    shoes: shoesReducer,
    follows: followsReducer,
    orders: ordersReducer,
    sales: salesReducer
});

export default entitiesReducer;