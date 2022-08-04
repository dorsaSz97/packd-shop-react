import { createSlice } from '@reduxjs/toolkit';

const initialUISlice = {
  isVisible: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUISlice,
  reducers: {
    toggleCart(state, action) {
      state.isVisible = !state.isVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
