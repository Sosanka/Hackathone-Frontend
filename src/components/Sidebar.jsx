import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logoutSeller } from '../api/services/sellerAuth';

const Sidebar = ({ activeTab }) => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleLogout = async () => {
    try {
      await logoutSeller();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      localStorage.removeItem("access_token");
      navigate("/login");
    }
  };

  const navItems = [
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      path: '/dashboard',
      icon: (
        <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      )
    },
    { 
      id: 'listings', 
      label: 'My listings', 
      path: '/listings',
      icon: (
        <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    { 
      id: 'stocks', 
      label: 'Live stocks', 
      path: '/stocks',
      icon: (
        <svg className="w-6 h-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
  ];

  return (
    <div 
      className={`bg-green-900 border-r border-green-800 shadow-2xl h-screen flex-shrink-0 text-green-50 flex flex-col pt-8 pb-4 z-50 relative transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      {/* Updated Toggle Button */}
      <button 
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-9 bg-green-800 text-white rounded-full p-1 shadow-md hover:bg-green-700 transition-colors z-50 cursor-pointer border-2 border-green-900"
      >
        <svg 
          className={`w-4 h-4 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div className="flex items-center gap-3 px-5 mb-12 overflow-hidden whitespace-nowrap">
        <div className="w-10 h-10 bg-green-100 rounded-full flex-shrink-0 flex items-center justify-center">
          <span className="text-green-900 font-bold text-lg">S</span>
        </div>
        <span className={`text-xl font-semibold tracking-wide text-white transition-opacity duration-300 ${isCollapsed ? 'opacity-0 hidden' : 'opacity-100'}`}>
          Seller Portal
        </span>
      </div>

      <nav className="flex-1 flex flex-col gap-2 px-3 overflow-hidden">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => navigate(item.path)}
            title={isCollapsed ? item.label : ''} 
            className={`cursor-pointer flex items-center gap-3 px-3 py-3 rounded-xl text-md transition-all duration-200 overflow-hidden whitespace-nowrap ${
              activeTab === item.id 
                ? 'bg-green-950 text-[#16A34A] font-semibold shadow-inner border-l-4 border-[#16A34A]' 
                : 'hover:bg-green-800 text-green-100 font-medium border-l-4 border-transparent'
            }`}
          >
            {item.icon}
            <span className={`transition-opacity duration-300 ${isCollapsed ? 'opacity-0 w-0 hidden' : 'opacity-100 w-auto'}`}>
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      <div className="px-3 mt-auto overflow-hidden">
        <button 
          title={isCollapsed ? "Logout" : ""}
          onClick={handleLogout}
          className="cursor-pointer flex items-center gap-3 w-full text-left px-3 py-3 text-md font-medium text-green-200 hover:text-white hover:bg-green-800 rounded-xl transition-colors whitespace-nowrap"
        >
          <svg className="w-6 h-6 flex-shrink-0 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span className={`transition-opacity duration-300 ${isCollapsed ? 'opacity-0 w-0 hidden' : 'opacity-100 w-auto'}`}>
            Logout
          </span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;