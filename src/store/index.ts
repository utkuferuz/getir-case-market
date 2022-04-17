import { configureStore } from "@reduxjs/toolkit";

import products from "./reducers";

const store = configureStore({
  reducer: {
    products: products.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
