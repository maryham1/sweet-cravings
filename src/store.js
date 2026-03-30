import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/Users/usersSlice";
import cartReducer from "./features/cart/CartSlice";

//////////////////////////////////////////////////////
// 🔥 LOAD CART FROM LOCAL STORAGE
//////////////////////////////////////////////////////
const loadCart = () => {
  try {
    const data = localStorage.getItem("cart");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

//////////////////////////////////////////////////////
// 🔥 SAVE CART TO LOCAL STORAGE
//////////////////////////////////////////////////////
const saveCart = (cart) => {
  try {
    localStorage.setItem("cart", JSON.stringify(cart));
  } catch (err) {
    console.error("Error saving cart:", err);
  }
};

//////////////////////////////////////////////////////
// 🔥 CREATE STORE (WITH PRELOADED CART)
//////////////////////////////////////////////////////
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },

  preloadedState: {
    cart: {
      cart: loadCart(), // 🔥 restore saved cart
    },
  },
});

//////////////////////////////////////////////////////
// 🔥 AUTO SAVE ON EVERY CHANGE
//////////////////////////////////////////////////////
store.subscribe(() => {
  const state = store.getState();
  saveCart(state.cart.cart);
});

export default store;
