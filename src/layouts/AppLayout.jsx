import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppLayout = ({ children, activeTab }) => {
  const navigate = useNavigate();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    const onboardingDone = localStorage.getItem('onboarding_completed');

    if (!token) {
      navigate('/login');
    } else if (!onboardingDone) {
      navigate('/onboarding');
    } else {
      setAuthorized(true);
    }
  }, [navigate]);

  if (!authorized) return null;

  return (
    <div className="flex h-screen overflow-hidden font-sans bg-slate-50">
      <Sidebar activeTab={activeTab} />
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative w-full">
        <main className="flex-1 overflow-y-auto flex flex-col">
          <Header />
          <div className="flex-1 p-6 lg:p-10">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;