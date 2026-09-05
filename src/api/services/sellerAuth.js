  import api from "../axios";

  // Register Seller
  export const registerSeller = async (data) => {
    const response = await api.post(
      "/seller/auth/register",
      data
    );

    return response.data;
  };

  // Verify OTP
  export const verifySellerOtp = async (data) => {
    const response = await api.post(
      "/seller/auth/verify-otp",
      data
    );

    return response.data;
  };

  // Resend OTP
  export const resendSellerOtp = async (email) => {
    const response = await api.post(
      "/seller/auth/resend-otp",
      {
        email,
      }
    );

    return response.data;
  };

  // Login Seller
  export const loginSeller = async (data) => {
    const response = await api.post(
      "/seller/auth/login",
      data
    );

    return response.data;
  };

  // Current Seller
  export const getCurrentSeller = async () => {
    const response = await api.get(
      "/seller/auth/me"
    );

    return response.data;
  };

  // Logout Seller
  export const logoutSeller = async () => {
    await api.post(
      "/seller/auth/logout"
    );
  };