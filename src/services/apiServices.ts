import axios from 'axios';
import { API_URL } from '../utils/constant';

const instance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.response.use(
  (response) => {
    if (response.data) {
      const token = response.data.jwt_token;
      localStorage.setItem('token', token);
    }

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;