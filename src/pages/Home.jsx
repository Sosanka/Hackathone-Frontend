import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, MapPin, ChevronDown, Menu, ShoppingCart, Leaf, User,
  Users, Sprout, Truck, Bus, ShoppingBasket, IndianRupee, Handshake
} from 'lucide-react';
import CartDrawer from '../components/CartDrawer';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = [
    { name: 'Vegetables', icon: '🥬', link: '/categories/vegetables', color: 'from-green-50 to-emerald-50 border-green-200' },
    { name: 'Fruits', icon: '🍎', link: '/categories/fruits', color: 'from-red-50 to-orange-50 border-red-200' },
    { name: 'Grains & Pulses', icon: '🌾', link: '/categories/grains-pulses', color: 'from-slate-50 to-gray-50 border-slate-200' },
    { name: 'Spices', icon: '🌶️', link: '/categories/spices', color: 'from-slate-50 to-gray-50 border-slate-200' },
    { name: 'Dairy & Eggs', icon: '🥛', link: '/categories/dairy', color: 'from-slate-50 to-gray-50 border-slate-200' },
    { name: 'Organic', icon: '🍃', link: '/categories/organic', color: 'from-teal-50 to-emerald-50 border-teal-200' },
    { name: 'Oil Seeds', icon: '🫒', link: '/categories/oil-seeds', color: 'from-slate-50 to-gray-50 border-slate-200' },
    { name: 'Flowers', icon: '🌺', link: '/categories/flowers', color: 'from-slate-50 to-gray-50 border-slate-200' },
    { name: 'Farm Eqpt', icon: '🚜', link: '/categories/farm-equipment', color: 'from-slate-50 to-zinc-50 border-slate-200' },
  ];

  const trendingProducts = [
    { id: 1, name: 'Fresh Tomatoes', price: '₹40/kg', farmer: 'Raju G.', location: 'Medak', image: '🍅' },
    { id: 2, name: 'Sona Masuri Rice', price: '₹55/kg', farmer: 'Lakshmi N.', location: 'Nalgonda', image: '🌾' },
    { id: 3, name: 'Organic Onions', price: '₹35/kg', farmer: 'Srinu V.', location: 'Kurnool', image: '🧅' },
    { id: 4, name: 'Farm Fresh Eggs', price: '₹6/piece', farmer: 'Venkatesh P.', location: 'Ranga Reddy', image: '🥚' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="min-h-screen bg-white antialiased overflow-x-hidden font-sans">
      
      {/* Top Banner */}
      <div className="bg-leaf-700 text-white text-center text-xs py-1.5 px-4 font-medium">
        <span className="hidden sm:inline">🌱 India's Farm-to-Home Marketplace — </span>
        Fresh from the farmer, straight to your door
      </div>

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all duration-300">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-20 items-center gap-3 sm:gap-6">
            
            {/* Logo */}
            <Link className="flex items-center gap-2 sm:gap-3 shrink-0 group" to="/">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-500/30 group-hover:scale-105 transition-transform duration-300">
                <Leaf className="w-6 h-6" />
              </div>
              <div className="hidden sm:block">
                <span className="text-2xl font-extrabold tracking-tight text-emerald-800">Agri</span>
                <span className="text-2xl font-extrabold tracking-tight text-emerald-500">Choice</span>
              </div>
            </Link>

            {/* Location Selector */}
            <div className="shrink-0 hidden md:block ml-2">
              <button className="group flex items-center gap-2 rounded-full bg-slate-100/80 hover:bg-emerald-50 border border-slate-200/60 hover:border-emerald-200 px-4 py-2 text-sm text-slate-700 hover:text-emerald-700 transition-all duration-300">
                <MapPin className="h-4 w-4 text-emerald-600 group-hover:animate-bounce" />
                <span className="font-semibold max-w-[140px] truncate">Set Location</span>
                <ChevronDown className="h-3.5 w-3.5 opacity-60" />
              </button>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl hidden md:block ml-auto mr-auto">
              <form className="relative group" onSubmit={handleSearch}>
                <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                  <Search className="h-5 w-5 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                </div>
                <input 
                  type="text" 
                  placeholder="Search for fresh tomatoes, potatoes, and more..." 
                  className="w-full h-12 rounded-full border border-slate-200 bg-slate-50/50 pl-12 pr-24 text-[15px] outline-none transition-all duration-300 focus:border-emerald-400 focus:ring-4 focus:ring-emerald-500/10 focus:bg-white placeholder:text-slate-400 shadow-inner"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="absolute right-1.5 top-1.5 bottom-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-5 font-semibold text-sm transition-colors shadow-md shadow-emerald-600/20">
                  Search
                </button>
              </form>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3 shrink-0 ml-auto">
              <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors">
                <Search className="h-5 w-5" />
              </button>
              
              <Link className="hidden sm:flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white px-5 py-2.5 text-sm font-bold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5" to="/sell">
                <Sprout className="h-4 w-4" />
                Sell Produce
              </Link>
              
              <button 
                className="relative flex items-center justify-center w-11 h-11 rounded-full bg-slate-50 border border-slate-200 hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-600 text-slate-600 transition-all duration-300 cursor-pointer" 
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 flex items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white min-w-[20px] h-[20px] shadow-sm border-2 border-white">
                  3
                </span>
              </button>

              <Link className="hidden sm:flex items-center gap-2 rounded-full bg-slate-50 border border-slate-200 px-5 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-100 hover:border-slate-300 transition-all duration-300" to="/login">
                <User className="h-4 w-4" />
                Login
              </Link>

              <button className="md:hidden flex items-center justify-center w-11 h-11 rounded-full bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100 transition-colors">
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="pb-16 lg:pb-0 overflow-x-hidden">
        
        {/* Category Strip */}
        <div className="bg-white border-b border-slate-100 hidden md:block shadow-sm relative z-40">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex items-center justify-between py-3 overflow-x-auto no-scrollbar gap-2">
              {categories.map((cat, idx) => (
                <Link 
                  key={idx} 
                  className="group flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-300 border border-transparent hover:border-emerald-100"
                  to={cat.link}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform duration-300">{cat.icon}</span>
                  <span>{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative w-full max-w-[1400px] mx-auto mt-4 px-4 sm:px-6 lg:px-8 mb-12">
          <div className="relative rounded-3xl overflow-hidden min-h-[600px] h-full shadow-2xl flex flex-col md:flex-row items-center">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="/farmer_hero_bg.jpg" 
                alt="Farmer in field" 
                className="w-full h-full object-cover object-[70%_center] md:object-center"
              />
              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-green-950/90 via-green-900/70 to-transparent"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full flex flex-col md:flex-row justify-between h-full pt-16 pb-40 px-6 md:px-12 lg:px-16">
              
              {/* Left Column (Main Text & Features) */}
              <div className="flex flex-col justify-center max-w-2xl h-full">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-green-800 mb-6 w-fit shadow-sm">
                  <Leaf className="w-4 h-4 text-green-600" />
                  Rural Produce Surplus Exchange
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                  From Surplus<br />to <span className="text-green-400 drop-shadow-md">Shared Success</span>
                </h1>

                {/* Subtitle with underline */}
                <div className="relative mb-6 pb-2 inline-block self-start">
                  <div className="flex items-center gap-2 text-white font-bold text-base md:text-xl">
                    <Leaf className="w-4 h-4 md:w-5 md:h-5 text-green-400" />
                    <span>Reduce Waste. Support Farmers. Feed Communities.</span>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-full bg-green-500 rounded-full"></div>
                </div>

                <p className="text-lg md:text-xl text-green-50 max-w-xl mb-10 font-medium leading-relaxed drop-shadow-md">
                  A platform that connects local farmers with buyers to reduce waste and maximize value.
                </p>

                {/* Horizontal Features */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 md:mb-8 md:bg-white/10 md:backdrop-blur-md md:p-6 rounded-2xl md:border md:border-white/20">
                  <div className="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-2">
                    <div className="w-12 h-12 sm:w-10 sm:h-10 shrink-0 rounded-full bg-green-500/30 flex items-center justify-center border border-green-400/30">
                      <ShoppingBasket className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">List Surplus</h3>
                      <p className="text-sm text-green-100">Farmers list extra produce in minutes</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-2">
                    <div className="w-12 h-12 sm:w-10 sm:h-10 shrink-0 rounded-full bg-green-500/30 flex items-center justify-center border border-green-400/30">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">Reserve</h3>
                      <p className="text-sm text-green-100">Buyers reserve with ease</p>
                    </div>
                  </div>

                  <div className="flex flex-row sm:flex-col items-center sm:items-start gap-4 sm:gap-2">
                    <div className="w-12 h-12 sm:w-10 sm:h-10 shrink-0 rounded-full bg-green-500/30 flex items-center justify-center border border-green-400/30">
                      <Truck className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-lg">Group Pickup</h3>
                      <p className="text-sm text-green-100">Save time with coordinated pickup</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Side Menu Block */}
              <div className="hidden lg:flex flex-col justify-center items-end self-center mt-[-60px] mr-[-16px]">
                <div className="bg-black/40 backdrop-blur-md rounded-l-2xl py-8 px-6 border-y border-l border-white/10 flex flex-col gap-8 shadow-2xl">
                  
                  <div className="flex items-center gap-4 text-white hover:text-green-300 transition-colors cursor-pointer group">
                    <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-green-300 transition-colors">
                      <Leaf className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-lg">Fresh Produce</span>
                  </div>
                  
                  <div className="flex items-center gap-4 text-white hover:text-green-300 transition-colors cursor-pointer group">
                    <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-green-300 transition-colors">
                      <IndianRupee className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-lg">Fair Prices</span>
                  </div>

                  <div className="flex items-center gap-4 text-white hover:text-green-300 transition-colors cursor-pointer group">
                    <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-green-300 transition-colors">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-lg">Local Impact</span>
                  </div>

                  <div className="flex items-center gap-4 text-white hover:text-green-300 transition-colors cursor-pointer group">
                    <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-green-300 transition-colors">
                      <Handshake className="w-4 h-4" />
                    </div>
                    <span className="font-semibold text-lg">Stronger Together</span>
                  </div>

                </div>
              </div>
            </div>

            {/* Bottom Stats Bar */}
            <div className="absolute bottom-6 left-6 right-6 md:left-12 md:right-auto md:w-auto bg-[#E8EFE3]/95 backdrop-blur-sm rounded-2xl px-6 py-4 flex flex-wrap gap-4 md:gap-8 items-center shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/60 z-20 justify-between md:justify-start">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 md:w-7 md:h-7 text-green-700" />
                <div>
                  <div className="font-black text-lg md:text-xl text-green-950 leading-none">500+</div>
                  <div className="text-[10px] md:text-xs font-semibold text-green-800 mt-1 uppercase tracking-wide">Farmers</div>
                </div>
              </div>
              
              <div className="w-px h-8 bg-green-900/10 hidden md:block"></div>

              <div className="flex items-center gap-3">
                <ShoppingBasket className="w-6 h-6 md:w-7 md:h-7 text-green-700" />
                <div>
                  <div className="font-black text-lg md:text-xl text-green-950 leading-none">2.5K+</div>
                  <div className="text-[10px] md:text-xs font-semibold text-green-800 mt-1 uppercase tracking-wide">Listings</div>
                </div>
              </div>

              <div className="w-px h-8 bg-green-900/10 hidden md:block"></div>

              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 md:w-7 md:h-7 text-green-700" />
                <div>
                  <div className="font-black text-lg md:text-xl text-green-950 leading-none">10K+</div>
                  <div className="text-[10px] md:text-xs font-semibold text-green-800 mt-1 uppercase tracking-wide">Happy Buyers</div>
                </div>
              </div>

              <div className="w-px h-8 bg-green-900/10 hidden lg:block"></div>

              <div className="flex items-center gap-3 w-full md:w-auto mt-2 md:mt-0 pt-2 md:pt-0 border-t border-green-900/10 md:border-0">
                <Leaf className="w-6 h-6 md:w-7 md:h-7 text-green-700" />
                <div>
                  <div className="font-black text-lg md:text-xl text-green-950 leading-none">Tons of</div>
                  <div className="text-[10px] md:text-xs font-semibold text-green-800 mt-1 uppercase tracking-wide">Food Saved</div>
                </div>
              </div>
            </div>
            
          </div>
        </section>

        {/* Shop by Category */}
        <section className="py-8 sm:py-12 bg-white border-b border-slate-100">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg sm:text-2xl font-bold text-slate-900">Shop by Category</h2>
              <Link className="flex items-center gap-1 text-sm font-semibold text-leaf hover:text-leaf-dark transition-colors" to="/categories">
                View All
              </Link>
            </div>
            
            <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
              {categories.map((cat, idx) => (
                <Link 
                  key={idx}
                  className={`group flex-none sm:flex-1 flex flex-col items-center gap-2 rounded-2xl bg-gradient-to-br ${cat.color} border px-4 py-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300 min-w-[85px]`} 
                  to={cat.link}
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-200">{cat.icon}</span>
                  <span className="text-[11px] font-semibold text-slate-700 text-center leading-tight">{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>



        {/* Trending Products */}
        <section className="py-12 bg-slate-50 border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Trending in your area</h2>
              <Link className="text-sm font-semibold text-leaf hover:text-leaf-dark" to="/trending">
                See all
              </Link>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {trendingProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
                  <div className="h-40 bg-gradient-to-br from-green-50 to-slate-100 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform duration-300">
                    {product.image}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-bold text-leaf-600 bg-leaf-50 px-2 py-0.5 rounded-md uppercase tracking-wider">Direct from farm</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">{product.name}</h3>
                    <div className="flex items-center gap-1 text-xs text-slate-500 mb-3">
                      <User className="h-3 w-3" /> {product.farmer} • <MapPin className="h-3 w-3 ml-1" /> {product.location}
                    </div>
                    <div className="flex items-center justify-between mt-auto">
                      <p className="font-extrabold text-lg text-slate-900">{product.price}</p>
                      <button className="bg-leaf hover:bg-leaf-dark text-white rounded-xl p-2 transition-colors">
                        <ShoppingCart className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
