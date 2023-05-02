import { createSlice, getDefaultMiddleware } from "@reduxjs/toolkit";

const items = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const initialState = {
  cartItems: items,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (x) => x.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += action.payload.cartQuantity;
      } else {
        state.cartItems.push(action.payload);
      }
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems.map((item) => item))
      );
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x.id !== action.payload);
      console.log(action.payload);
      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems.map((item) => item))
      );
    },
  },
});

export default cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;
