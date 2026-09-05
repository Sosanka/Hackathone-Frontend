import apiClient from '../api/axios';

export const productService = {
  /**
   * Create a new product listing
   * @param {FormData} formData - The multipart/form-data payload
   */
  createListing: async (formData) => {
    try {
      // The backend expects multipart/form-data because of the UploadFile
      const response = await apiClient.post('/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      // Throw the error so the UI can catch and display it
      throw error.response?.data?.detail || 'Failed to create product listing';
    }
  },
};