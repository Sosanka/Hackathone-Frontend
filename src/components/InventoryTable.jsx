import React, { useState } from 'react';

const InventoryTable = ({ data, onDelete, onUpdateStock }) => {
  const [editingId, setEditingId] = useState(null);
  const [actionType, setActionType] = useState('increase');
  const [adjustmentValue, setAdjustmentValue] = useState('');

  const handleStartEdit = (item) => {
    setEditingId(item.id);
    setActionType('increase');
    setAdjustmentValue('');
  };

  const handleSaveEdit = async (id) => {
    if (adjustmentValue !== '' && !isNaN(adjustmentValue) && Number(adjustmentValue) > 0) {
      await onUpdateStock(id, actionType, Number(adjustmentValue));
    }
    setEditingId(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden h-full">
      <div className="px-6 py-4 bg-green-50 border-b border-slate-200 flex justify-between items-center">
        <h2 className="text-sm font-bold uppercase tracking-wide text-green-800">Your Active Stock</h2>
        <span className="text-xs font-semibold bg-green-200 text-green-800 py-1 px-3 rounded-full">
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
              <th className="px-6 py-4 font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {data.length === 0 ? (
              <tr>
                <td colSpan="6" className="px-6 py-12 text-center text-slate-500 italic">
                  No active listings found in database.
                </td>
              </tr>
            ) : (
              data.map((item) => {
                const formatDate = (dateStr) => {
                  if (!dateStr) return 'N/A';
                  const d = new Date(dateStr);
                  return isNaN(d.getTime()) ? dateStr : d.toLocaleDateString();
                };

                const isEditing = editingId === item.id;

                return (
                  <tr key={item.id} className="bg-white hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-3">
                      {item.image_url || item.image ? (
                        <img 
                          src={item.image_url || item.image} 
                          alt={item.product_name} 
                          className="w-12 h-16 object-cover rounded-md border border-slate-200"
                        />
                      ) : (
                        <div className="w-12 h-16 bg-slate-100 rounded-md flex items-center justify-center text-xs text-slate-400 border border-slate-200">
                          No Img
                        </div>
                      )}
                    </td>

                    <td className="px-6 py-4 font-semibold text-slate-800">
                      {item.product_name}
                      <div className="text-xs font-normal text-slate-400 mt-1">{item.location_name || 'No location set'}</div>
                    </td>

                    <td className="px-6 py-4">
                      {isEditing ? (
                        <div className="flex flex-col gap-2 min-w-[180px]">
                          <div className="flex gap-1">
                            <select 
                              value={actionType}
                              onChange={(e) => setActionType(e.target.value)}
                              className="p-1 text-xs border border-slate-300 rounded bg-white focus:outline-none focus:ring-1 focus:ring-green-500"
                            >
                              <option value="increase">Increase (+)</option>
                              <option value="decrease">Decrease (-)</option>
                            </select>
                            <input 
                              type="number" 
                              min="0.1"
                              placeholder="Qty"
                              value={adjustmentValue}
                              onChange={(e) => setAdjustmentValue(e.target.value)}
                              className="w-20 p-1 text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-green-500"
                            />
                          </div>
                          <div className="flex gap-1">
                            <button 
                              onClick={() => handleSaveEdit(item.id)}
                              className="cursor-pointer text-xs bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 font-medium"
                            >
                              Apply
                            </button>
                            <button 
                              onClick={() => setEditingId(null)}
                              className="cursor-pointer text-xs bg-slate-200 text-slate-700 px-2 py-1 rounded hover:bg-slate-300"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <span className="text-green-600 font-bold">{item.quantity} {item.unit}</span>
                      )}
                    </td>

                    <td className="px-6 py-4 text-slate-600 font-medium">₹{item.price_per_unit}</td>

                    <td className="px-6 py-4 text-rose-500 text-xs font-medium">
                      {formatDate(item.best_before_date)}
                    </td>

                    <td className="px-6 py-4 text-center">
                      {!isEditing && (
                        <div className="flex items-center justify-center gap-2">
                          <button 
                            onClick={() => handleStartEdit(item)}
                            className="cursor-pointer px-2.5 py-1 text-xs font-semibold bg-slate-100 text-slate-700 rounded hover:bg-slate-200 transition-colors"
                            title="Adjust Stock Quantity"
                          >
                            Update Stock
                          </button>
                          <button 
                            onClick={() => onDelete(item.id)}
                            className="cursor-pointer px-2.5 py-1 text-xs font-semibold bg-rose-50 text-rose-600 rounded hover:bg-rose-100 transition-colors"
                            title="Delete Listing"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryTable;