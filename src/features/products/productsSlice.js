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
    updateProducts: (state, action) => {
      state.products = [
        ...action.payload.products,
      ]
    },
    setCount: (state, action) => {
      state.count = action.payload.count
    }
  },
});

export const { addProducts, updateProducts, setCount } = productsSlice.actions;

export const getCount = filterTitle => async (dispatch) => {
  await fetch(`https://jsonplaceholder.typicode.com/photos?${filterTitle ? `q=${filterTitle}` : ""}`)
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
