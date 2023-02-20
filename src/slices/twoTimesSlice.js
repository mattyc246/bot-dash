import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  events: []
};

export const twoTimesSlice = createSlice({
  name: 'twoTimes',
  initialState,
  reducers: {
    setEvents: (state, action) => {
      state.events = action.payload;
    },
    addEvent: (state, action) => {
      state.events = [...state.events, action.payload];
    }
  }
});

export const { setEvents, addEvent } = twoTimesSlice.actions;

export default twoTimesSlice.reducer;
