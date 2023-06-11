import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    category: [],
  },
  reducers: {
    saveCategories: (state, action) => {
      console.log(state, action);
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (action.payload) {
        state.category = [];
        state.category.push(...action.payload);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
