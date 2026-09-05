import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AppLayout from '../../layouts/AppLayout';
import ListingForm from '../../components/ListingForm';
import InventoryTable from '../../components/InventoryTable';
import { productService } from '../../services/productService';

export default function MyListings() {
  const navigate = useNavigate();
  const [inventory, setInventory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageError, setPageError] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getSellerProducts();
        setInventory(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        if (error.response?.status === 401 || error.message.includes('token')) {
          localStorage.removeItem('access_token');
          navigate('/login');
        } else {
          setPageError('Failed to load your inventory. Please try again later.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [navigate]);

  const handleAddListing = (newProduct) => {
    setInventory([newProduct, ...inventory]); 
  };

  const handleDeleteListing = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this listing?")) return;
    try {
      await productService.deleteProduct(productId);
      setInventory(inventory.filter(item => item.id !== productId));
    } catch (error) {
      console.error("Failed to delete product:", error);
      alert("Failed to delete product from database.");
    }
  };

  const handleUpdateStock = async (productId, actionType, value) => {
    try {
      // Calls backend endpoint to perform calculation and return updated product
      const updatedProduct = await productService.adjustStock(productId, actionType, value);
      
      // Update inventory state with the server's calculated response
      setInventory(inventory.map(item => 
        item.id === productId ? updatedProduct : item
      ));
    } catch (error) {
      console.error("Failed to update stock:", error);
      alert(error.response?.data?.detail || "Failed to update stock quantity.");
    }
  };

  return (
    <AppLayout activeTab="listings">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">My Listings</h1>
        <p className="text-slate-500 mt-1">Add surplus produce and manage your active inventory.</p>
      </div>
      
      {pageError && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl border border-red-200">
          {pageError}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-1">
          <ListingForm onSubmit={handleAddListing} />
        </div>

        <div className="lg:col-span-2">
          {isLoading ? (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12 flex flex-col items-center justify-center">
              <svg className="animate-spin h-8 w-8 text-[#16A34A] mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="text-slate-500 font-medium">Loading inventory...</p>
            </div>
          ) : (
            <InventoryTable 
              data={inventory} 
              onDelete={handleDeleteListing} 
              onUpdateStock={handleUpdateStock}
            />
          )}
        </div>
      </div>
    </AppLayout>
  );
}