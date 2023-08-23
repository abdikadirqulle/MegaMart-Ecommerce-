import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  key: "cartState",
  default: [],
  value: 0,
};
export const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers : {
        setCartValue :  (state, action) => {
            state.value += action.payload
        },
        setCart : (state,action) => {
            state.default = action.payload
        },
       
        decrement : state => {
            if(state.value == 1) {
                state.value += 0
              }else {
                state.value -= 1
              }
        },
        increment : state => {
            state.value += 1
        },
        setDeleteCart : (state, action) => {
           state.default = state.default.filter(cart => cart.id !== action.payload)

        }
    }
})


export default cartSlice.reducer

export const {setCartValue,setCart,decrement,setDeleteCart,increment} = cartSlice.actions