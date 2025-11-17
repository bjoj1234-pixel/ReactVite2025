import { configureStore } from "@reduxjs/toolkit";

import cartLogic from './cartSlice';

export const store = configureStore({
    reducer:{
        cartName: cartLogic,

    }

})