import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppLayout = ({ children, activeTab }) => {
  return (
    <div className="flex h-screen overflow-hidden font-sans bg-slate-50">
      <Sidebar activeTab={activeTab} />

      <div className="flex-1 flex flex-col h-screen overflow-hidden relative w-full">
        <Header />
        
        <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
        
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;