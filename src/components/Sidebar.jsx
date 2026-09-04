import React from 'react';

const Sidebar = ({ activeTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'listings', label: 'My listings' },
    { id: 'stocks', label: 'Live stocks' },
  ];

  return (
    <div className="w-64 bg-emerald-900 min-h-screen text-emerald-50 flex flex-col pt-8 pb-4 shadow-xl z-10">
      <div className="flex items-center gap-3 px-6 mb-12">
        <div className="w-10 h-10 bg-emerald-100 rounded-full flex-shrink-0 flex items-center justify-center">
          <span className="text-emerald-900 font-bold text-lg">S</span>
        </div>
        <span className="text-xl font-semibold tracking-wide text-white">Seller Portal</span>
      </div>

      <nav className="flex-1 flex flex-col gap-2 px-4">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`text-left px-6 py-3 rounded-xl text-md transition-all duration-200 ${
              activeTab === item.id 
                ? 'bg-emerald-950 text-emerald-400 font-semibold shadow-inner border-l-4 border-emerald-400' 
                : 'hover:bg-emerald-800 text-emerald-100 font-medium border-l-4 border-transparent'
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="px-4 mt-auto">
        <button className="w-full text-left px-6 py-3 text-md font-medium text-emerald-200 hover:text-white hover:bg-emerald-800 rounded-xl transition-colors">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;