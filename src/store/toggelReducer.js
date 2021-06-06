import { createSlice } from "@reduxjs/toolkit";

const intialtoggelState = { showCart: true };

const toggelSlice = createSlice({
  name: "toggelSlice",
  initialState: intialtoggelState,
  reducers: {
    toggel(state) {
      console.log("Toggel Clicked");
      state.showCart = !state.showCart;
    },
  },
});

export const toggelAction = toggelSlice.actions;
export default toggelSlice.reducer;

// Here we write reducer as its a rule even if we wrote reducers in toggelSlice
// And as we ultimately need toggelSlice.reducer in the configStore we export it as toggelSlice.reducer
