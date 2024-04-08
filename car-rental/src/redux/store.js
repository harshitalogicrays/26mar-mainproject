import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import brandSlice from "./brandSlice";

const store = configureStore({
    reducer:{
        auth:authSlice,brand:brandSlice,
    }
})
export default store 