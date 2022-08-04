import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      if (
        state.items.filter(item => item.id === action.payload.id).length === 0
      ) {
        state.items.push({ ...action.payload, quantity: 1 });
      } else {
        const currIndex = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items[currIndex] = {
          ...state.items[currIndex],
          quantity: state.items[currIndex].quantity + 1,
        };
      }
      state.totalPrice = state.totalPrice + action.payload.price;
      state.totalQuantity++;
    },
    removeItem(state, action) {
      const currItemIndex = state.items.findIndex(
        item => item.id === action.payload
      );
      const currItem = state.items[currItemIndex];

      if (currItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== action.payload);
      } else {
        state.items[currItemIndex].quantity =
          state.items[currItemIndex].quantity - 1;
      }
      state.totalQuantity--;
      state.totalPrice = state.totalPrice - currItem.price;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
