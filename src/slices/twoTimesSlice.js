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
    },
    deleteEvent: (state, action) => {
      state.events = state.events.filter((e) => e.id !== action.payload);
    }
  }
});

export const { setEvents, addEvent, deleteEvent } = twoTimesSlice.actions;

export default twoTimesSlice.reducer;
