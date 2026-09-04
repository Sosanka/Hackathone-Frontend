import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-4 px-6 shrink-0">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500">
        <p>&copy; {new Date().getFullYear()} Agrichoice. All rights reserved.</p>
        
        <div className="flex gap-6">
          <a href="#" className="hover:text-emerald-700 transition-colors">Help & Support</a>
          <a href="#" className="hover:text-emerald-700 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-emerald-700 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;