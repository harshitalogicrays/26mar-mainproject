import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import brandSlice from "./brandSlice";
import modelSlice from "./modelSlice";
import carSlice from "./carSlice";
import filterSlice from "./filterSlice";

const store = configureStore({
    reducer:{
        auth:authSlice,brand:brandSlice,
        model:modelSlice,car:carSlice,
        filter:filterSlice,
    }
})
export default store 