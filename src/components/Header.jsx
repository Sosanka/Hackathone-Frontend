import React from 'react';

const Header = () => {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4 flex justify-between items-center z-10 shrink-0 shadow-sm">
      <div className="flex items-center gap-4">
        <object data="/logo.png" type="image/png" className="h-10 w-auto">
          <svg className="h-10 w-10 text-emerald-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.43 4 16.05 4 12C4 7.95 7.05 4.57 11 4.07V19.93ZM13 4.07C16.95 4.57 20 7.95 20 12C20 16.05 16.95 19.43 13 19.93V4.07Z" opacity="0.3"/>
            <path d="M12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z"/>
          </svg>
        </object>
        
        <div>
          <h1 className="text-2xl font-extrabold text-emerald-900 tracking-tight leading-none">
            Agrichoice
          </h1>
          <p className="text-[11px] font-bold text-amber-600 uppercase tracking-widest mt-1">
            Harvesting Value from Every Yield
          </p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button className="relative p-2 text-slate-400 hover:text-emerald-600 transition-colors">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white"></span>
        </button>
        
        <div className="h-8 w-px bg-slate-200"></div>

        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden md:block">
            <p className="text-sm font-bold text-slate-700 leading-none">Seller Account</p>
            <p className="text-xs text-slate-500 mt-1">ID: SL-8492</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 font-bold border-2 border-emerald-200 group-hover:border-emerald-500 transition-colors">
            S
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;