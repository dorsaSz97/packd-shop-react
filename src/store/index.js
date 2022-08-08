import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cartSlice';
import productsSlice from './productsSlice';
import uiSlice from './uiSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    ui: uiSlice.reducer,
    products: productsSlice.reducer,
  },
});

export default store;
