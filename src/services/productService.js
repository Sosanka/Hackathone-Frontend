import axios from '../api/axios';

const API_URL = 'https://hackathone-backend-pgu1.vercel.app/api/v1';

const getAuthHeaders = () => {
  const token = localStorage.getItem('access_token');

  if (!token) {
    throw new Error(
      'No authentication token found. Please log in.'
    );
  }

  return {
    Authorization: `Bearer ${token}`,
  };
};

export const productService = {
  // ============================================================
  // CREATE PRODUCT
  // ============================================================

  createListing: async (formData) => {
    const response = await axios.post(
      `${API_URL}/seller/products`,
      formData,
      {
        headers: {
          ...getAuthHeaders(),
          'Content-Type': 'multipart/form-data',
        },
      }
    );

    return response.data;
  },

  // ============================================================
  // GET SELLER PRODUCTS
  // ============================================================

  getSellerProducts: async () => {
    const response = await axios.get(
      `${API_URL}/seller/products`,
      {
        headers: getAuthHeaders(),
      }
    );

    return response.data;
  },

  // ============================================================
  // INCREASE STOCK
  // ============================================================

  addStock: async (productId, quantity) => {
    const response = await axios.post(
      `${API_URL}/seller/products/${productId}/stock/add`,
      {
        quantity: String(quantity),
      },
      {
        headers: getAuthHeaders(),
      }
    );

    return response.data;
  },

  // ============================================================
  // DECREASE STOCK
  // ============================================================

  subtractStock: async (productId, quantity) => {
    const response = await axios.post(
      `${API_URL}/seller/products/${productId}/stock/subtract`,
      {
        quantity: String(quantity),
      },
      {
        headers: getAuthHeaders(),
      }
    );

    return response.data;
  },

  // ============================================================
  // DELETE PRODUCT
  // ============================================================

  deleteProduct: async (productId) => {
    await axios.delete(
      `${API_URL}/seller/products/${productId}`,
      {
        headers: getAuthHeaders(),
      }
    );

    return productId;
  },
};