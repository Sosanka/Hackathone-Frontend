import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, MapPin, ChevronDown, Menu, ShoppingCart, Leaf, User,
  Users, Sprout, Truck, Bus
} from 'lucide-react';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');

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
      <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex h-16 items-center gap-2 sm:gap-4">
            
            {/* Logo */}
            <Link className="flex items-center gap-1.5 sm:gap-2 shrink-0" to="/">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-leaf-600 rounded-full flex items-center justify-center text-white font-bold">
                <Leaf className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg sm:text-xl font-extrabold text-leaf-800 tracking-tight">jai</span>
                <span className="text-lg sm:text-xl font-extrabold text-leaf-600 tracking-tight">kisan</span>
              </div>
            </Link>

            {/* Location Selector */}
            <div className="shrink-0 hidden md:block">
              <button className="flex items-center gap-1 sm:gap-1.5 rounded-full bg-leaf-50 px-2 sm:px-3 py-1.5 text-xs sm:text-sm text-leaf-700 hover:bg-leaf-100 transition-colors">
                <MapPin className="h-3.5 w-3.5" />
                <span className="font-medium max-w-[72px] sm:max-w-[120px] truncate">Set Location</span>
                <ChevronDown className="h-3 w-3" />
              </button>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-xl hidden md:block ml-4">
              <form className="relative" onSubmit={handleSearch}>
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <input 
                  type="text" 
                  placeholder="Search tomatoes, potatoes..." 
                  className="w-full h-10 rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition-all focus:border-leaf focus:ring-2 focus:ring-leaf/10 focus:bg-white placeholder:text-slate-400"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2 ml-auto">
              <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-50">
                <Search className="h-5 w-5 text-slate-600" />
              </button>
              
              <Link className="hidden sm:flex items-center gap-1.5 rounded-full bg-harvest text-white px-4 py-2 text-sm font-semibold hover:bg-harvest-dark transition-colors" to="/sell">
                <Leaf className="h-4 w-4" />
                Sell
              </Link>
              
              <Link className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-50" to="/cart">
                <ShoppingCart className="h-5 w-5 text-slate-600" />
                <span className="absolute top-0 right-0 flex items-center justify-center rounded-full bg-harvest text-[10px] font-bold text-white min-w-[18px] h-[18px]">
                  0
                </span>
              </Link>

              <Link className="hidden sm:flex items-center gap-1.5 rounded-full border border-slate-200 px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors" to="/login">
                <User className="h-4 w-4" />
                Login
              </Link>

              <button className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-slate-50">
                <Menu className="h-5 w-5 text-slate-600" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="pb-16 lg:pb-0 overflow-x-hidden">
        
        {/* Category Strip */}
        <div className="border-b border-slate-50 hidden md:block">
          <div className="mx-auto max-w-7xl px-4">
            <div className="flex items-center gap-2 py-2 overflow-x-auto no-scrollbar">
              {categories.map((cat, idx) => (
                <Link 
                  key={idx} 
                  className="flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium text-slate-600 hover:bg-leaf-50 hover:text-leaf-700 transition-colors"
                  to={cat.link}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-leaf-50 via-white to-white py-14 pb-20">
          <div className="relative mx-auto max-w-7xl px-4">
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full bg-leaf-100 px-4 py-1.5 text-xs font-semibold text-leaf-700 mb-6">
                <Leaf className="h-3.5 w-3.5" />
                India's #1 Farm-to-Consumer Marketplace
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Fresh from the{' '}
                <span className="relative inline-block text-leaf">
                  Farm
                  <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 12" fill="none">
                    <path d="M2 8C30 3 70 2 100 4C130 6 170 3 198 8" stroke="#16A34A" strokeWidth="3" strokeLinecap="round" opacity="0.3"></path>
                  </svg>
                </span>,
                <br />Direct to your <span className="text-harvest">Home</span>
              </h1>
              <p className="mt-5 text-lg text-slate-500 max-w-xl mx-auto leading-relaxed">
                Buy vegetables, fruits, grains & dairy products directly from local farmers. No middlemen. Better prices. Fresher produce.
              </p>
              
              <div className="mt-8 max-w-lg mx-auto">
                <form className="relative flex items-center" onSubmit={handleSearch}>
                  <Search className="absolute left-4 h-5 w-5 text-slate-400 pointer-events-none" />
                  <input 
                    type="text" 
                    placeholder='Try "tomatoes near me" or "organic rice"' 
                    className="w-full h-14 rounded-2xl border-2 bg-white pl-12 pr-24 text-base outline-none transition-all focus:border-leaf focus:ring-4 focus:ring-leaf/10 shadow-lg shadow-slate-200/50 placeholder:text-slate-400 border-slate-200"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <div className="absolute right-2">
                    <button type="submit" className="flex items-center gap-2 rounded-xl bg-leaf px-5 py-2.5 text-sm font-bold text-white hover:bg-leaf-dark transition-colors shadow-md shadow-leaf/20">
                      Search
                    </button>
                  </div>
                </form>
                
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {['Tomatoes', 'Rice', 'Organic Vegetables', 'Fresh Milk', 'Mangoes'].map(term => (
                    <button key={term} className="rounded-full bg-white border border-slate-200 px-3 py-1 text-xs text-slate-500 hover:border-leaf hover:text-leaf-700 hover:bg-leaf-50 transition-colors">
                      {term}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto border-t border-slate-100 pt-8">
                <div className="flex items-center justify-center gap-3">
                  <Users className="h-6 w-6 text-leaf-500" />
                  <div className="text-left">
                    <p className="text-xl font-extrabold text-slate-800">31K+</p>
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Farmers</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Sprout className="h-6 w-6 text-leaf-500" />
                  <div className="text-left">
                    <p className="text-xl font-extrabold text-slate-800">2.7K+</p>
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Products</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="h-6 w-6 text-leaf-500" />
                  <div className="text-left">
                    <p className="text-xl font-extrabold text-slate-800">680+</p>
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Districts</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Truck className="h-6 w-6 text-leaf-500" />
                  <div className="text-left">
                    <p className="text-xl font-extrabold text-slate-800">50K+</p>
                    <p className="text-[10px] text-slate-400 font-medium uppercase tracking-wider">Deliveries</p>
                  </div>
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

        {/* Bus Parcel Delivery Banner */}
        <section className="py-12 bg-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-sky-600 to-sky-700 p-8 sm:p-12 shadow-lg">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-8 text-8xl">🚌</div>
                <div className="absolute bottom-4 left-1/3 text-6xl opacity-50">📦</div>
              </div>
              <div className="relative grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white mb-4">
                    <Bus className="h-3.5 w-3.5" /> Unique to Jaikisan
                  </div>
                  <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">Bus Parcel Delivery</h2>
                  <p className="text-sky-100 text-sm sm:text-base leading-relaxed max-w-md">
                    We use the state bus network for affordable last-mile delivery. Starting at just <span className="font-bold text-white">₹30</span>.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90 font-medium">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                        <Truck className="h-4 w-4 text-white" />
                      </div>
                      Same-day dispatch
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-white/90 font-medium">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/20">
                        <MapPin className="h-4 w-4 text-white" />
                      </div>
                      Pick up at bus stand
                    </div>
                  </div>
                </div>
                <div className="hidden md:flex justify-end">
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl max-w-xs w-full text-white">
                    <h3 className="font-bold mb-2">How it works</h3>
                    <ol className="text-sm space-y-3 text-sky-50">
                      <li className="flex gap-2">
                        <span className="font-bold text-leaf-400">1.</span> Order from farmer
                      </li>
                      <li className="flex gap-2">
                        <span className="font-bold text-leaf-400">2.</span> Farmer drops at local bus stand
                      </li>
                      <li className="flex gap-2">
                        <span className="font-bold text-leaf-400">3.</span> Bus transports to your city
                      </li>
                      <li className="flex gap-2">
                        <span className="font-bold text-leaf-400">4.</span> You pick up from your bus stand
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
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
    </div>
  );
}
