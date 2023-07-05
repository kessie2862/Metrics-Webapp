import { combineReducers } from '@reduxjs/toolkit';
import categoriesReducer from './categoriesSlice';

const rootReducer = combineReducers({
  categories: categoriesReducer,
});

export default rootReducer;
