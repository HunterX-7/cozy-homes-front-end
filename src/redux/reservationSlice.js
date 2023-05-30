import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_RESERVATION = 'Cozy-homes-front-end/houses/FETCH_RESERVATION';
const ADD_RESERVATION = 'Cozy-homes-front-end/houses/ADD_RESERVATION';

export const fetchReservation = createAsyncThunk(FETCH_RESERVATION, async (user) => {
  const response = await fetch(`http://localhost:3000/api/v1/reservations/${user.name}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
});

export const addReservation = createAsyncThunk(ADD_RESERVATION, async (reservation) => {
  const response = await fetch('http://localhost:3000/api/v1/reservations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(reservation),
  });
  if (!response.ok) {
    throw new Error('Error adding a reservation');
  }
  const data = await response.json();
  return data;
});

const reservationSlice = createSlice({
  name: 'reservation',
  initialState: {
    reservation: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReservation.fulfilled, (state, action) => {
        state.reservation = action.payload;
      })
      .addCase(addReservation.fulfilled, (state, action) => {
        state.reservation.push(action.payload);
      });
  },
});

export default reservationSlice.reducer;
