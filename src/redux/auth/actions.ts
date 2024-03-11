import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../services/apiServices';
import { API_URL } from "../../utils/constant";

export const sendSmsCode = createAsyncThunk(
  'auth/sendSmsCode',
  async (login: string) => {
    const response = await axios.post(API_URL + `send_sms_code?login=${login}`)
    .then((response) => {
      console.log('sendSmsCode', response);
      return response.data;
    })
    .catch((error) => {
      console.log('Error', error);
    })
    return response;
  },
);

export const registration = createAsyncThunk(
  'auth/registration',
  async (data: {login: string, password: string, sms_code: string}) => {
    const { login, password, sms_code } = data;
    const response = await axios.post(API_URL + `register?login=${login}&password=${password}&sms_code=${sms_code}`)
    .then((response) => {
      console.log('registration', response);
      return response.data;
    })
    .catch((error) => {
      console.log('Error', error);
    })
    return response;
  },
);

export const login = createAsyncThunk(
  'auth/login',
  async (data: {login: string, password: string}) => {
    const { login, password } = data;
    const response = await axios.post(API_URL + `login?login=${login}&password=${password}`)
    .then((response) => {
      console.log('login', response.data);
      return response.data;
    })
    .catch((error) => {
      console.log('Error', error);
    })
    return response;
  },
);