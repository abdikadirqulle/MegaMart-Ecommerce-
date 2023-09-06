import { createSlice } from '@reduxjs/toolkit'

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    key : 'category',
    value: 0,
    product :  localStorage.getItem("category")
    ? JSON.parse(localStorage.getItem("category"))
    : []
  },
  reducers: {
    incremented: state => {    
      state.value += 1
    },
    decremented: state => {
      state.value -= 1;
    },
    setCategoryData : (state,action) => {
      state.product = action.payload
      localStorage.setItem("category", JSON.stringify(state.product));
    }
  }
})
export default categorySlice.reducer

export const { incremented, decremented, setCategoryData } = categorySlice.actions
