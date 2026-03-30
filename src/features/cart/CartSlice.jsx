import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cart: [],
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter(
        (item) => item.dessertId !== action.payload,
      );
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.dessertId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.price;
    },
    decreasseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.dessertId === action.payload);
      item.quantity--;
      if (item.quantity === 0) {
        // 🔥 remove item completely
        state.cart = state.cart.filter(
          (item) => item.dessertId !== action.payload,
        );
      } else {
        item.totalPrice = item.quantity * item.price;
      }
    },
    clearCart(state) {
      state.cart = [];
      localStorage.removeItem("cart"); // 🔥 prevents old cart from coming back
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreasseItemQuantity,
  clearCart,
} = CartSlice.actions;
export default CartSlice.reducer;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.dessertId === id)?.quantity ?? 0;
