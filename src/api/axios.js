import axios from 'axios';

// Create a centralized Axios instance
const apiClient = axios.create({
  // Based on your backend docs link and route comments
  baseURL: 'https://hackathone-backend-pgu1.vercel.app/api/v1/seller', 
});

// Request Interceptor: Attach Auth Token automatically
apiClient.interceptors.request.use(
  (config) => {
    // Assuming you store the JWT token in localStorage upon login
    const token = localStorage.getItem('seller_access_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;