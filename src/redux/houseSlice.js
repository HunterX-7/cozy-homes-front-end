import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHouse = createAsyncThunk('fetchHouse', async () => {
    const response = await fetch('http://localhost:3000/api/v1/houses');
    const data = await response.json();
    console.log(data)
    return data;
})

const houseSlice = createSlice({
    name: 'house',
    initialState: {
        property: [],
    },
    extraReducers: {
        [fetchHouse.fulfilled]: (state, action) => {
            state.property = action.payload;
        },
    },
});
  
export default houseSlice.reducer;