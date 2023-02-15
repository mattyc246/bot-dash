import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoaded: false,
  session: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsLoaded: (state, action) => {
      state.isLoaded = action.payload;
    },
    setSession: (state, action) => {
      state.session = action.payload;
    }
  }
});

export const { setIsLoaded, setSession } = authSlice.actions;

export default authSlice.reducer;
