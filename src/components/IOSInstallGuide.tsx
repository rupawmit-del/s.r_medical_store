import React from 'react';
import { Share, PlusSquare, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface IOSInstallGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IOSInstallGuide: React.FC<IOSInstallGuideProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 transition-all">
      <div 
        className="w-full max-w-md rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-2xl border border-slate-100 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ios-install-title"
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
              SR
            </div>
            <div>
              <h3 id="ios-install-title" className="font-semibold text-slate-900 dark:text-white">
                Add {SITE_CONFIG.businessName}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">Install on iPhone / iPad Home Screen</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            aria-label="Close guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 space-y-3.5 text-sm text-slate-600 dark:text-slate-300">
          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-semibold text-xs">
              1
            </div>
            <div className="pt-0.5">
              <p className="font-medium text-slate-900 dark:text-white">Tap the Share icon</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1.5">
                Found at the bottom menu bar in Safari: <Share className="w-4 h-4 text-emerald-600 inline" />
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-semibold text-xs">
              2
            </div>
            <div className="pt-0.5">
              <p className="font-medium text-slate-900 dark:text-white">Select "Add to Home Screen"</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 flex items-center gap-1.5">
                Scroll down the action sheet and tap <PlusSquare className="w-4 h-4 text-emerald-600 inline" /> Add to Home Screen.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-700/60">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 font-semibold text-xs">
              3
            </div>
            <div className="pt-0.5">
              <p className="font-medium text-slate-900 dark:text-white">Tap "Add" in top-right</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                The S.R Medical Store icon will appear on your home screen with instant 24/7 access!
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-5 w-full rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2.5 text-sm shadow-sm transition"
        >
          Got it
        </button>
      </div>
    </div>
  );
};
