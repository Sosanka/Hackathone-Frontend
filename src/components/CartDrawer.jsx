import React from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

const CartDrawer = ({ isOpen, onClose }) => {
  // Dummy data for design purposes
  const cartItems = [
    { id: 1, name: 'Fresh Tomatoes', price: 40, quantity: 2, image: '🍅', farmer: 'Raju G.', unit: 'kg' },
    { id: 2, name: 'Sona Masuri Rice', price: 55, quantity: 5, image: '🌾', farmer: 'Lakshmi N.', unit: 'kg' },
    { id: 3, name: 'Organic Onions', price: 35, quantity: 1, image: '🧅', farmer: 'Srinu V.', unit: 'kg' },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = 30;
  const total = subtotal + deliveryFee;

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] transition-opacity duration-300"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-[70] transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-lg font-extrabold text-slate-800">Your Cart</h2>
              <p className="text-xs font-semibold text-emerald-600">{cartItems.length} items</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-5 bg-slate-50/50">
          {cartItems.length > 0 ? (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex gap-4 relative group">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-50 to-green-100 rounded-xl flex items-center justify-center text-3xl shrink-0">
                    {item.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-800 text-sm leading-tight mb-1">{item.name}</h3>
                    <p className="text-xs text-slate-500 mb-2">By {item.farmer}</p>
                    <div className="flex items-center justify-between">
                      <p className="font-extrabold text-emerald-600">₹{item.price}<span className="text-xs font-medium text-slate-400">/{item.unit}</span></p>
                      
                      <div className="flex items-center gap-2 bg-slate-50 rounded-lg p-1 border border-slate-100">
                        <button className="w-6 h-6 flex items-center justify-center rounded-md bg-white border border-slate-200 text-slate-600 hover:text-emerald-600 hover:border-emerald-200 transition-colors">
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold text-slate-700 w-4 text-center">{item.quantity}</span>
                        <button className="w-6 h-6 flex items-center justify-center rounded-md bg-white border border-slate-200 text-slate-600 hover:text-emerald-600 hover:border-emerald-200 transition-colors">
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button className="absolute top-3 right-3 text-slate-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all duration-200">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <ShoppingBag className="w-10 h-10 text-slate-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-700 mb-2">Your cart is empty</h3>
              <p className="text-sm text-slate-500 max-w-[200px]">Looks like you haven't added any fresh produce yet.</p>
            </div>
          )}

          {/* Bus Delivery Notice */}
          <div className="mt-6 bg-sky-50 border border-sky-100 rounded-xl p-4 flex gap-3">
            <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center shrink-0">
              <span className="text-lg">🚌</span>
            </div>
            <div>
              <h4 className="text-sm font-bold text-sky-900 mb-1">Bus Parcel Delivery Eligible</h4>
              <p className="text-xs text-sky-700 leading-relaxed">Your order will be shipped via state bus network for just ₹30. Fast and affordable!</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-slate-100 bg-white p-5">
          <div className="space-y-3 mb-5">
            <div className="flex justify-between text-sm">
              <span className="text-slate-500 font-medium">Subtotal</span>
              <span className="font-bold text-slate-700">₹{subtotal}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-500 font-medium">Bus Delivery Fee</span>
              <span className="font-bold text-slate-700">₹{deliveryFee}</span>
            </div>
            <div className="pt-3 border-t border-slate-100 flex justify-between">
              <span className="font-bold text-slate-800">Total</span>
              <span className="font-extrabold text-emerald-600 text-lg">₹{total}</span>
            </div>
          </div>
          
          <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg shadow-emerald-200 transition-all duration-200 flex items-center justify-center gap-2 group">
            Proceed to Checkout
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
