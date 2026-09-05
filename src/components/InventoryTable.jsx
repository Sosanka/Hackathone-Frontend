import React, { useState } from "react";
import UpdateStock from "./UpdateStock";

const InventoryTable = ({ data, onDelete, onUpdateStock }) => {
  const [editingId, setEditingId] = useState(null);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleStartUpdate = (item) => {
    setEditingId(item.id);
  };

  const handleApplyUpdate = async (id, action, amount) => {
    try {
      setIsUpdating(true);

      await onUpdateStock(id, action, Number(amount));

      setEditingId(null);
    } catch (error) {
      console.error("Stock update error:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "N/A";

    const d = new Date(dateStr);

    return isNaN(d.getTime()) ? dateStr : d.toLocaleDateString();
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden h-full">
      {/* Header */}
      <div className="px-6 py-4 bg-green-50 border-b border-slate-200 flex justify-between items-center">
        <h2 className="text-sm font-bold uppercase tracking-wide text-green-800">
          Your Active Stock
        </h2>

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

              <th className="px-6 py-4 font-semibold">Total Stock</th>

              <th className="px-6 py-4 font-semibold">Price/Unit</th>

              <th className="px-6 py-4 font-semibold">Expires</th>

              <th className="px-6 py-4 font-semibold text-center">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan="7"
                  className="px-6 py-12 text-center text-slate-500 italic"
                >
                  No active listings found in database.
                </td>
              </tr>
            ) : (
              data.map((item) => {
                const isEditing = editingId === item.id;

                return (
                  <React.Fragment key={item.id}>
                    <tr className="bg-white hover:bg-slate-50 transition-colors">
                      {/* Image */}
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

                      {/* Product */}
                      <td className="px-6 py-4 font-semibold text-slate-800">
                        {item.product_name}

                        <div className="text-xs font-normal text-slate-400 mt-1">
                          {item.location_name || "No location set"}
                        </div>
                      </td>

                      {/* Individual quantity */}
                      <td className="px-6 py-4">
                        <span
                          className={`font-bold ${
                            item.status === "out_of_stock"
                              ? "text-red-500"
                              : "text-green-600"
                          }`}
                        >
                          {item.quantity} {item.unit}
                        </span>

                        {item.status === "out_of_stock" && (
                          <div className="text-xs text-red-500 mt-1">
                            Out of stock
                          </div>
                        )}
                      </td>

                      {/* TOTAL STOCK */}
                      <td className="px-6 py-4">
                        <span className="font-bold text-blue-600">
                          {item.total_quantity}
                        </span>

                        <span className="ml-1 text-slate-500">{item.unit}</span>
                      </td>

                      {/* Price */}
                      <td className="px-6 py-4 text-slate-600 font-medium">
                        ₹{item.price_per_unit}
                      </td>

                      {/* Expiry */}
                      <td className="px-6 py-4 text-rose-500 text-xs font-medium">
                        {formatDate(item.best_before_date)}
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4 text-center">
                        <div className="flex items-center justify-center gap-2">
                          {/* UPDATE BUTTON */}
                          <button
                            type="button"
                            onClick={() => handleStartUpdate(item)}
                            className="cursor-pointer px-3 py-1.5 text-xs font-semibold bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors"
                          >
                            {isEditing ? "Close" : "Update"}
                          </button>

                          {/* DELETE */}
                          <button
                            type="button"
                            onClick={() => onDelete(item.id)}
                            disabled={isEditing}
                            className="cursor-pointer px-3 py-1.5 text-xs font-semibold bg-rose-50 text-rose-600 rounded-lg hover:bg-rose-100 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>

                    {/* UPDATE COMPONENT */}
                    {isEditing && (
                      <tr>
                        <td colSpan="7" className="px-6 py-4 bg-slate-50">
                          <UpdateStock
                            product={item}
                            isLoading={isUpdating}
                            onCancel={() => setEditingId(null)}
                            onApply={(action, amount) =>
                              handleApplyUpdate(item.id, action, amount)
                            }
                          />
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
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
