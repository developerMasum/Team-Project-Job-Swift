import { configureStore } from "@reduxjs/toolkit";
import DataSlice from "./DataSlice";



 const store = configureStore({
    reducer: {
        counter: DataSlice,
    }
 })
 export default store;