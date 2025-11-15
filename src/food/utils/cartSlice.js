import { createSlice } from "@reduxjs/toolkit";

// install redux toolkit and react-redux
// we have one big redux store-> app store
// which containes of multiple slice(one of them is cart slice)
// to add the store to app you have to add through provider
// to update slice you have to dispatch and action followed by reducer function call
// and to read slice you have to subscribe to specific part of store using selector
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
      //   state.items.length = 0;
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
