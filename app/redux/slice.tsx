import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/products";

export interface CartState {
  cart: Product[];
  products: Product[];
  isLoggedIn: boolean;
}

const initialState: CartState = {
  cart: [],
  products: [],
  isLoggedIn: false,
};

export const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    AddToCart: (state, action: PayloadAction<Product>) => {
      if (!state.isLoggedIn) {
        // Redirect to login page if not logged in
        // Note: We can't directly use router.push here, so we'll handle this in the component
        return;
      }
      const isExist = state.cart.find((item) => item.id === action.payload.id);

      if (!isExist) {
        state.cart.push({ ...action.payload, quantity: 1 });
      } else {
        state.cart = state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      if (!state.isLoggedIn) {
        // Redirect to login page if not logged in
        return;
      }
      const isExist = state.cart.find((item) => item.id === action.payload.id);

      if (isExist) {
        if (isExist.quantity === 1) {
          state.cart = state.cart.filter(
            (item) => item.id !== action.payload.id
          );
        } else {
          state.cart = state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity ? item.quantity - 1 : 1 }
              : item
          );
        }
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { AddToCart, removeFromCart, clearCart, setLoggedIn } =
  counterSlice.actions;
export default counterSlice.reducer;
