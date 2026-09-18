import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import Footer from '../components/Footer';
import { FloatingActions } from '../components/FloatingActions';
import { WhatsAppOrderModal } from '../components/WhatsAppOrderModal';

interface RootLayoutProps {
  // Can pass any global layout configuration
}

export const RootLayout: React.FC<RootLayoutProps> = () => {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [prefilledMedicine, setPrefilledMedicine] = useState('');

  const handleOpenOrderModal = (medicineName: string = '') => {
    setPrefilledMedicine(medicineName);
    setIsOrderModalOpen(true);
  };

  const handleCloseOrderModal = () => {
    setIsOrderModalOpen(false);
    setPrefilledMedicine('');
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-emerald-600 selection:text-white transition-colors duration-200">
      {/* Sticky Top Navigation */}
      <Navbar onOpenOrderModal={() => handleOpenOrderModal()} />

      {/* Main Page Body (Routed Content) */}
      <main className="flex-1">
        <Outlet context={{ onOpenOrderModal: handleOpenOrderModal }} />
      </main>

      {/* Persistent Global Footer with Mandatory WMIT Tracking & Popup Trigger */}
      <Footer />

      {/* Floating Action Buttons Cluster */}
      <FloatingActions onOpenOrderModal={() => handleOpenOrderModal()} />

      {/* Global WhatsApp Medicine Order Modal */}
      <WhatsAppOrderModal
        isOpen={isOrderModalOpen}
        onClose={handleCloseOrderModal}
        prefilledMedicine={prefilledMedicine}
      />
    </div>
  );
};
