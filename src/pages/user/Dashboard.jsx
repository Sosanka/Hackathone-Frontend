import React, { useState } from 'react';
import AppLayout from '../../layouts/AppLayout';
import StatCard from '../../components/StatCard';
import OrderTable from '../../components/OrderTable';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('pending');

  const [allOrders] = useState([
    { id: 'ORD-1029', item: 'Organic Tomatoes', quantity: '50 kg', buyer: 'Rajesh K.', date: '2026-09-05', status: 'pending' },
    { id: 'ORD-1030', item: 'Wheat', quantity: '500 kg', buyer: 'Milling Co.', date: '2026-09-05', status: 'pending' },
    { id: 'ORD-1028', item: 'Potatoes', quantity: '200 kg', buyer: 'Amit Farms', date: '2026-09-03', status: 'completed' },
    { id: 'ORD-1027', item: 'Onions', quantity: '30 kg', buyer: 'Local Grocer', date: '2026-09-04', status: 'cancelled' },
  ]);

  const pendingCount = allOrders.filter(o => o.status === 'pending').length;
  const completedCount = allOrders.filter(o => o.status === 'completed').length;
  const cancelledCount = allOrders.filter(o => o.status === 'cancelled').length;

  const displayedOrders = allOrders.filter(o => o.status === activeTab);

  const getTableConfig = () => {
    switch(activeTab) {
      case 'completed':
        return { text: "Completed Orders", bg: "bg-emerald-100", textColor: "text-emerald-800" };
      case 'cancelled':
        return { text: "Cancelled Orders", bg: "bg-rose-100", textColor: "text-rose-800" };
      default:
        return { text: "Action Required: Pending Reservations", bg: "bg-amber-100", textColor: "text-amber-800" };
    }
  };

  const tableConfig = getTableConfig();

  return (
    <AppLayout activeTab="dashboard">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-slate-500 mt-1">Manage your surplus produce and upcoming pickups.</p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4 bg-white p-2 rounded-3xl shadow-sm border border-slate-200 select-none">
        <StatCard 
          title="Pending Orders" 
          count={pendingCount} 
          countColor="text-amber-600" 
          bgAccent="bg-amber-50"
          isActive={activeTab === 'pending'}
          onClick={() => setActiveTab('pending')}
        />
        <StatCard 
          title="Completed Orders" 
          count={completedCount} 
          countColor="text-emerald-600" 
          bgAccent="bg-emerald-50"
          isActive={activeTab === 'completed'}
          onClick={() => setActiveTab('completed')}
        />
        <StatCard 
          title="Cancelled Orders" 
          count={cancelledCount} 
          countColor="text-rose-500" 
          bgAccent="bg-rose-50"
          isActive={activeTab === 'cancelled'}
          onClick={() => setActiveTab('cancelled')}
        />
      </div>

      <OrderTable 
        data={displayedOrders} 
        headerText={tableConfig.text} 
        headerBg={tableConfig.bg}
        headerTextColor={tableConfig.textColor}
      />
    </AppLayout>
  );
}