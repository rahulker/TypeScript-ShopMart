import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import cartReducer from "./slices/cartSlice";
import storage from "redux-persist/lib/storage";
import userReducer from "./slices/userSlice";

const reducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});

const persistConfig = {
  key: "persits-store",
  storage,
};

const persitedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persitedReducer,
  devTools: window.__REDUX_DEVTOOLS_EXTENSION__ !== undefined,
});
export const persisedStore = persistStore(store);

export type rootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
export default store;
