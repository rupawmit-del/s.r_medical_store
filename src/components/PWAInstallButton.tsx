import React, { useState } from 'react';
import { Smartphone, CheckCircle2 } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { IOSInstallGuide } from './IOSInstallGuide';

interface PWAInstallButtonProps {
  className?: string;
  variant?: 'nav' | 'mobile' | 'hero';
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ 
  className = '',
  variant = 'nav' 
}) => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);
  const [justInstalled, setJustInstalled] = useState(false);

  // If already running in standalone mode, do not display
  if (isInstalled) {
    return null;
  }

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSGuide(true);
      return;
    }

    if (isInstallable) {
      const success = await install();
      if (success) {
        setJustInstalled(true);
        setTimeout(() => setJustInstalled(false), 4000);
      }
    } else {
      // Fallback helper for browsers that don't support beforeinstallprompt
      setShowIOSGuide(true);
    }
  };

  if (justInstalled) {
    return (
      <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 px-3 py-1.5 text-xs font-semibold">
        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
        App Installed!
      </div>
    );
  }

  const baseClasses = variant === 'mobile'
    ? 'w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-sm shadow-md transition-all touch-manipulation'
    : variant === 'hero'
    ? 'inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 hover:bg-white dark:hover:bg-slate-800 text-slate-800 dark:text-slate-100 font-medium text-sm shadow-xs backdrop-blur-xs transition'
    : 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/50 dark:hover:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/80 font-medium text-xs shadow-xs transition active:scale-95';

  return (
    <>
      <button
        type="button"
        id="pwa-install-btn"
        onClick={handleInstallClick}
        aria-label="Add S.R Medical Store application to home screen"
        className={`${baseClasses} ${className}`}
      >
        <Smartphone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
        <span className="whitespace-nowrap">📲 Add to Home</span>
      </button>

      <IOSInstallGuide 
        isOpen={showIOSGuide} 
        onClose={() => setShowIOSGuide(false)} 
      />
    </>
  );
};
