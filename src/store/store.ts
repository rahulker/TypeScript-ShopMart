import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import cartReducer from "./slices/cartSlice";
import storage from "redux-persist/lib/storage";
import userReducer from "./slices/userSlice";

const reducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

const key = "user and cart detail";

const persistConfig = {
  key,
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});
export const persisedStore = persistStore(store);

export type rootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
export default store;
