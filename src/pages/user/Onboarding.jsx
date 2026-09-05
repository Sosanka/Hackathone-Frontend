import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { profileService } from '../../services/profileService';

export default function Onboarding() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    address_line: '',
    city: '',
    district: '',
    state: '',
    country: 'India',
    pincode: '',
    latitude: 0,
    longitude: 0,
    google_place_id: 'sample_place_id',
    formatted_address: '',
    store_name: '',
    store_description: '',
    store_phone: '',
    store_address_line: '',
    store_city: '',
    store_district: '',
    store_state: '',
    store_country: 'India',
    store_pincode: '',
    store_latitude: 0,
    store_longitude: 0,
    store_google_place_id: 'sample_store_place_id',
    store_formatted_address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await profileService.updateOnboarding(formData);
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to complete onboarding. Please check your inputs.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6 flex justify-center items-center">
      <div className="max-w-3xl w-full bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Seller Onboarding</h1>
        <p className="text-slate-500 mb-8 text-sm">Please provide your personal and store details to activate your account.</p>

        {error && <div className="mb-6 p-4 bg-red-50 text-red-700 text-sm rounded-lg border border-red-200">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-6 text-sm">
          
          {/* Personal Info */}
          <div>
            <h3 className="font-bold text-slate-800 text-base mb-4 border-b pb-2">1. Personal & Location Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1">Full Name</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} className="w-full p-2.5 border rounded-lg bg-slate-50" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Address Line</label>
                <input type="text" name="address_line" required value={formData.address_line} onChange={handleChange} className="w-full p-2.5 border rounded-lg bg-slate-50" />
              </div>
              <div>
                <label className="block font-semibold mb-1">City</label>
                <input type="text" name="city" required value={formData.city} onChange={handleChange} className="w-full p-2.5 border rounded-lg bg-slate-50" />
              </div>
              <div>
                <label className="block font-semibold mb-1">District</label>
                <input type="text" name="district" required value={formData.district} onChange={handleChange} className="w-full p-2.5 border rounded-lg bg-slate-50" />
              </div>
              <div>
                <label className="block font-semibold mb-1">State</label>
                <input type="text" name="state" required value={formData.state} onChange={handleChange} className="w-full p-2.5 border rounded-lg bg-slate-50" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Pincode</label>
                <input type="text" name="pincode" required value={formData.pincode} onChange={handleChange} className="w-full p-2.5 border rounded-lg bg-slate-50" />
              </div>
            </div>
          </div>

          {/* Store Info */}
          <div>
            <h3 className="font-bold text-slate-800 text-base mb-4 border-b pb-2">2. Store Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold mb-1">Store Name</label>
                <input type="text" name="store_name" required value={formData.store_name} onChange={handleChange} className="w-full p-2.5 border rounded-lg bg-slate-50" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Store Phone</label>
                <input type="text" name="store_phone" required value={formData.store_phone} onChange={handleChange} className="w-full p-2.5 border rounded-lg bg-slate-50" />
              </div>
              <div className="md:col-span-2">
                <label className="block font-semibold mb-1">Store Description</label>
                <textarea name="store_description" rows="2" value={formData.store_description} onChange={handleChange} className="w-full p-2.5 border rounded-lg bg-slate-50"></textarea>
              </div>
              <div>
                <label className="block font-semibold mb-1">Store Address Line</label>
                <input type="text" name="store_address_line" required value={formData.store_address_line} onChange={handleChange} className="w-full p-2.5 border rounded-lg bg-slate-50" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Store City</label>
                <input type="text" name="store_city" required value={formData.store_city} onChange={handleChange} className="w-full p-2.5 border rounded-lg bg-slate-50" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Store District</label>
                <input type="text" name="store_district" required value={formData.store_district} onChange={handleChange} className="w-full p-2.5 border rounded-lg bg-slate-50" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Store State</label>
                <input type="text" name="store_state" required value={formData.store_state} onChange={handleChange} className="w-full p-2.5 border rounded-lg bg-slate-50" />
              </div>
              <div>
                <label className="block font-semibold mb-1">Store Pincode</label>
                <input type="text" name="store_pincode" required value={formData.store_pincode} onChange={handleChange} className="w-full p-2.5 border rounded-lg bg-slate-50" />
              </div>
            </div>
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="cursor-pointer w-full bg-[#16A34A] text-white font-bold py-3 px-4 rounded-lg hover:bg-green-700 transition-colors shadow-sm"
          >
            {loading ? "Saving Profile..." : "Complete Onboarding"}
          </button>
        </form>
      </div>
    </div>
  );
}