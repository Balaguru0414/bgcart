import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const StatusCode = {
  LOADING: "loading",
  IDLE: "idle",
  ERROR: "error",
};
const initialState = {
  data: [],
  status: StatusCode.IDLE,
};
const productSLice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.status = StatusCode.LOADING;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.data = action.payload;
      state.status = StatusCode.IDLE;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.status = StatusCode.ERROR;
    });
    builder.addCase(sellProducts.fulfilled, (state, action) => {
      state.data.push(action.payload);
    });
  },
});

// export const { sellProduct } = productSLice.actions;
export default productSLice.reducer;

export const getProducts = createAsyncThunk("products/get", async () => {
  const res = await axios.get("http://localhost:4000/products/get");
  // console.log("*********DATA", res);
  const data = res.data.data;
  // console.log("*********DATA************", data);
  return data;
});

export const sellProducts = createAsyncThunk(
  "products/sell",
  async (product) => {
    const res = await axios.post("http://localhost:4000/products/add", {
      name: product.title,
      image: product.image,
      price: product.price,
    });
    return res.data;
  }
);
