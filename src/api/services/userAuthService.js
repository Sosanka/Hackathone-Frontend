import api from "../axios";

// Register User
export const registerUser = async (data) => {
  const response = await api.post(
    "/buyer/auth/register",
    data
  );

  return response.data;
};

// Verify OTP
export const verifyUserOtp = async (data) => {
  const response = await api.post(
    "/buyer/auth/verify-otp",
    data
  );

  return response.data;
};

// Resend OTP
export const resendUserOtp = async (email) => {
  const response = await api.post(
    "/buyer/auth/resend-otp",
    {
      email,
    }
  );

  return response.data;
};

// Login User
export const loginUser = async (data) => {
  const response = await api.post(
    "/buyer/auth/login",
    data
  );

  return response.data;
};

// Current User
export const getCurrentUser = async () => {
  const response = await api.get(
    "/buyer/auth/me"
  );

  return response.data;
};

// Logout User
export const logoutUser = async () => {
  await api.post(
    "/buyer/auth/logout"
  );
};