import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast';


const initialState = {
  key: "product",
  product: localStorage.getItem("AllProduct")
    ? JSON.parse(localStorage.getItem("AllProduct"))
    : [],
  value: 2,
  cartTotalQuantity: 0,

  cartTotalAmount: 0,
};


const essentialSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    incremented: (state, action) => {
      const itemIdex = state.product.findIndex(
        (item) => item.id === action.payload.id
      );
      state.product[itemIdex].cartQuantity += 1;
      // state.product[itemIdex].cartPrice = action.payload.newPrice * state.product[itemIdex].cartQuantity
      state.product[itemIdex].cartPrice = state.product[itemIdex].newPrice * state.product[itemIdex].cartQuantity
    },
    decremented: (state, action) => {
      const itemIdex = state.product.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.product[itemIdex].cartQuantity == 1) {
        state.product[itemIdex].cartQuantity += 0;
      } else {
        state.product[itemIdex].cartQuantity -= 1;
        state.product[itemIdex].cartPrice = state.product[itemIdex].cartPrice - state.product[itemIdex].newPrice //* state.product[itemIdex].cartQuantity
      }
    },
    setproductData: (state, action) => {
      const itemIdex = state.product.findIndex(
        (item) => item.id === action.payload.id
      );
      // console.log(state.product)
      if(itemIdex >= 0) {
        state.product[itemIdex].cartQuantity += 1;
        state.product[itemIdex].cartPrice = state.product[itemIdex].newPrice * state.product[itemIdex].cartQuantity
        toast.success("Increased product quantity");
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1,cartPrice : action.payload.newPrice};
        state.product.push(tempProduct);
        toast.success("Product added from cart");
      }
      localStorage.setItem("AllProduct", JSON.stringify(state.product));

      // state.product.push(action.payload)
    },
    setRemoveEssentialCart: (state, action) => {
      const nextProduct = state.product.filter(
        (item) => item.id !== action.payload.id
      );
      state.product = nextProduct;

      localStorage.setItem("AllProduct", JSON.stringify(state.product));

      toast.error("Product removed from cart");
    },
  },
});
export default essentialSlice.reducer

export const { incremented, decremented,setproductData ,setRemoveEssentialCart } = essentialSlice.actions
