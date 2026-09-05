import apiClient, { TOKEN_STORAGE_KEY } from "./apiClient";

const BASE = "/seller/auth";

export async function registerSeller({ name, email, phone, password }) {
  const { data } = await apiClient.post(`${BASE}/register`, {
    name,
    email,
    phone,
    password,
  });
  return data;
}

export async function verifySellerOtp({ email, otp }) {
  const { data } = await apiClient.post(`${BASE}/verify-otp`, { email, otp });
  if (data?.access_token) {
    localStorage.setItem(TOKEN_STORAGE_KEY, data.access_token);
  }
  return data;
}

export async function resendSellerOtp({ email }) {
  const { data } = await apiClient.post(`${BASE}/resend-otp`, { email });
  return data;
}

export async function loginSeller({ email, password }) {
  const { data } = await apiClient.post(`${BASE}/login`, { email, password });
  if (data?.access_token) {
    localStorage.setItem(TOKEN_STORAGE_KEY, data.access_token);
  }
  return data;
}

export async function fetchCurrentSeller() {
  const { data } = await apiClient.get(`${BASE}/me`);
  return data;
}

export async function logoutSeller() {
  try {
    await apiClient.post(`${BASE}/logout`);
  } finally {
    localStorage.removeItem(TOKEN_STORAGE_KEY);
  }
}

export function getStoredToken() {
  return localStorage.getItem(TOKEN_STORAGE_KEY);
}

export function clearStoredToken() {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
}