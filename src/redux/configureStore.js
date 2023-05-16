import { configureStore } from '@reduxjs/toolkit';
import houseSlice from './houseSlice';

const rootReducer = {
  house: houseSlice,
};

const store = configureStore({ reducer: rootReducer });

export default store;
