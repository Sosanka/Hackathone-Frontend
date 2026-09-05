import axios from 'axios';

const API_URL = 'https://hackathone-backend-pgu1.vercel.app/api/v1';

const getAuthHeaders = () => {
  const token = localStorage.getItem('access_token');
  if (!token) throw new Error('No authentication token found. Please log in.');
  return { 'Authorization': `Bearer ${token}` };
};

export const productService = {
  createListing: async (formData) => {
    const response = await axios.post(`${API_URL}/seller/products`, formData, {
      headers: {
        ...getAuthHeaders(),
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  getSellerProducts: async () => {
    const response = await axios.get(`${API_URL}/seller/products`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  },

  // Update or adjust stock quantity (Backend handles calculation)
  adjustStock: async (productId, adjustmentType, value) => {
    const response = await axios.patch(`${API_URL}/seller/products/${productId}/stock`, {
      action: adjustmentType, // 'increase' or 'decrease'
      value: Number(value)
    }, {
      headers: getAuthHeaders(),
    });
    return response.data;
  },

  deleteProduct: async (productId) => {
    await axios.delete(`${API_URL}/seller/products/${productId}`, {
      headers: getAuthHeaders(),
    });
    return productId;
  }
};