import { configureStore } from "@reduxjs/toolkit";
import secessionSlice from "./slices/session.slice";

export const store = configureStore({
  reducer: {
    session: secessionSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
