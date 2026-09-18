import React, { useState, useMemo } from 'react';
import { Search, CheckCircle2, AlertTriangle, XCircle, ShoppingBag, Filter, ShieldCheck } from 'lucide-react';
import stockData from '../data/medicineStock.json';
import { SITE_CONFIG } from '../config/siteConfig';

export interface MedicineItem {
  id: string;
  medicineName: string;
  brand: string;
  category: string;
  dosage: string;
  mrp: number;
  availableQuantity: number;
  expiry: string;
  status: string; // 'Available' | 'Limited Stock' | 'Out of Stock'
  prescriptionRequired: boolean;
  description: string;
}

interface MedicineStockCheckerProps {
  onOrderMedicine?: (medicineName: string) => void;
}

export const MedicineStockChecker: React.FC<MedicineStockCheckerProps> = ({ onOrderMedicine }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const categories = useMemo(() => {
    const unique = Array.from(new Set(stockData.map(item => item.category)));
    return ['All', ...unique];
  }, []);

  const filteredMedicines = useMemo(() => {
    return (stockData as MedicineItem[]).filter(item => {
      const matchSearch =
        item.medicineName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.dosage.toLowerCase().includes(searchTerm.toLowerCase());

      const matchCategory = selectedCategory === 'All' || item.category === selectedCategory;
      const matchStatus = statusFilter === 'All' || item.status === statusFilter;

      return matchSearch && matchCategory && matchStatus;
    });
  }, [searchTerm, selectedCategory, statusFilter]);

  const handleOrder = (name: string) => {
    if (onOrderMedicine) {
      onOrderMedicine(name);
    } else {
      const msg = encodeURIComponent(`Hello S.R Medical Store, I want to check availability and order: ${name}`);
      window.open(`https://wa.me/${SITE_CONFIG.whatsappInternational}?text=${msg}`, '_blank');
    }
  };

  return (
    <div id="medicine-stock-checker" className="w-full bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 dark:border-slate-800">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            Live Pharmacy Stock Checker
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Check Medicine Availability
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Search our real-time Nalanda inventory for branded & generic medicines, health devices, and baby care.
          </p>
        </div>

        {/* Live Status summary pills */}
        <div className="flex items-center gap-2 flex-wrap text-xs">
          <button
            onClick={() => setStatusFilter('All')}
            className={`px-3 py-1.5 rounded-lg border font-medium transition ${
              statusFilter === 'All'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-transparent'
                : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
            }`}
          >
            All ({stockData.length})
          </button>
          <button
            onClick={() => setStatusFilter('Available')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-medium transition ${
              statusFilter === 'Available'
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'border-emerald-200 dark:border-emerald-900/60 text-emerald-700 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/30'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Available
          </button>
          <button
            onClick={() => setStatusFilter('Limited Stock')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-medium transition ${
              statusFilter === 'Limited Stock'
                ? 'bg-amber-600 text-white border-amber-600'
                : 'border-amber-200 dark:border-amber-900/60 text-amber-700 dark:text-amber-400 bg-amber-50/50 dark:bg-amber-950/30'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            Limited
          </button>
          <button
            onClick={() => setStatusFilter('Out of Stock')}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border font-medium transition ${
              statusFilter === 'Out of Stock'
                ? 'bg-red-600 text-white border-red-600'
                : 'border-red-200 dark:border-red-900/60 text-red-700 dark:text-red-400 bg-red-50/50 dark:bg-red-950/30'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-red-500" />
            Out of Stock
          </button>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-3.5">
        <div className="md:col-span-8 relative">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search medicine by name, salt, brand (e.g., Dolo, Augmentin, BP Monitor, Syrup)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-11 pr-4 py-3 text-sm rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3.5 top-3 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 px-2 py-1"
            >
              Clear
            </button>
          )}
        </div>

        <div className="md:col-span-4 relative">
          <Filter className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full pl-9 pr-8 py-3 text-sm rounded-2xl border border-slate-200 dark:border-slate-700 bg-slate-50/70 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer transition"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat === 'All' ? 'All Categories' : cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results Count & Quick Notice */}
      <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
        <span>Showing {filteredMedicines.length} of {stockData.length} items</span>
        <span className="hidden sm:inline">Can't find a medicine? Send prescription on WhatsApp for instant counter check</span>
      </div>

      {/* Medicine Grid */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredMedicines.map((item) => {
          const isAvailable = item.status === 'Available';
          const isLimited = item.status === 'Limited Stock';
          const isOut = item.status === 'Out of Stock';

          return (
            <div
              key={item.id}
              className="flex flex-col justify-between p-5 rounded-2xl border border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-800/40 hover:border-emerald-300 dark:hover:border-emerald-700/60 hover:shadow-md transition duration-200"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="inline-block text-[11px] font-medium tracking-wide uppercase px-2 py-0.5 rounded-md bg-slate-200/70 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                    {item.category}
                  </span>

                  {/* Stock Status Badge */}
                  {isAvailable && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Available
                    </span>
                  )}
                  {isLimited && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                      <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                      Limited Stock
                    </span>
                  )}
                  {isOut && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300">
                      <XCircle className="w-3.5 h-3.5 text-red-600" />
                      Out of Stock
                    </span>
                  )}
                </div>

                <h3 className="font-bold text-base text-slate-900 dark:text-white leading-snug">
                  {item.medicineName}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  By {item.brand} • <span className="font-medium text-slate-700 dark:text-slate-300">{item.dosage}</span>
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Bottom Details & Action */}
              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <div>
                    <span className="text-slate-400">MRP: </span>
                    <span className="font-bold text-sm text-slate-900 dark:text-white">
                      ₹{item.mrp.toFixed(2)}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-slate-400">Exp: </span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">{item.expiry}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleOrder(item.medicineName)}
                    className={`w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl font-semibold text-xs transition shadow-xs ${
                      isOut
                        ? 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    }`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    {isOut ? 'Request on WhatsApp' : 'Order on WhatsApp'}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredMedicines.length === 0 && (
        <div className="text-center py-12 px-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 mt-4 border border-dashed border-slate-200 dark:border-slate-700">
          <p className="font-semibold text-slate-800 dark:text-slate-200">No exact match for "{searchTerm}"</p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
            We stock thousands of additional unlisted prescription medicines, surgical goods, and wellness products at our store in More, Nalanda.
          </p>
          <button
            onClick={() => handleOrder(searchTerm || 'Custom Medicine Inquiry')}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition"
          >
            Inquire Availability on WhatsApp
          </button>
        </div>
      )}
    </div>
  );
};
