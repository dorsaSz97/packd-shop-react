import { createSlice } from '@reduxjs/toolkit';

const initialUISlice = {
  isModalVisible: false,
  isHamburgerMenuVisible: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialUISlice,
  reducers: {
    toggleModal(state) {
      state.isModalVisible = !state.isModalVisible;
    },
    toggleMenu(state) {
      state.isHamburgerMenuVisible = !state.isHamburgerMenuVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
