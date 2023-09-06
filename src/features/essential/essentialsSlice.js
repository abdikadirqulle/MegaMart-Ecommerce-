import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast';


const initialState = {
  key: "essentials",
  product: localStorage.getItem("essential")
    ? JSON.parse(localStorage.getItem("essential"))
    : [],
};


const essentialSlice = createSlice({
  name: "essential",
  initialState,
  reducers: {
    incEssential: state => {    
      state.value += 1
    },
    decEssential: state => {
      state.value -= 1;
    },
    setEssentialData : (state,action) => {
      state.product = action.payload
      localStorage.setItem("essential", JSON.stringify(state.product));
    }
  }
});
export default essentialSlice.reducer

export const { incEssential,setEssentialData , decEssential } = essentialSlice.actions
