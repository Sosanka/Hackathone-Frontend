import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RequireSeller({ children }) {
  const { seller, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="sa-shell">
        <p style={{ color: "var(--ink-soft)" }}>Checking your session…</p>
      </div>
    );
  }

  if (!seller) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
