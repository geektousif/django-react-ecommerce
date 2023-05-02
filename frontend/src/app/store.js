import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/product/productSlice";
import productDetailReducer from "../features/product/productDetailSlice";
import CartReducer from "../features/cart/cartSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    productDetail: productDetailReducer,
    cart: CartReducer,
  },
});

export default store;
