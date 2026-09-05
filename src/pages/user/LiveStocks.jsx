import React, { useState } from 'react';
import AppLayout from '../../layouts/AppLayout';
import StatCard from '../../components/StatCard';

export default function LiveStocks() {
  const [liveStocks] = useState([
    {
      id: 'STK-001',
      produceName: 'Organic Potatoes',
      totalQty: 400,
      reservedQty: 250,
      unit: 'kg',
      price: 15,
      expiry: '2026-09-08T18:00',
    },
    {
      id: 'STK-002',
      produceName: 'Red Onions',
      totalQty: 150,
      reservedQty: 150, 
      unit: 'kg',
      price: 25,
      expiry: '2026-09-10T12:00',
    },
    {
      id: 'STK-003',
      produceName: 'Fresh Tomatoes',
      totalQty: 200,
      reservedQty: 20,
      unit: 'kg',
      price: 40,
      expiry: '2026-09-06T10:00', 
    }
  ]);

  const totalListed = liveStocks.length;
  const totalAvailable = liveStocks.reduce((sum, item) => sum + (item.totalQty - item.reservedQty), 0);
  const totalReserved = liveStocks.reduce((sum, item) => sum + item.reservedQty, 0);

  const formatExpiry = (dateString) => {
    const expiryDate = new Date(dateString);
    const now = new Date();
    const hoursLeft = (expiryDate - now) / (1000 * 60 * 60);
    
    if (hoursLeft < 24 && hoursLeft > 0) return <span className="text-rose-600 font-bold">Expiring in {Math.round(hoursLeft)}h</span>;
    if (hoursLeft <= 0) return <span className="text-slate-400 font-semibold">Expired</span>;
    return <span className="text-slate-600">{expiryDate.toLocaleDateString()}</span>;
  };

  return (
    <AppLayout activeTab="stocks">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Live Stocks Overview</h1>
        <p className="text-slate-500 mt-1">Monitor real-time availability, buyer reservations, and inventory health.</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 bg-white p-2 rounded-3xl shadow-sm border border-slate-200 mb-8 select-none">
        <StatCard 
          title="Active Listings" 
          count={totalListed} 
          countColor="text-emerald-700" 
          bgAccent="bg-emerald-50"
          isActive={false} 
        />
        <StatCard 
          title="Total Available (Live)" 
          count={`${totalAvailable} units`} 
          countColor="text-emerald-500" 
          bgAccent="bg-emerald-50"
          isActive={true} 
        />
        <StatCard 
          title="Total Reserved" 
          count={`${totalReserved} units`} 
          countColor="text-amber-500" 
          bgAccent="bg-amber-50"
          isActive={false} 
        />
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 bg-slate-100 border-b border-slate-200">
          <h2 className="text-sm font-bold uppercase tracking-wide text-slate-700">Inventory Status & Reservations</h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-500 uppercase bg-slate-50 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 font-semibold">Produce</th>
                <th className="px-6 py-4 font-semibold">Stock Health (Reserved / Total)</th>
                <th className="px-6 py-4 font-semibold text-center">Available Qty</th>
                <th className="px-6 py-4 font-semibold text-center">Reserved Qty</th>
                <th className="px-6 py-4 font-semibold">Expiry Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {liveStocks.map((item) => {
                const available = item.totalQty - item.reservedQty;
                const percentReserved = (item.reservedQty / item.totalQty) * 100;
                const isSoldOut = available === 0;

                return (
                  <tr key={item.id} className="bg-white hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-slate-800">
                      {item.produceName}
                      <div className="text-xs text-slate-400 font-normal mt-0.5">₹{item.price} / {item.unit}</div>
                    </td>
                    
                    <td className="px-6 py-4 min-w-[200px]">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-medium text-slate-500">{Math.round(percentReserved)}% Reserved</span>
                        <span className="font-medium text-slate-700">{item.reservedQty} / {item.totalQty} {item.unit}</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${isSoldOut ? 'bg-emerald-500' : 'bg-amber-400'}`} 
                          style={{ width: `${percentReserved}%` }}
                        ></div>
                      </div>
                    </td>

                    <td className="px-6 py-4 text-center">
                      <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold ${
                        isSoldOut ? 'bg-slate-100 text-slate-500' : 'bg-emerald-100 text-emerald-700'
                      }`}>
                        {available} {item.unit}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-center">
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-700">
                        {item.reservedQty} {item.unit}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-sm">
                      {formatExpiry(item.expiry)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </AppLayout>
  );
}