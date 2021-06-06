import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      //increasing totalquantity when itme added
      state.totalQuantity++;

      //adding item for first time
      if (!existingItem) {
        //we generally dont use push cuz it mutates the original data,in redux it makes it immutable in bacground so we can here
        state.items.push({
          name: newItem.title,
          id: newItem.id,
          price: newItem.price,
          totalPrice: newItem.price,
          quantity: 1,
        });

        //adding item again
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      const id = action.payload;

      //finding the item in items
      const existingItem = state.items.find((item) => item.id === id);

      //removing totalqunatity by 1
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        //removing item with id in items
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cardActions = cartSlice.actions;
export default cartSlice.reducer;
