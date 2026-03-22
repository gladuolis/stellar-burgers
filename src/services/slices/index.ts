import { combineReducers } from '@reduxjs/toolkit';
import ingredientsReducer from './ingredientsSlice';
import constructorReducer from './constructorSlice';
import userReducer from './userSlice';
import orderReducer from './orderSlice';
import feedReducer from './feedSlice';
import profileOrdersReducer from './profileOrdersSlice';

export const rootReducer = combineReducers({
  ingredients: ingredientsReducer,
  burgerConstructor: constructorReducer,
  user: userReducer,
  order: orderReducer,
  feed: feedReducer,
  profileOrders: profileOrdersReducer
});

export {
  ingredientsReducer,
  constructorReducer,
  userReducer,
  orderReducer,
  feedReducer,
  profileOrdersReducer
};