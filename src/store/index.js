import { configureStore } from "@reduxjs/toolkit";
import toggelReducer from "./toggelReducer";
import cartReducer from "./Cart-slice";

const store = configureStore({
  reducer: { toggelSlice: toggelReducer, cartSlice: cartReducer },
});

export default store;
