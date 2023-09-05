import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import CartReducer from './features/cart/CartSlice';
import CategoryReducer from './features/categories/CategorySlice';
import essentialsReducer from './features/essential/essentialsSlice';
import productReducer from './features/products/productSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: CartReducer,
    category: CategoryReducer,
    essentials : essentialsReducer,
    products : productReducer
  },
});
