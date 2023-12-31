import { configureStore } from "@reduxjs/toolkit";
// ROOT REDUCER

import categoriesSlice from "./Reducers/Categories.reducer";
import usersSlice from "./Reducers/User.reducer";
import offerSlice from "./Reducers/Offer.reducer";

export default configureStore({
  // ROOT REDUCER
  reducer: {
    categories: categoriesSlice,
    userDetails: usersSlice,
    offers: offerSlice,
  },
});
