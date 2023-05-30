import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_HOUSE = 'Cozy-homes-front-end/houses/FETCH_HOUSES';
const ADD_HOUSE = 'Cozy-homes-front-end/houses/ADD_HOUSE';
const DELETE_HOUSE = 'Cozy-homes-front-end/houses/DELETE_HOUSE';

export const fetchHouses = createAsyncThunk(FETCH_HOUSE, async () => {
  const response = await fetch('http://localhost:3000/api/v1/houses');
  const data = await response.json();
  return data;
});

export const addHouse = createAsyncThunk(ADD_HOUSE, async (house) => {
  const response = await fetch('http://localhost:3000/api/v1/houses', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(house),
  });
  if (!response.ok) {
    throw new Error('Error adding a house');
  }
  const data = await response.json();
  return data;
});

export const deleteHouse = createAsyncThunk(
  DELETE_HOUSE,
  async (id) => {
    await fetch(`http://localhost:3000/api/v1/houses/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return id;
  },
);

const houseSlice = createSlice({
  name: 'house',
  initialState: {
    property: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchHouses.fulfilled, (state, action) => {
        state.property = action.payload;
      })
      .addCase(addHouse.fulfilled, (state, action) => {
        state.property.push(action.payload);
      })
      .addCase(deleteHouse.fulfilled, (state, action) => {
        const id = action.payload;
        state.property = state.property.filter((house) => house.id !== id);
      });
  },
});

export default houseSlice.reducer;
