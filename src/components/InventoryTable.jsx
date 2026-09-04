import React from 'react';

const InventoryTable = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden h-full">
      <div className="px-6 py-4 bg-emerald-50 border-b border-slate-200 flex justify-between items-center">
        <h2 className="text-sm font-bold uppercase tracking-wide text-emerald-800">Your Active Stock</h2>
        <span className="text-xs font-semibold bg-emerald-200 text-emerald-800 py-1 px-3 rounded-full">
          {data.length} Items Listed
        </span>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-400 uppercase bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="px-6 py-4 font-semibold">Image</th>
              <th className="px-6 py-4 font-semibold">Produce</th>
              <th className="px-6 py-4 font-semibold">Available Qty</th>
              <th className="px-6 py-4 font-semibold">Price/Unit</th>
              <th className="px-6 py-4 font-semibold">Expires</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.length === 0 ? (
              <tr>
                <td colSpan="5" className="px-6 py-12 text-center text-slate-500 italic">
                  No active listings. Add produce using the form.
                </td>
              </tr>
            ) : (
              data.map((item) => (
                <tr key={item.id} className="bg-white hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-3">
                    {item.image ? (
                      <img 
                        src={typeof item.image === 'string' ? item.image : URL.createObjectURL(item.image)} 
                        alt={item.produceName} 
                        className="w-12 h-16 object-cover rounded-md border border-slate-200"
                      />
                    ) : (
                      <div className="w-12 h-16 bg-slate-100 rounded-md flex items-center justify-center text-xs text-slate-400 border border-slate-200">
                        No Img
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 font-semibold text-slate-800">{item.produceName}</td>
                  <td className="px-6 py-4 text-emerald-600 font-bold">{item.quantity} {item.unit}</td>
                  <td className="px-6 py-4 text-slate-600 font-medium">₹{item.price}</td>
                  <td className="px-6 py-4 text-rose-500 text-xs font-medium">
                    {new Date(item.availableUntil).toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryTable;