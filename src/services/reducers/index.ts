import { combineReducers } from '@reduxjs/toolkit';
import { 
  ingredientsReducer, 
  constructorReducer, 
  userReducer,
  orderReducer,
  feedReducer,
  profileOrdersReducer 
} from '../slices';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: constructorReducer,
  user: userReducer,
  order: orderReducer,
  feed: feedReducer,
  profileOrders: profileOrdersReducer
});