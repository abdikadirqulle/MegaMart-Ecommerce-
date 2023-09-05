import { createSlice } from '@reduxjs/toolkit'



const  initialState= {
  key: "essentialState",
  default: localStorage.getItem("phonesCart")
  ? JSON.parse(localStorage.getItem("phonesCart"))
  : [],
  open: false,
  value : 1
  // mobiles.map((value)=> (value.value)) 
}
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    setcounters: (state, action) => {
      state.default = action.payload;
      localStorage.setItem("phonesCart", JSON.stringify(state.default));
    },
    setOpen: (state, action) => {
      state.open = true;
    },
    setClose: (state, action) => {
      state.open = false;
    },
    setValues: (state, action) => {
      state.value = value;
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      if (state.value == 1) {
        state.value += 0;
      } else {
        state.value -= 1;
      }
    },
  },
});
export default counterSlice.reducer

export const { setcounters, setValues, setOpen,setClose, increment, decrement } =  counterSlice.actions;