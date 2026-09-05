const USER_TOKEN_KEY = "quickky_user_token";
const USER_REMEMBER_ME_KEY = "quickky_user_remember_me";

// ==========================================
// SET TOKEN
// ==========================================

export const setUserToken = (token, rememberMe = false) => {
  if (rememberMe) {
    // Store in localStorage (persists after browser closes)
    localStorage.setItem(USER_TOKEN_KEY, token);
    localStorage.setItem(USER_REMEMBER_ME_KEY, "true");
  } else {
    // Store in sessionStorage (cleared when browser/tab closes)
    sessionStorage.setItem(USER_TOKEN_KEY, token);
    // Remove remember me flag if exists
    localStorage.removeItem(USER_REMEMBER_ME_KEY);
  }
};

// ==========================================
// GET TOKEN
// ==========================================

export const getUserToken = () => {
  // Check sessionStorage first, then localStorage
  const token = sessionStorage.getItem(USER_TOKEN_KEY) || 
                localStorage.getItem(USER_TOKEN_KEY);
  return token;
};

// ==========================================
// REMOVE TOKEN
// ==========================================

export const removeUserToken = () => {
  sessionStorage.removeItem(USER_TOKEN_KEY);
  localStorage.removeItem(USER_TOKEN_KEY);
  localStorage.removeItem(USER_REMEMBER_ME_KEY);
};

// ==========================================
// CHECK AUTHENTICATION
// ==========================================

export const isUserAuthenticated = () => {
  return !!getUserToken();
};

// ==========================================
// CHECK REMEMBER ME
// ==========================================

export const isRememberMe = () => {
  return localStorage.getItem(USER_REMEMBER_ME_KEY) === "true";
};

// ==========================================
// GET STORAGE TYPE (for debugging)
// ==========================================

export const getTokenStorageType = () => {
  if (sessionStorage.getItem(USER_TOKEN_KEY)) {
    return "session";
  }
  if (localStorage.getItem(USER_TOKEN_KEY)) {
    return "local";
  }
  return null;
};

// ==========================================
// CLEAR ALL AUTH DATA
// ==========================================

export const clearAllAuthData = () => {
  removeUserToken();
  // Clear any other auth-related data
  localStorage.removeItem("quickky_user_data");
  sessionStorage.removeItem("quickky_user_data");
};