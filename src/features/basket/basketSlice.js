import { createSlice } from '@reduxjs/toolkit';

export const basketSlice = createSlice({
  name: 'basket',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.products.push(action.payload.product)
    },
    removeProduct: (state, action) => {
      //TODO: add logic to remove item
    },
  },
});

export const { addProduct, decrement } = basketSlice.actions;

export const selectNumberOfProducts = state => state.basket.products.length;

export default basketSlice.reducer;
