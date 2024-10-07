// import { createSlice, current } from "@reduxjs/toolkit";
// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
//   price: string;
//   quantity: number;
//   pizzaName: string;
//   pizzaDescription: string;
//   pizzaPrice: number;
// }
// export interface CartState {
//   cart: Product[];
//   products: Product[];
// }

// const initialState: CartState = {
//   cart: [],
//   products: [],
// };

// export const counterSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     AddToCart: (state, action) => {
//       const currentState = current(state);
//       const isExist = currentState.cart.find((item) => {
//         return item.id === action.payload;
//       });
//       if (!isExist) {
//         state.cart = [...state.cart,action.payload];
//       } else {
//         const updated = currentState?.cart.map((item) => {
//           if (item?.id === action.payload?.id) {
//             return { ...item, quantity: item.quantity + 1 };
//           }
//           return item;
//         });
//         state.cart=updated
//       }
//     },
//     removeFromCart: (state, action) => {
//       const currentState = current(state);
//       const isExist = currentState.cart.find((item) => {
//         return item.id === action.payload.id;
//       });
//       if (isExist?.quantity===1) {
//          state.cart = state.cart.filter((item) => {
//         return item.id !== action.payload.id;
//       });
//       } else {
//         const updated = currentState?.cart?.map((item) => {
//           if (item?.id === action.payload.id) {
//             return { ...item, quantity: item.quantity - 1 };
//           }
//           return item;
//         });
//         state.cart = updated;
//       }
//     },
   
//   },
// });

// export const { AddToCart,removeFromCart } = counterSlice.actions;

// export default counterSlice.reducer;


import { createSlice, current } from "@reduxjs/toolkit";

interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  quantity: number;
  pizzaName: string;
  pizzaDescription: string;
  pizzaPrice: number;
}

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
      const currentState = current(state);
      const isExist = currentState.cart.find((item) => {
        return item.id === action.payload.id; // Use the correct id comparison
      });
      if (!isExist) {
        // Add a new item to the cart with quantity 1 if it doesn't exist
        state.cart = [...state.cart, { ...action.payload, quantity: 1 }];
      } else {
        // If the item exists, increment its quantity
        const updated = currentState.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        state.cart = updated;
      }
    },

    removeFromCart: (state, action) => {
      const currentState = current(state);
      const isExist = currentState.cart.find((item) => {
        return item.id === action.payload.id;
      });
      if (isExist?.quantity === 1) {
        // If the item quantity is 1, remove it from the cart
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      } else {
        // If the item exists and its quantity is greater than 1, decrement the quantity
        const updated = currentState.cart.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        state.cart = updated;
      }
    },
  },
});

export const { AddToCart, removeFromCart } = counterSlice.actions;

export default counterSlice.reducer;
