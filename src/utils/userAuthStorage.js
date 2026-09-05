const USER_TOKEN_KEY = "quickky_user_token";

export const setUserToken = (token) => {
  localStorage.setItem(USER_TOKEN_KEY, token);
};

export const getUserToken = () => {
  return localStorage.getItem(USER_TOKEN_KEY);
};

export const removeUserToken = () => {
  localStorage.removeItem(USER_TOKEN_KEY);
};

export const isUserAuthenticated = () => {
  return !!localStorage.getItem(USER_TOKEN_KEY);
};