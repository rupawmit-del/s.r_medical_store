import React, { useState, useEffect } from 'react';
import {
  Image as ImageIcon,
  ZoomIn,
  X,
  Filter,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  MapPin
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { updatePageSeo } from '../utils/seo';

interface GalleryItem {
  id: number;
  title: string;
  category: 'Front View' | 'Medicine Shelves' | 'Products' | 'Equipment' | 'Team & Store';
  imageUrl: string;
  caption: string;
}

export const Gallery: React.FC = () => {
  useEffect(() => {
    updatePageSeo({
      title: 'Store Photo Gallery - S.R Medical Store Nalanda',
      description: 'View photos of S.R Medical Store in More, Nalanda: well-stocked pharmacy shelves, genuine medicines, medical equipment, and store facilities.',
      canonicalPath: '/gallery'
    });
  }, []);

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'Store Front & 24/7 Pharmacy Entrance',
      category: 'Front View',
      imageUrl: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1200&q=80',
      caption: 'Main store frontage in More, Museum Link Road, Nalanda with 24-hour service signage and easy patient parking.'
    },
    {
      id: 2,
      title: 'Organized Prescription Medicine Shelves',
      category: 'Medicine Shelves',
      imageUrl: 'https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=1200&q=80',
      caption: 'Categorized, temperature-regulated pharmaceutical racks ensuring prompt and mistake-free drug dispensing.'
    },
    {
      id: 3,
      title: 'Digital Diagnostics & Blood Pressure Monitors',
      category: 'Equipment',
      imageUrl: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?auto=format&fit=crop&w=1200&q=80',
      caption: 'Certified Omron digital BP apparatus, pulse oximeters, and nebulizers with warranty.'
    },
    {
      id: 4,
      title: 'Baby Care & Pediatric Nutrition Counter',
      category: 'Products',
      imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1200&q=80',
      caption: 'Complete stock of infant formulas, gentle pediatric washes, and newborn healthcare essentials.'
    },
    {
      id: 5,
      title: 'Surgical Dressings & First Aid Station',
      category: 'Equipment',
      imageUrl: 'https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=1200&q=80',
      caption: 'Hospital-grade sterile gauze, bandages, antiseptic povidone solutions, and surgical disposables.'
    },
    {
      id: 6,
      title: 'Modern Dispensing Counter & Pharmacist Station',
      category: 'Team & Store',
      imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&w=1200&q=80',
      caption: 'Friendly pharmacist counter offering dosage guidance, digital billing, and prescription verification.'
    },
    {
      id: 7,
      title: 'Supplements & Daily Wellness Showcase',
      category: 'Products',
      imageUrl: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&w=1200&q=80',
      caption: 'Immunity enhancers, multivitamins, calcium tablets, and protein formulas from trusted Indian pharma brands.'
    },
    {
      id: 8,
      title: 'Clean Storage & Cold Chain Refrigerator',
      category: 'Medicine Shelves',
      imageUrl: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&w=1200&q=80',
      caption: 'Dedicated medical grade cold-chain storage for insulin, biologics, and pediatric vaccines.'
    }
  ];

  const categories = ['All', 'Front View', 'Medicine Shelves', 'Products', 'Equipment', 'Team & Store'];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="py-12 sm:py-16 space-y-12 sm:space-y-16">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
          <ImageIcon className="w-3.5 h-3.5" />
          Store Gallery
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          Visual Tour of S.R Medical Store
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Take a look inside our clean, well-stocked pharmacy in More, Nalanda, showcasing authentic medications, equipment, and customer counter.
        </p>

        {/* Location Notice */}
        <div className="pt-1 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400">
          <MapPin className="w-3.5 h-3.5 text-emerald-500" />
          <span>More, Museum Link Road, Nalanda, Bihar 803111 (Open 24/7)</span>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeCategory === cat
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Photo Grid with Zoom Trigger */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-xl transition cursor-pointer flex flex-col"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <span className="p-3 rounded-full bg-white/90 text-slate-900 shadow-md">
                    <ZoomIn className="w-5 h-5 text-emerald-700" />
                  </span>
                </div>
                <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-900/80 text-white backdrop-blur-xs">
                  {item.category}
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
                <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mt-3 block">
                  Click to Zoom & Inspect →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* POPUP LIGHTBOX ZOOM MODAL */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <button
            onClick={closeLightbox}
            aria-label="Close photo preview"
            className="absolute top-5 right-5 z-10 p-2.5 rounded-full bg-white/20 hover:bg-white/40 text-white transition"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            aria-label="Previous photo"
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextImage}
            aria-label="Next photo"
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl w-full flex flex-col items-center">
            <div className="relative max-h-[75vh] w-full flex items-center justify-center overflow-hidden rounded-2xl">
              <img
                src={filteredItems[activeLightboxIndex].imageUrl}
                alt={filteredItems[activeLightboxIndex].title}
                className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl"
              />
            </div>
            <div className="mt-4 text-center text-white max-w-xl">
              <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                {filteredItems[activeLightboxIndex].category}
              </span>
              <h4 className="text-lg font-bold mt-0.5">
                {filteredItems[activeLightboxIndex].title}
              </h4>
              <p className="text-xs text-slate-300 mt-1">
                {filteredItems[activeLightboxIndex].caption}
              </p>
              <div className="text-[11px] text-slate-400 mt-2">
                Photo {activeLightboxIndex + 1} of {filteredItems.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
