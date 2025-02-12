import axios from 'axios';

export const BASE_URL =
    process.env.NODE_ENV === 'production'
        ? 'https://oboard-backend.fly.dev'
        : 'http://localhost:3000';
export const BASE_ENDPOINT = '/api';
export const CONTENT_BASE_ENDPOINT = '/storage/v1';
export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
});
axios.defaults.withCredentials = true;
