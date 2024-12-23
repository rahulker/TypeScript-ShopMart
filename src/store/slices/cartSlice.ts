import { createSlice } from "@reduxjs/toolkit";
import { cartSlice } from "../../utils/interfaces/slice";
import { cartData, productData } from "../../utils/interfaces/cart";

const initialState: cartSlice = {
  totalItem: 0,
  item: [],
  buyNow: {},
};

export const cart = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    handleAddItem: (state, action) => {
      const newCart = [...state.item];
      const existingItem = newCart.findIndex(
        (item: productData) => item.id === action.payload.id
      );
      const existingCartItem: productData = newCart[existingItem];
      if (existingCartItem) {
        const updatedItem: cartData = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };
        newCart[existingItem] = updatedItem;
      } else {
        newCart.push({ ...action.payload, quantity: 1 });
      }
      state.item = newCart;
      state.totalItem = newCart.reduce(
        (total: number, item: productData) => total + item.quantity,
        0
      );
    },
    handleRmvItem: (state, action) => {
      const newCart = [...state.item];
      const itemIndex = newCart.findIndex(
        (item: productData) => item.id === action.payload.id
      );
      const updatedItem: productData = {
        ...newCart[itemIndex],
      };
      updatedItem.quantity -= 1;
      if (updatedItem.quantity <= 0) {
        newCart.splice(itemIndex, 1);
      } else {
        newCart[itemIndex] = updatedItem;
      }
      state.item = newCart;
      state.totalItem = newCart.reduce(
        (total: number, item: productData) => total + item.quantity,
        0
      );
    },
    handleCartBuyNow: (state, action) => {
      state.buyNow = {
        ...action.payload,
      };
    },
    handleBuyNowCart: (state) => {
      state.buyNow = state.item;
    },
  },
});

export const { handleAddItem, handleRmvItem } = cart.actions;
const cartReducer = cart.reducer;
export default cartReducer;
