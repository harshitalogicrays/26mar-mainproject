import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import brandSlice from "./brandSlice";
import modelSlice from "./modelSlice";

const store = configureStore({
    reducer:{
        auth:authSlice,brand:brandSlice,
        model:modelSlice,
    }
})
export default store 