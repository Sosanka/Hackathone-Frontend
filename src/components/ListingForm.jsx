import React, { useState } from 'react';

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

  // Prevent negative numbers and 'e' (exponent) from being typed
  const blockInvalidNumberChars = (e) => {
    if (e.key === '-' || e.key === 'e' || e.key === 'E') {
      e.preventDefault();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // To send an image to the backend, we must use FormData instead of a standard JSON object
    const submitData = new FormData();
    Object.keys(formData).forEach(key => {
      submitData.append(key, formData[key]);
    });

    onSubmit(formData); // We pass formData for local preview, backend will use submitData
    
    // Reset form
    setFormData({ produceName: '', quantity: '', unit: 'kg', price: '', location: '', availableUntil: '', pickupInfo: '', image: null });
    e.target.reset(); // Resets the file input UI
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
      <h2 className="text-lg font-bold text-slate-800 mb-6 uppercase tracking-wide">Add New Produce</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4 text-sm text-slate-700">
        
        {/* Image Upload */}
        <div>
          <label className="block font-semibold mb-1">Produce Image (2:3 preferred)</label>
          <input 
            type="file" 
            accept="image/*"
            required
            onChange={(e) => setFormData({...formData, image: e.target.files[0]})}
            className="w-full text-sm text-slate-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100 transition-colors"
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
          className="w-full mt-2 bg-emerald-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-emerald-700 transition-colors shadow-sm"
        >
          Post Listing
        </button>
      </form>
    </div>
  );
};

export default ListingForm;