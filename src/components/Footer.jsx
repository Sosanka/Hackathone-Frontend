import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-800 text-white pt-16 pb-8 border-t border-green-700 shrink-0">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Column 1: Brand & Contact */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg className="h-8 w-8 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 19.93C7.05 19.43 4 16.05 4 12C4 7.95 7.05 4.57 11 4.07V19.93ZM13 4.07C16.95 4.57 20 7.95 20 12C20 16.05 16.95 19.43 13 19.93V4.07Z" opacity="0.8"/>
                <path d="M12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15Z"/>
              </svg>
              <h2 className="text-2xl font-extrabold text-white tracking-tight">Agrichoice</h2>
            </div>
            <p className="text-sm text-green-100 mb-6 leading-relaxed">
              Harvesting value from every yield. Connect with nearby buyers to clear surplus produce before it becomes unusable.
            </p>
            <div className="space-y-3 text-sm text-green-100">
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+91 93909 99614</span>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>support@agrichoice.app</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-green-400 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>
          </div>

          {/* Column 2: Buy */}
          <div>
            <h3 className="text-white font-bold mb-4">Buy</h3>
            <ul className="space-y-3 text-sm text-green-100">
              <li><a className="cursor-pointer hover:text-white hover:underline transition-all">Vegetables</a></li>
              <li><a className="cursor-pointer hover:text-white hover:underline transition-all">Fruits</a></li>
              <li><a className="cursor-pointer hover:text-white hover:underline transition-all">Grains & Cereals</a></li>
              <li><a className="cursor-pointer hover:text-white hover:underline transition-all">Dairy & Eggs</a></li>
              <li><a className="cursor-pointer hover:text-white hover:underline transition-all">Spices</a></li>
              <li><a className="cursor-pointer hover:text-white hover:underline transition-all">All Categories</a></li>
            </ul>
          </div>

          {/* Column 3: Sell */}
          <div>
            <h3 className="text-white font-bold mb-4">Sell</h3>
            <ul className="space-y-3 text-sm text-green-100">
              <li><a className="cursor-pointer hover:text-white hover:underline transition-all">Register as Farmer</a></li>
              <li><a className="cursor-pointer hover:text-white hover:underline transition-all">List Surplus Produce</a></li>
              <li><a className="cursor-pointer hover:text-white hover:underline transition-all">Grouped Pickup Plans</a></li>
              <li><a className="cursor-pointer hover:text-white hover:underline transition-all">How It Works</a></li>
              <li><a className="cursor-pointer hover:text-white hover:underline transition-all">Help & FAQs</a></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-green-100">
              <li><a className="cursor-pointer hover:text-white hover:underline transition-all">About Us</a></li>
              <li><a className="cursor-pointer hover:text-white hover:underline transition-all">Contact Us</a></li>
              <li><a className="cursor-pointer hover:text-white hover:underline transition-all">Privacy Policy</a></li>
              <li><a className="cursor-pointer hover:text-white hover:underline transition-all">Terms of Service</a></li>
            </ul>
          </div>

          {/* Column 5: Popular Areas */}
          <div>
            <h3 className="text-white font-bold mb-4">Popular Hubs</h3>
            <ul className="space-y-3 text-sm text-green-100">
              <li><a className="cursor-pointer hover:text-white hover:underline transition-all">Hyderabad</a></li>
              <li><a className="cursor-pointer hover:text-white hover:underline transition-all">Vijayawada</a></li>
              <li><a className="cursor-pointer hover:text-white hover:underline transition-all">Warangal</a></li>
              <li><a className="cursor-pointer hover:text-white hover:underline transition-all">Karimnagar</a></li>
              <li><a className="cursor-pointer hover:text-white hover:underline transition-all">Guntur</a></li>
            </ul>
          </div>
          
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 border-t border-green-700 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-green-200">
          <p>&copy; {new Date().getFullYear()} Agrichoice. All rights reserved.</p>
          
          <div className="flex gap-6">
            <a className="cursor-pointer hover:text-white transition-colors">Privacy</a>
            <a className="cursor-pointer hover:text-white transition-colors">Terms</a>
            <a className="cursor-pointer hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;