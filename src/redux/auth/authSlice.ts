import { createSlice } from "@reduxjs/toolkit";
import { login, registration, sendSmsCode } from "./actions";

export interface User {
  login: string;
  password: string;
};

interface AuthState {
  users: { [key: string]: User };
  status: 'idle' | 'loading' | 'success' | 'failed';
  error: string | null;
  loading: boolean;
};

const initialState: AuthState = {
  users: {},
  status: 'idle',
  error: null,
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendSmsCode.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = 'loading';
      })
      .addCase(sendSmsCode.fulfilled, (state, action) => {
        const login = action.meta.arg; // Извлекаем phoneNumber из meta.arg
        const user = { login, password: '' };
        state.users = { ...state.users, user };
        state.status = 'success';
      })
      .addCase(sendSmsCode.rejected, (state, action) => {
        state.loading = false;
        state.status = 'failed';
        state.error = action.error.message || 'Failed to send SMS code';
      })
      ////////////////////////////////////////////
      .addCase(registration.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = 'loading';
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.loading = false;
        state.status = 'success';
        state.users = Object.assign(state.users, action.payload);
      })
      .addCase(registration.rejected, (state, action) => {
        state.loading = false;
        state.status = 'failed';
        state.error = action.error.message || 'Произошла ошибка при отправке кода';
      })
      ////////////////////////////////////////////////////
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.status = 'success';
        state.users = Object.assign(state.users, action.payload);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.status = 'failed';
        state.error = action.error.message || 'Произошла ошибка при отправке кода';
      })
  }
})
export default authSlice.reducer