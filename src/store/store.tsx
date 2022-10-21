import { configureStore } from "@reduxjs/toolkit";
import { moviesAPI } from "src/services/movieAPI.service";
import { authSlice } from "./slices/auth/auth.slice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [moviesAPI.reducerPath]: moviesAPI.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(moviesAPI.middleware);
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;