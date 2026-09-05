import axios from 'axios';

const API_URL = 'https://hackathone-backend-pgu1.vercel.app/api/v1';

// Helper to grab token and format headers
const getAuthHeaders = () => {
  const token = localStorage.getItem('access_token');
  if (!token) throw new Error('No authentication token found. Please log in.');
  return { 'Authorization': `Bearer ${token}` };
};

export const productService = {
  // POST /api/v1/seller/products
  createListing: async (formData) => {
    const response = await axios.post(`${API_URL}/seller/products`, formData, {
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  // GET /api/v1/seller/products
  getSellerProducts: async () => {
    const response = await axios.get(`${API_URL}/seller/products`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  }
};