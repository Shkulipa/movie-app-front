import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "src/interfaces/user.interfaces";
import { signInAsync } from "src/store/actions/signin";
import { signUpAsync } from "src/store/actions/signup";
import { logoutAsync } from "src/store/actions/logout";
import { IAuthState } from "./authSlice.interfaces";

const initialState: IAuthState = {
  user: null,
  isLoading: false,
  error: "",
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser | null>) {
      state.user = action.payload; 
    },
    closeError(state) {
      state.error = ""; 
    }
  },
  extraReducers: (builder) => {
    builder
      /**
       * @info Sign in
       */
      .addCase(signInAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signInAsync.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.isLoading = false;
        state.error = '';
        state.user = action.payload;
      })
      .addCase(signInAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      /**
       * @info Sign Up
       */
      .addCase(signUpAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(signUpAsync.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.isLoading = false;
        state.error = '';
        state.user = action.payload;
      })
      .addCase(signUpAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })

      /**
       * @info logout
       */
      .addCase(logoutAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutAsync.fulfilled, (state) => {
        state.isLoading = false;
        state.error = '';
        state.user = null;
      })
      .addCase(logoutAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
})