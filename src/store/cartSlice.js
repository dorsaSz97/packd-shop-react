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
      const qtt = action.payload.quantity ? action.payload.quantity : 1;
      if (
        state.items.filter(item => item.id === action.payload.id).length === 0
      ) {
        state.items.push({ ...action.payload, quantity: qtt });
      } else {
        const currIndex = state.items.findIndex(
          item => item.id === action.payload.id
        );
        state.items[currIndex] = {
          ...state.items[currIndex],
          quantity: state.items[currIndex].quantity + qtt,
        };
      }
      state.totalPrice = state.totalPrice + action.payload.price * qtt;
      state.totalQuantity = state.totalQuantity + qtt;

      localStorage.setItem('cartItems', JSON.stringify(state.items));
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
    setCart(state, action) {
      state.items = [...action.payload];
      state.totalQuantity = action.payload.length;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
