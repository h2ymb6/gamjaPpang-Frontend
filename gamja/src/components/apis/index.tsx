import axios from "axios";

const BaseURL: string = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: BaseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
