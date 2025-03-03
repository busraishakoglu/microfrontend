import { createSlice } from "@reduxjs/toolkit";
import toastNotification from "utils/toastNotifications";

const initialState = {
  items: [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
  ],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);
      if (product) {
        product.inCart = true;
        toastNotification(`${product.name} has been added to cart!`, "success");
      }
    }
  },
});

export const { addToCart, removeFromCart } = productSlice.actions;
export default productSlice.reducer;
