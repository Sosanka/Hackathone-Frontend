import React from 'react';

const StatCard = ({ title, count, countColor, bgAccent, isActive, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`p-6 flex-1 min-w-[200px] border-b-4 sm:border-b-0 sm:border-r border-slate-100 last:border-0 transition-all cursor-pointer ${
      isActive ? `${bgAccent} rounded-2xl shadow-sm transform scale-[1.02]` : 'bg-white rounded-xl hover:bg-slate-50'
    }`}>
      <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
        {title}
      </h3>
      <p className={`text-3xl font-extrabold ${countColor}`}>{count}</p>
    </div>
  );
};

export default StatCard;