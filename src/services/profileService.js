import axios from 'axios';

const API_URL = 'https://hackathone-backend-pgu1.vercel.app/api/v1';

const getAuthHeaders = () => {
  const token = localStorage.getItem('access_token');
  if (!token) throw new Error('No authentication token found.');
  return { 'Authorization': `Bearer ${token}` };
};

export const profileService = {
  updateOnboarding: async (profileData) => {
    const response = await axios.put(`${API_URL}/seller/account/create`, profileData, {
      headers: getAuthHeaders(),
    });
    localStorage.setItem('onboarding_completed', 'true');
    return response.data;
  },

  checkOnboardingStatus: async () => {
    const response = await axios.get(`${API_URL}/seller/account/create`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  }
};