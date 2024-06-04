import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import authReducer from "./auth.store";

export const store = configureStore({
    reducer:{
        "count": counterReducer,
        "auth": authReducer
    }
})
