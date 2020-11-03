import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    count: 0,
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
    setCount: (state, action) => {
      state.count = action.payload.count
    }
  },
});

export const { addProducts, removeProduct, setCount } = productsSlice.actions;

export const getCount = () => async (dispatch) => {
  await fetch(`https://jsonplaceholder.typicode.com/photos`)
    .then(res => {
      return res.json()
    })
    .then(
      (result) => {
        dispatch(setCount({ count: result.length }))
      },
      (error) => {
        console.error(error)
      }
    )
}

export const selectNumberOfProducts = state => state.products.products.length;
export const getProducts = state => state.products.products;
export const selectCount = state => state.products.count;

export default productsSlice.reducer;
