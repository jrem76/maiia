import { configureStore } from '@reduxjs/toolkit';
import basketReducer from '../features/basket/basketSlice';
import productsReducer from '../features/products/productsSlice';

export default configureStore({
  reducer: {
    basket: basketReducer,
    products: productsReducer,
  },
});
