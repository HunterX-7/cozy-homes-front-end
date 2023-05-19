import { configureStore } from '@reduxjs/toolkit';
import houseSlice from './houseSlice';
import reservationSlice from './reservationSlice';

const rootReducer = {
  house: houseSlice,
  reservation: reservationSlice,
};

const store = configureStore({ reducer: rootReducer });

export default store;
