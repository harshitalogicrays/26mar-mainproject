import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import brandSlice from "./brandSlice";
import modelSlice from "./modelSlice";
import carSlice from "./carSlice";

const store = configureStore({
    reducer:{
        auth:authSlice,brand:brandSlice,
        model:modelSlice,car:carSlice,
    }
})
export default store 