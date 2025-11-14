import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cartName',
    initialState : {value:false},
    reducers:{
        addRemove: (state,action)=>{
            action.payload = !state.value;
        },
    }
})
export const {addRemove} = cartSlice.actions;
export default cartSlice.reducer;