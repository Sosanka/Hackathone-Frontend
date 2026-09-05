import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import {
  fetchCurrentSeller,
  getStoredToken,
  logoutSeller as logoutSellerRequest,
} from "../api/services/authService";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [seller, setSeller] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadSeller = useCallback(async () => {
    const token = getStoredToken();
    if (!token) {
      setSeller(null);
      setIsLoading(false);
      return;
    }
    try {
      const me = await fetchCurrentSeller();
      setSeller(me);
    } catch {
      setSeller(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadSeller();
  }, [loadSeller]);

  const logout = useCallback(async () => {
    await logoutSellerRequest();
    setSeller(null);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        seller,
        setSeller,
        isLoading,
        refreshSeller: loadSeller,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
