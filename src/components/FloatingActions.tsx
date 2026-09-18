import React, { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp, ShoppingBag } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface FloatingActionsProps {
  onOpenOrderModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenOrderModal }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleWhatsAppDirect = () => {
    const defaultMsg = encodeURIComponent(
      `Hello ${SITE_CONFIG.businessName}, I would like to inquire about medicines and home delivery in Nalanda.`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsappInternational}?text=${defaultMsg}`, '_blank');
  };

  return (
    <>
      {/* Floating Action Cluster on Bottom Right */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Back To Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="pointer-events-auto p-3 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 shadow-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <ArrowUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </button>
        )}

        {/* Floating Call Button */}
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          aria-label={`Call ${SITE_CONFIG.businessName} at ${SITE_CONFIG.displayPhone}`}
          className="pointer-events-auto flex items-center justify-center w-12 h-12 rounded-full bg-sky-600 hover:bg-sky-700 text-white shadow-xl transition transform hover:scale-105 active:scale-95"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Floating WhatsApp Button */}
        <button
          onClick={handleWhatsAppDirect}
          aria-label="Chat on WhatsApp"
          className="pointer-events-auto relative group flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-2xl transition transform hover:scale-105 active:scale-95 animate-bounce-subtle"
        >
          <MessageCircle className="w-7 h-7" />
          {/* Tooltip on hover for desktop */}
          <span className="hidden sm:block absolute right-16 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition shadow-lg pointer-events-none">
            24/7 WhatsApp Order
          </span>
        </button>
      </div>

      {/* Sticky Bottom Bar for Mobile - Instant Order CTA */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-2.5 px-4 flex items-center gap-2.5 shadow-lg">
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-600" />
          Call 24/7
        </a>

        <button
          onClick={onOpenOrderModal}
          className="flex-2 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-md"
        >
          <ShoppingBag className="w-3.5 h-3.5" />
          Order on WhatsApp
        </button>
      </div>
    </>
  );
};
