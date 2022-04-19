import { configureStore } from "@reduxjs/toolkit";

import market from "./reducers";

const store = configureStore({
  reducer: {
    market: market.reducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
