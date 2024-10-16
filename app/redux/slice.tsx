import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../types/products";

export interface CartState {
  cart: Product[];
  products: Product[];
}

const initialState: CartState = {
  cart: [],
  products: [],
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action) => {
      const isExist = state.cart.find((item) => item.id === action.payload.id);
      
      if (!isExist) {
        // Item does not exist in the cart, add it with quantity 1
        state.cart.push({ ...action.payload, quantity: 1 });
      } else {
        // Item already exists, increment quantity
        state.cart = state.cart.map((item) => 
          item.id === action.payload.id 
            ? { ...item, quantity: (item.quantity || 1) + 1 } 
            : item
        );
      }
    },
    removeFromCart: (state, action) => {
      const isExist = state.cart.find((item) => item.id === action.payload.id);
      
      if (isExist) {
        if (isExist.quantity === 1) {
          // Remove item if quantity is 1
          state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        } else {
          // Decrease quantity
          state.cart = state.cart.map((item) =>
            item.id === action.payload.id 
              ? { ...item, quantity: item.quantity ? item.quantity - 1 : 1 }
              : item
          );
        }
      }
    },
    clearCart: (state) => {
      state.cart = []
    },
  },
});

export const { AddToCart, removeFromCart ,clearCart} = counterSlice.actions;
export default counterSlice.reducer;
