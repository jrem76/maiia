import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    addProducts: (state, action) => {
      state.products = [
        ...state.products,
        ...action.payload.products,
      ]
    },
    removeProduct: (state, action) => {
      state.value -= 1;
    },
  },
});

export const { addProducts, removeProduct } = productsSlice.actions;

export const selectNumberOfProducts = state => state.products.products.length;
export const getProducts = state => state.products.products;

export default productsSlice.reducer;
