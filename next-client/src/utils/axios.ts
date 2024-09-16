import axios from 'axios';
import { getAuthCookie } from './actions';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  async (config) => {
    const token = await getAuthCookie();
    console.log("IS TOKEN HERE?", token);
    if (token) {
        console.log("TOKEN HERE?", token);
      config.headers.Authorization = 'Bearer ' + token;
      console.log("CONFIG HEADERS", config.headers);
    }
    return config;
  },
  (error) => {
    console.log("ERROR", error);
    return Promise.reject(error);
  }
);

export default instance;