import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const productControl = state.items.find(item => item.id === action.payload.id);
      if (productControl) {
        productControl.quantity += action.payload.quantity;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProductFromCart: (state, action) => {
      const productControl = state.items.find(item => item.id === action.payload.id);
      if (productControl) {
        if (productControl.quantity > 1) {
          productControl.quantity -= 1;
        } else {
          state.items = state.items.filter(item => item.id !== action.payload.id);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const { addProductToCart, removeProductFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
