import React, { useState } from 'react';

const ProfileUpdatePage = () => {
  const [formData, setFormData] = useState({
    name: '', address_line: '', city: '', district: '', state: '', 
    country: 'India', pincode: '', latitude: -90, longitude: -180, 
    google_place_id: '', formatted_address: '',
    
    store_name: '', store_description: '', store_phone: '', 
    store_address_line: '', store_city: '', store_district: '', 
    store_state: '', store_country: 'India', store_pincode: '', 
    store_latitude: -90, store_longitude: -180, 
    store_google_place_id: '', store_formatted_address: ''
  });

  const [sameAsPersonal, setSameAsPersonal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyAddress = () => {
    setSameAsPersonal(!sameAsPersonal);
    if (!sameAsPersonal) {
      setFormData((prev) => ({
        ...prev,
        store_address_line: prev.address_line,
        store_city: prev.city,
        store_district: prev.district,
        store_state: prev.state,
        store_pincode: prev.pincode,
        store_latitude: prev.latitude,
        store_longitude: prev.longitude,
        store_google_place_id: prev.google_place_id,
        store_formatted_address: prev.formatted_address,
      }));
    } else {
      // Clear store address if unchecked
      setFormData((prev) => ({
        ...prev,
        store_address_line: '', store_city: '', store_district: '', 
        store_state: '', store_pincode: '', store_latitude: -90, 
        store_longitude: -180, store_google_place_id: '', store_formatted_address: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting Profile Data:", formData);
    // Add API POST/PUT request here -> redirect to dashboard on success
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex justify-center">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-md p-8">
        
        <div className="mb-8 border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-800">Welcome! Let's set up your profile.</h1>
          <p className="text-gray-500 mt-2">Please complete your seller and store details to access your dashboard.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          
          {/* --- SECTION 1: PERSONAL DETAILS --- */}
          <section>
            <h2 className="text-xl font-semibold text-blue-600 mb-4 border-b pb-2">1. Personal Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" name="name" onChange={handleInputChange} required 
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
              </div>

              {/* Note: In production, use a Google Places Autocomplete component here to auto-fill lat, lng, place_id, etc. */}
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Personal Address Line</label>
                <input type="text" name="address_line" onChange={handleInputChange} required 
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input type="text" name="city" onChange={handleInputChange} required 
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">District</label>
                <input type="text" name="district" onChange={handleInputChange} required 
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">State</label>
                <input type="text" name="state" onChange={handleInputChange} required 
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Pincode</label>
                <input type="text" name="pincode" onChange={handleInputChange} required 
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm" />
              </div>
            </div>
          </section>

          {/* --- SECTION 2: STORE DETAILS --- */}
          <section>
            <h2 className="text-xl font-semibold text-blue-600 mb-4 border-b pb-2">2. Store Details</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700">Store Name</label>
                <input type="text" name="store_name" onChange={handleInputChange} required 
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm" />
              </div>

              <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-gray-700">Store Phone</label>
                <input type="tel" name="store_phone" onChange={handleInputChange} required 
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm" />
              </div>

              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Store Description</label>
                <textarea name="store_description" onChange={handleInputChange} rows="3" required 
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm"></textarea>
              </div>
            </div>

            {/* Checkbox to copy address */}
            <div className="flex items-center mb-6 bg-blue-50 p-3 rounded-md">
              <input type="checkbox" id="sameAddress" checked={sameAsPersonal} onChange={handleCopyAddress} 
                className="h-4 w-4 text-blue-600 border-gray-300 rounded" />
              <label htmlFor="sameAddress" className="ml-2 block text-sm text-gray-900 font-medium">
                Store address is the same as my personal address
              </label>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${sameAsPersonal ? 'opacity-50 pointer-events-none' : ''}`}>
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700">Store Address Line</label>
                <input type="text" name="store_address_line" value={formData.store_address_line} onChange={handleInputChange} required 
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Store City</label>
                <input type="text" name="store_city" value={formData.store_city} onChange={handleInputChange} required 
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Store District</label>
                <input type="text" name="store_district" value={formData.store_district} onChange={handleInputChange} required 
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Store State</label>
                <input type="text" name="store_state" value={formData.store_state} onChange={handleInputChange} required 
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Store Pincode</label>
                <input type="text" name="store_pincode" value={formData.store_pincode} onChange={handleInputChange} required 
                  className="mt-1 block w-full p-2 border rounded-md shadow-sm" />
              </div>
            </div>
          </section>

          <div className="pt-6 border-t">
            <button type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition duration-200">
              Complete Profile & Go to Dashboard
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ProfileUpdatePage;