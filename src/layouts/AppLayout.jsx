import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppLayout = ({ children, activeTab }) => {
  const navigate = useNavigate();
  const { seller, isLoading } = useAuth();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // Wait for auth to load
    if (isLoading) return;

    // Check if user is authenticated
    if (!seller) {
      navigate("/login");
      return;
    }

    // Check if onboarding is completed - adjust this condition based on your data structure
    // If seller has an onboarding_completed field, check it
    // Otherwise, assume onboarding is not needed or already done
    const onboardingCompleted =
      seller.onboarding_completed || seller.is_onboarded || true;

    if (!onboardingCompleted) {
      navigate("/onboarding");
      return;
    }

    setAuthorized(true);
  }, [navigate, seller, isLoading]);

  if (isLoading || !authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <div className="flex h-screen overflow-hidden font-sans bg-slate-50">
      <Sidebar activeTab={activeTab} />
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative w-full">
        <main className="flex-1 overflow-y-auto flex flex-col">
          <Header />
          <div className="flex-1 p-6 lg:p-10">
            <div className="max-w-7xl mx-auto">{children}</div>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
