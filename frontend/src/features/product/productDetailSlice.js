import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  productDetail: { reviews: [] },
  error: "",
};

export const getProductDetail = createAsyncThunk(
  "products/getProductDetail",
  async (id) => {
    const { data } = await axios.get(`/api/products/${id}`);
    return data;
  }
);

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProductDetail.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProductDetail.fulfilled, (state, action) => {
      state.loading = false;
      state.productDetail = action.payload;
      state.error = "";
    });
    builder.addCase(getProductDetail.rejected, (state, action) => {
      state.loading = false;
      state.productDetail = {};
      state.error = action.error.message;
    });
  },
});

export default productDetailSlice.reducer;

// TODO merge this slice into productslice
