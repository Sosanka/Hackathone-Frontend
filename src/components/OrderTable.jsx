import React from 'react';

const OrderTable = ({ data, headerText, headerBg, headerTextColor }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mt-8">
      <div className={`px-6 py-4 ${headerBg} border-b border-slate-200`}>
        <h2 className={`text-sm font-bold uppercase tracking-wide ${headerTextColor}`}>{headerText}</h2>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-400 uppercase bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 font-semibold tracking-wider">Order ID</th>
              <th className="px-6 py-4 font-semibold tracking-wider">Produce</th>
              <th className="px-6 py-4 font-semibold tracking-wider">Quantity</th>
              <th className="px-6 py-4 font-semibold tracking-wider">Buyer</th>
              <th className="px-6 py-4 font-semibold tracking-wider">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.map((order) => (
              <tr key={order.id} className="bg-white hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-semibold text-slate-800">{order.id}</td>
                <td className="px-6 py-4 text-slate-600">{order.item}</td>
                <td className="px-6 py-4 text-slate-600 font-medium">{order.quantity}</td>
                <td className="px-6 py-4 text-slate-600">{order.buyer}</td>
                <td className="px-6 py-4 text-slate-400">{order.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderTable;