import React, { useState, useEffect } from 'react';
import { productService } from '../services/productService';

const ListingForm = ({ onSubmit }) => {
  // --- TEST AUTHENTICATION STATE ---
  const [testToken, setTestToken] = useState('');
  const [authStatus, setAuthStatus] = useState('');

  // --- LISTING FORM STATE ---
  const [formData, setFormData] = useState({
    produceName: '',
    category: '',
    quantity: '',
    unit: 'kg', 
    price: '',
    location: '',
    harvestDate: '',
    availableUntil: '',
    pickupInfo: '',
    image: null
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // --- AUTHENTICATION HANDLERS ---
  useEffect(() => {
    const existingToken = localStorage.getItem('seller_access_token');
    if (existingToken) {
      setTestToken(existingToken);
      setAuthStatus('Token active');
    }
  }, []);

  const handleSaveToken = (e) => {
    e.preventDefault();
    if (!testToken.trim()) return;
    localStorage.setItem('seller_access_token', testToken.trim());
    setAuthStatus('Token saved! Ready to post.');
    setTimeout(() => setAuthStatus('Token active'), 3000);
  };

  const handleClearToken = () => {
    localStorage.removeItem('seller_access_token');
    setTestToken('');
    setAuthStatus('Token cleared. You are logged out.');
  };

  // --- FORM HANDLERS ---
  const blockInvalidNumberChars = (e) => {
    if (e.key === '-' || e.key === 'e' || e.key === 'E') {
      e.preventDefault();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg('');
    setSuccessMsg('');
    
    const submitData = new FormData();
    submitData.append('product_name', formData.produceName);
    submitData.append('quantity', formData.quantity);
    submitData.append('unit', formData.unit); 
    submitData.append('price_per_unit', formData.price);
    
    if (formData.category) submitData.append('category', formData.category);
    if (formData.location) submitData.append('location_name', formData.location);
    if (formData.pickupInfo) submitData.append('description', formData.pickupInfo);
    if (formData.harvestDate) submitData.append('harvest_date', formData.harvestDate);
    if (formData.availableUntil) submitData.append('best_before_date', formData.availableUntil);
    if (formData.image) submitData.append('image', formData.image);

    try {
      const newProduct = await productService.createListing(submitData);
      
      onSubmit(newProduct); 
      
      setSuccessMsg('Produce listed successfully!');
      setFormData({ 
        produceName: '', category: '', quantity: '', unit: 'kg', 
        price: '', location: '', harvestDate: '', availableUntil: '', 
        pickupInfo: '', image: null 
      });
      e.target.reset();

      setTimeout(() => setSuccessMsg(''), 3000);

    } catch (error) {
      console.error("Listing error:", error);
      setErrorMsg(error.toString());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* TEST AUTHENTICATION SECTION */}
      <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-200 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-sm font-bold text-emerald-900 uppercase tracking-wide">
            Test Authentication
          </h2>
          {authStatus && (
            <span className={`text-xs font-bold px-3 py-1 rounded-full ${authStatus.includes('cleared') ? 'bg-rose-100 text-rose-700' : 'bg-emerald-200 text-emerald-800'}`}>
              {authStatus}
            </span>
          )}
        </div>
        <form onSubmit={handleSaveToken} className="flex gap-3">
          <input 
            type="text" 
            placeholder="Paste JWT Token here..." 
            className="flex-1 p-2.5 border border-emerald-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white text-sm font-mono text-slate-600"
            value={testToken}
            onChange={(e) => setTestToken(e.target.value)}
          />
          <button 
            type="submit" 
            className="cursor-pointer bg-emerald-600 text-white font-bold py-2.5 px-6 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm whitespace-nowrap"
          >
            Save Token
          </button>
          <button 
            type="button" 
            onClick={handleClearToken}
            className="cursor-pointer bg-white border border-rose-300 text-rose-600 font-bold py-2.5 px-6 rounded-lg hover:bg-rose-50 transition-colors shadow-sm whitespace-nowrap"
          >
            Clear
          </button>
        </form>
      </div>

      {/* MAIN LISTING FORM */}
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-lg font-bold text-slate-800 mb-6 uppercase tracking-wide">Add New Produce</h2>
        
        {errorMsg && <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-200">{errorMsg}</div>}
        {successMsg && <div className="mb-4 p-3 bg-green-50 text-green-700 text-sm rounded-lg border border-green-200">{successMsg}</div>}

        <form onSubmit={handleSubmit} className="space-y-4 text-sm text-slate-700">
          
          <div>
            <label className="block font-semibold mb-1">Produce Image</label>
            <input 
              type="file" 
              accept="image/*"
              onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
              className="cursor-pointer w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 transition-colors file:cursor-pointer"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-semibold mb-1">Produce Name</label>
              <input 
                type="text" required minLength="2" maxLength="255"
                className="w-full p-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"
                value={formData.produceName}
                onChange={(e) => setFormData({...formData, produceName: e.target.value})}
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1">Category</label>
              <select 
                className="w-full p-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
              >
                <option value="">Select Category...</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Fruits">Fruits</option>
                <option value="Grains & Cereals">Grains & Cereals</option>
                <option value="Dairy & Eggs">Dairy & Eggs</option>
                <option value="Spices">Spices</option>
              </select>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-semibold mb-1">Quantity</label>
              <input 
                type="number" required min="0.1" step="any"
                onKeyDown={blockInvalidNumberChars}
                className="w-full p-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"
                value={formData.quantity}
                onChange={(e) => setFormData({...formData, quantity: e.target.value})}
              />
            </div>
            <div className="w-24">
              <label className="block font-semibold mb-1">Unit</label>
              <select 
                className="w-full p-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"
                value={formData.unit}
                onChange={(e) => setFormData({...formData, unit: e.target.value})}
              >
                <option value="kg">kg</option>
                <option value="nos">nos.</option>
                <option value="ltr">L</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">Price per Unit (₹)</label>
            <input 
              type="number" required min="1" step="any"
              onKeyDown={blockInvalidNumberChars}
              className="w-full p-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"
              value={formData.price}
              onChange={(e) => setFormData({...formData, price: e.target.value})}
            />
          </div>

          <div>
            <label className="block font-semibold mb-1">Pickup Location</label>
            <input 
              type="text" maxLength="255"
              className="w-full p-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
            />
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label className="block font-semibold mb-1">Harvest Date</label>
              <input 
                type="date" 
                className="w-full p-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"
                value={formData.harvestDate}
                onChange={(e) => setFormData({...formData, harvestDate: e.target.value})}
              />
            </div>
            <div className="flex-1">
              <label className="block font-semibold mb-1">Best Before Date</label>
              <input 
                type="date" 
                className="w-full p-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"
                value={formData.availableUntil}
                onChange={(e) => setFormData({...formData, availableUntil: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-1">Description & Instructions</label>
            <textarea 
              rows="2" maxLength="5000"
              className="w-full p-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"
              value={formData.pickupInfo}
              onChange={(e) => setFormData({...formData, pickupInfo: e.target.value})}
              placeholder="Details about the produce or pickup arrangements..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={isLoading}
            className={`cursor-pointer w-full mt-2 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-sm flex justify-center items-center ${
              isLoading ? 'bg-emerald-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700'
            }`}
          >
            {isLoading ? (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : 'Post Listing'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ListingForm;