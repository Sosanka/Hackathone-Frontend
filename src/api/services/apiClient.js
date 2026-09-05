import axios from "axios";

const API_BASE_URL =
  import.meta.env?.VITE_API_BASE_URL || "https://hackathone-backend-pgu1.vercel.app/api/v1";

export const TOKEN_STORAGE_KEY = "seller_access_token";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem(TOKEN_STORAGE_KEY);
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    const detail = error?.response?.data?.detail;
    let normalized = {
      code: "UNKNOWN_ERROR",
      message: "Something went wrong. Please try again.",
      field: undefined,
      attempts_remaining: undefined,
      status: error?.response?.status,
    };
    if (typeof detail === "string") {
      normalized.message = detail;
    } else if (detail && typeof detail === "object") {
      normalized = { ...normalized, ...detail };
    } else if (error.message) {
      normalized.message = error.message;
    }
    return Promise.reject(normalized);
  }
);

export default apiClient;