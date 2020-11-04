import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload.product)
    },
    removeProduct: (state, action) => {
      state.products = [
        ...state.products.slice(0, action.payload.id),
        ...state.products.slice(action.payload.id + 1),
      ]
    },
  },
});

export const { addProduct, removeProduct } = basketSlice.actions;

export const selectNumberOfProducts = state => state.basket.products.length
export const getProductsInBasket = state => state.basket.products

export default basketSlice.reducer;
