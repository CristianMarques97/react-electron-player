import axios, { AxiosInstance } from "axios";

const apiService: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_MUSIC_REPO_URL
});

export default apiService;