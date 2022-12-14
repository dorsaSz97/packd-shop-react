import { createSlice } from '@reduxjs/toolkit';

import PRODUCTS_BANNER from '../data/productsBanner';

const initialProductsState = {
  products: [],
  totalProducts: 0,
  currProduct: null,
  refinedProducts: [],
  sortTerm: '',
  filterTerm: '', // in the banner as well
};

const productsSlice = createSlice({
  name: 'products',
  initialState: initialProductsState,
  reducers: {
    setCurrProduct(state, action) {
      const category = action.payload || '';
      const currProductObj = PRODUCTS_BANNER.filter(product =>
        product.category.toLowerCase().includes(category.toLowerCase())
      );
      currProductObj.length === 0
        ? (state.currProduct = '')
        : (state.currProduct = { ...currProductObj[0] });
    },
    setProducts(state, action) {
      state.products = [...action.payload];
      state.refinedProducts = action.payload;
      state.totalProducts = state.refinedProducts.length;
    },

    refineData(state, action) {
      state.filterTerm = action.payload.filterTerm;
      state.sortTerm = action.payload.sortTerm;

      let productsArr = [];

      if (action.payload.filterTerm) {
        productsArr = state.products.filter(
          product => action.payload.filterTerm === product.category
        );
      } else {
        productsArr = [...state.products];
      }

      switch (action.payload.sortTerm) {
        case 'AtoZ':
          productsArr.sort((productA, productB) => {
            if (productA.name < productB.name) {
              return -1;
            }
            if (productA.name > productB.name) {
              return 1;
            }
            return 0;
          });
          break;
        case 'ZtoA':
          productsArr.sort((productA, productB) => {
            if (productA.name > productB.name) {
              return -1;
            }
            if (productA.name < productB.name) {
              return 1;
            }
            return 0;
          });
          break;
        case 'LtoH':
          productsArr.sort(
            (productA, productB) => productA.price - productB.price
          );
          break;
        case 'HtoL':
          productsArr.sort(
            (productA, productB) => productB.price - productA.price
          );
          break;
        default:
          break;
      }

      state.refinedProducts = [...productsArr];
      state.totalProducts = state.refinedProducts.length;
    },
  },
});

export const productsActions = productsSlice.actions;
export default productsSlice;
