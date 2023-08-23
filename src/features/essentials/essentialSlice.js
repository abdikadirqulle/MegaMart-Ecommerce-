import { createSlice } from "@reduxjs/toolkit";

export const essentialSlice = createSlice[{
    name: "essential",
    initialState : {
        key:"initialState",
        default: null,
    },
    reducer : {
        setEssential : (state, action) => {
            state.default = action.payload;
        }
    }
}];

export default essentialSlice.reducer;

export const { setEssential } = essentialSlice.actions;