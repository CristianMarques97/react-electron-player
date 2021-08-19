import axios, { AxiosInstance } from "axios";

const apiService: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_ASSETS_URL || ''
});

export default apiService;