import axios from "axios";

const BASE_URL = import.meta.env.MODE === "production" ? "/api" : "http://localhost:5001/api";
const api = axios.create({
    baseURL: BASE_URL,
});

export default api;