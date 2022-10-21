import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { $apiPublic } from 'src/config/axios.config';
import { IAuthData } from 'src/interfaces/authData';
import { CONST } from 'src/interfaces/consts.interfaces';
import { IErrorAPI } from 'src/interfaces/errorAPI.interfaces';
import { IAuthResponse } from 'src/interfaces/user.interfaces';

export const signInAsync = createAsyncThunk(
  'auth/signIn',
  async (authData: IAuthData, thunkAPI)  => {
    const { email, password } = authData;
    try {
      const response = await $apiPublic.post<IAuthResponse>("/auth/signin", {
        email,
        password,
      });
      const user = response.data;

      localStorage.setItem(CONST.LOCAL_STORAGE_USER, JSON.stringify(user.accessToken));
      
      return user;
    } catch (error) {
      console.error(error);
      const err = error as AxiosError;
      if(err.code === "ERR_NETWORK") {
        return thunkAPI.rejectWithValue(err.message);
      }

      if (axios.isAxiosError(err)) {
        const errorData = err.response?.data as IErrorAPI;
        return thunkAPI.rejectWithValue(errorData.message);
      } 

      return thunkAPI.rejectWithValue("Smth went wrong, on login :(");
    }
  }
);