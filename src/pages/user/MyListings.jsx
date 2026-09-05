import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppLayout from "../../layouts/AppLayout";
import ListingForm from "../../components/ListingForm";
import InventoryTable from "../../components/InventoryTable";
import { productService } from "../../services/productService";

export default function MyListings() {
  const navigate = useNavigate();

  const [inventory, setInventory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pageError, setPageError] = useState("");

  // ============================================================
  // LOAD PRODUCTS
  // ============================================================

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getSellerProducts();

        setInventory(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);

        if (
          error.response?.status === 401 ||
          error.message?.includes("token")
        ) {
          localStorage.removeItem("access_token");
          navigate("/login");
        } else {
          setPageError(
            "Failed to load your inventory. Please try again later.",
          );
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [navigate]);

  // ============================================================
  // ADD NEW LISTING
  // ============================================================

  const handleAddListing = (newProduct) => {
    setInventory((prevInventory) => [newProduct, ...prevInventory]);
  };

  // ============================================================
  // DELETE LISTING
  // ============================================================

  const handleDeleteListing = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this listing?")) {
      return;
    }

    try {
      await productService.deleteProduct(productId);

      setInventory((prevInventory) =>
        prevInventory.filter((item) => item.id !== productId),
      );
    } catch (error) {
      console.error("Failed to delete product:", error);

      alert(
        error.response?.data?.detail ||
          "Failed to delete product from database.",
      );
    }
  };

  // ============================================================
  // UPDATE STOCK
  // ============================================================

  const handleUpdateStock = async (productId, actionType, value) => {
    try {
      let updatedProduct;

      // --------------------------------------------------------
      // INCREASE
      // --------------------------------------------------------

      if (actionType === "increase") {
        updatedProduct = await productService.addStock(productId, value);
      }

      // --------------------------------------------------------
      // DECREASE
      // --------------------------------------------------------
      else if (actionType === "decrease") {
        updatedProduct = await productService.subtractStock(productId, value);
      }

      // --------------------------------------------------------
      // INVALID ACTION
      // --------------------------------------------------------
      else {
        throw new Error("Invalid stock adjustment type.");
      }

      /*
       * The backend returns the updated product.
       *
       * However, total_quantity can also change on
       * other matching product rows.
       *
       * Therefore reload the complete inventory.
       */

      const updatedInventory = await productService.getSellerProducts();

      setInventory(updatedInventory);

      return updatedProduct;
    } catch (error) {
      console.error("Failed to update stock:", error);

      const detail = error.response?.data?.detail;

      const message = Array.isArray(detail)
        ? detail[0]?.msg
        : detail || error.message || "Failed to update stock quantity.";

      alert(message);

      throw error;
    }
  };

  // ============================================================
  // UI
  // ============================================================

  return (
    <AppLayout activeTab="listings">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">My Listings</h1>

        <p className="text-slate-500 mt-1">
          Add surplus produce and manage your active inventory.
        </p>
      </div>

      {/* PAGE ERROR */}

      {pageError && (
        <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-xl border border-red-200">
          {pageError}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* ======================================================
            CREATE LISTING
        ====================================================== */}

        <div className="lg:col-span-1">
          <ListingForm onSubmit={handleAddListing} />
        </div>

        {/* ======================================================
            INVENTORY
        ====================================================== */}

        <div className="lg:col-span-2">
          {isLoading ? (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12 flex flex-col items-center justify-center">
              <svg
                className="animate-spin h-8 w-8 text-[#16A34A] mb-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />

                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
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
