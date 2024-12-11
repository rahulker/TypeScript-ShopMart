import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlice";

const reducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

const store = configureStore({
  reducer: reducer,
});

export type rootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
export default store;
