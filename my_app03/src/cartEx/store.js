import { configureStore } from "@reduxjs/toolkit";

import Cartadd from './cartSlice';

export const store = configureStore({
    reducer:{
        cartName: Cartadd,

    }

})