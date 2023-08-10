import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    key: "essentialState",
    default: null,
    value : 0
  },
  reducers : {
    setcounters : (state,action) => {
      state.default = action.payload
    },
    increment: state => {
     
      state.value += 1
     
    },
    decrement: state => {
      
      if(state.value == 1) {
        state.value += 0
      }else {
        state.value -= 1
      }
    },
  }

});
export default counterSlice.reducer

export const {setcounters, increment ,decrement} = counterSlice.actions