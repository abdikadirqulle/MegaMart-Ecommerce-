import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import CartReducer from './features/cart/CartSlice';
// import catagoriesSlice  from './features/categories/CatagoriesSlice';

export const store = configureStore({
  reducer: {
    counter : counterReducer,
    cart : CartReducer
    // catagories : catagoriesSlice
  },
});






// import { SET_AUTHED_USER } from '../actions/authedUser'

// export default function authedUser (state = null, action) {
//   switch (action.type) {
//     case SET_AUTHED_USER :
//       return action.id
//     default :
//       return state
//   }
// }