import React, { useState } from "react";

const UpdateStock = ({ product, onApply, onCancel, isLoading }) => {
  const [action, setAction] = useState("increase");
  const [amount, setAmount] = useState("");

  const handleApply = async () => {
    if (!amount || Number(amount) <= 0) {
      return;
    }

    // Don't allow decreasing more than available quantity
    if (action === "decrease" && Number(amount) > Number(product.quantity)) {
      alert(
        `You cannot decrease more than ${product.quantity} ${product.unit}.`,
      );
      return;
    }

    await onApply(action, amount);
  };

  return (
    <div className="mt-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
      <div className="text-xs font-semibold text-slate-500 mb-3">
        UPDATE STOCK
      </div>

      <div className="flex flex-col sm:flex-row gap-2">
        {/* Increase / Decrease */}
        <select
          value={action}
          onChange={(e) => setAction(e.target.value)}
          className="px-3 py-2 border border-slate-300 rounded-lg bg-white text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          disabled={isLoading}
        >
          <option value="increase">Increase (+)</option>

          <option value="decrease">Decrease (-)</option>
        </select>

        {/* Amount */}
        <div className="flex items-center border border-slate-300 rounded-lg bg-white overflow-hidden">
          <input
            type="number"
            min="0.001"
            step="0.001"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "-" || e.key === "e" || e.key === "E") {
                e.preventDefault();
              }
            }}
            className="w-32 px-3 py-2 text-sm focus:outline-none"
            disabled={isLoading}
          />

          <span className="px-3 text-sm text-slate-500 border-l border-slate-200">
            {product.unit}
          </span>
        </div>

        {/* Apply */}
        <button
          type="button"
          onClick={handleApply}
          disabled={isLoading || !amount || Number(amount) <= 0}
          className="px-4 py-2 bg-green-600 text-white text-sm font-semibold rounded-lg hover:bg-green-700 disabled:bg-green-300 cursor-pointer disabled:cursor-not-allowed"
        >
          {isLoading ? "Updating..." : "Apply"}
        </button>

        {/* Cancel */}
        <button
          type="button"
          onClick={onCancel}
          disabled={isLoading}
          className="px-4 py-2 bg-white border border-slate-300 text-slate-700 text-sm font-semibold rounded-lg hover:bg-slate-100 cursor-pointer"
        >
          Cancel
        </button>
      </div>

      {/* Current stock */}
      <div className="mt-3 text-xs text-slate-500">
        Current stock:{" "}
        <span className="font-bold text-slate-700">
          {product.quantity} {product.unit}
        </span>
      </div>
    </div>
  );
};

export default UpdateStock;
