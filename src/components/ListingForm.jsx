import React, { useState } from 'react';
import { productService } from '../services/productService';

const ListingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    produceName: '',
    quantity: '',
    unit: 'kg',
    price: '',
    location: '',
    availableUntil: '',
    pickupInfo: '',
    image: null
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Prevent negative numbers and 'e' (exponent) from being typed
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
    
    // Map frontend state to EXACT backend Form(...) field names
    const submitData = new FormData();
    submitData.append('product_name', formData.produceName);
    submitData.append('quantity', formData.quantity);
    submitData.append('unit', formData.unit);
    submitData.append('price_per_unit', formData.price);
    submitData.append('location_name', formData.location);
    submitData.append('description', formData.pickupInfo); // Mapping pickup info to description
    
    // The backend expects a 'date', so we extract YYYY-MM-DD from the datetime-local string
    if (formData.availableUntil) {
      const dateOnly = formData.availableUntil.split('T')[0];
      submitData.append('best_before_date', dateOnly);
    }

    if (formData.image) {
      submitData.append('image', formData.image);
    }

    try {
      // 1. Send to Backend API
      const newProduct = await productService.createListing(submitData);
      
      // 2. Update local UI state (passing backend response back to parent)
      onSubmit(newProduct); 
      
      // 3. Show Success & Reset
      setSuccessMsg('Produce listed successfully!');
      setFormData({ produceName: '', quantity: '', unit: 'kg', price: '', location: '', availableUntil: '', pickupInfo: '', image: null });
      e.target.reset();

      // Clear success message after 3 seconds
      setTimeout(() => setSuccessMsg(''), 3000);

    } catch (error) {
      console.error("Listing error:", error);
      setErrorMsg(error.toString());
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
      <h2 className="text-lg font-bold text-slate-800 mb-6 uppercase tracking-wide">Add New Produce</h2>
      
      {/* Feedback Messages */}
      {errorMsg && <div className="mb-4 p-3 bg-red-50 text-red-700 text-sm rounded-lg border border-red-200">{errorMsg}</div>}
      {successMsg && <div className="mb-4 p-3 bg-green-50 text-green-700 text-sm rounded-lg border border-green-200">{successMsg}</div>}

      <form onSubmit={handleSubmit} className="space-y-4 text-sm text-slate-700">
        
        {/* Image Upload */}
        <div>
          <label className="block font-semibold mb-1">Produce Image (2:3 preferred)</label>
          <input 
            type="file" 
            accept="image/*"
            required
            onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
            className="cursor-pointer w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 transition-colors file:cursor-pointer"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Produce Name</label>
          <input 
            type="text" required
            className="w-full p-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"
            value={formData.produceName}
            onChange={(e) => setFormData({...formData, produceName: e.target.value})}
          />
        </div>

        <div className="flex gap-4">
          <div className="flex-1">
            <label className="block font-semibold mb-1">Quantity</label>
            <input 
              type="number" required
              min="0.1" step="any"
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
              <option value="nos.">nos.</option>
              <option value="L">L</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-1">Price per Unit (₹)</label>
          <input 
            type="number" required
            min="1" step="any"
            onKeyDown={blockInvalidNumberChars}
            className="w-full p-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"
            value={formData.price}
            onChange={(e) => setFormData({...formData, price: e.target.value})}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Location</label>
          <input 
            type="text" required
            className="w-full p-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"
            value={formData.location}
            onChange={(e) => setFormData({...formData, location: e.target.value})}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Available Until</label>
          <input 
            type="datetime-local" required
            className="w-full p-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"
            value={formData.availableUntil}
            onChange={(e) => setFormData({...formData, availableUntil: e.target.value})}
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">Pickup Instructions</label>
          <textarea 
            rows="2" required
            className="w-full p-2.5 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-slate-50"
            value={formData.pickupInfo}
            onChange={(e) => setFormData({...formData, pickupInfo: e.target.value})}
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
  );
};

export default ListingForm;