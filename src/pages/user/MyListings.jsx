import React, { useState } from 'react';
import AppLayout from '../../layouts/AppLayout';
import ListingForm from '../../components/ListingForm';
import InventoryTable from '../../components/InventoryTable';

export default function MyListings() {
  const [inventory, setInventory] = useState([
    {
      id: 'LST-001',
      produceName: 'Organic Potatoes',
      quantity: '400',
      unit: 'kg',
      price: '15',
      location: 'Farm Sector 4, North Village',
      availableUntil: '2026-09-08T18:00',
      pickupInfo: 'Pickup between 8AM - 4PM.',
      image: null
    },
    {
      id: 'LST-002',
      produceName: 'Red Onions',
      quantity: '150',
      unit: 'kg',
      price: '25',
      location: 'Warehouse B, Main Highway',
      availableUntil: '2026-09-10T12:00',
      pickupInfo: 'Use loading bay 2.',
      image: null
    }
  ]);

  const handleAddListing = (newListingData) => {
    const newItem = {
      ...newListingData,
      id: `LST-${Math.floor(Math.random() * 1000)}` 
    };
    setInventory([newItem, ...inventory]); 
  };

  return (
    <AppLayout activeTab="listings">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">My Listings</h1>
        <p className="text-slate-500 mt-1">Add surplus produce and manage your active inventory.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-1">
          <ListingForm onSubmit={handleAddListing} />
        </div>

        <div className="lg:col-span-2">
          <InventoryTable data={inventory} />
        </div>
      </div>
    </AppLayout>
  );
}