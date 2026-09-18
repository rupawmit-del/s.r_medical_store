import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock, Mail, ShieldAlert, Heart, ExternalLink, X, FileText } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export default function Footer() {
  // === STEP 11 — MANDATORY GLOBAL TRACKING HOOK (PRESERVED EXACTLY) ===
  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://crm.webmakerit.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    const paramCid = urlParams.get('cid');
    let cid = paramCid || localStorage.getItem('wmit_active_cid');
    if (paramCid) {
      localStorage.setItem('wmit_active_cid', paramCid);
    }
    if (!cid) return;
    let visitorId = localStorage.getItem('wmit_visitor_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);
    let sessionId = sessionStorage.getItem('wmit_session_id') || 'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);
    const getPageName = () => {
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };
    const sendInitPayload = () => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: getPageName(),
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(err => {});
    };
    const sendExitPayload = () => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: getPageName(),
        action: 'page_change'
      };
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(err => {});
      }
    };
    sendInitPayload();
    // === IDLE TIMEOUT LOGIC FOR REACT ===
    let idleTimer: NodeJS.Timeout | number | undefined;
    let isIdle = false;
    const resetIdleTimer = () => {
      if (isIdle) {
        isIdle = false;
        sendInitPayload(); // Wake up! Resume tracking
      }
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        isIdle = true;
        sendExitPayload(); // Inactive! Stop tracking
      }, 60000); // 60 Seconds
    };
    const activityEvents = ['mousemove', 'keydown', 'scroll', 'touchstart'];
    activityEvents.forEach(evt => document.addEventListener(evt, resetIdleTimer, { passive: true }));
    resetIdleTimer(); // Initialize idle timer
    // ====================================
    const handleLocationChange = () => {
      sendExitPayload();
      setTimeout(sendInitPayload, 100);
    };
    window.addEventListener('popstate', handleLocationChange);
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('pagehide', sendExitPayload);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('pagehide', sendExitPayload);
      activityEvents.forEach(evt => document.removeEventListener(evt, resetIdleTimer));
      clearTimeout(idleTimer);
    };
  }, []);

  // Policy Modal state for Privacy, Terms & Disclaimer
  const [activePolicy, setActivePolicy] = useState<string | null>(null);

  return (
    <>
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
            {/* Col 1: Business Information */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold text-lg shadow-sm">
                  SR
                </div>
                <div>
                  <h3 className="font-bold text-xl text-white tracking-tight">
                    {SITE_CONFIG.businessName}
                  </h3>
                  <p className="text-xs text-emerald-400 font-medium">24/7 Pharmacy • Nalanda, Bihar</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                {SITE_CONFIG.tagline}. Delivering verified medicines, surgical essentials, and healthcare diagnostics directly to homes in Nalanda.
              </p>
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/60 border border-emerald-800/80 text-emerald-300 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Counter Open 24 Hours, 7 Days a Week
                </div>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Quick Navigation
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link to="/" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                    <span>•</span> Home Page
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                    <span>•</span> About S.R Medical Store
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                    <span>•</span> Pharmacy Services & Categories
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                    <span>•</span> Store Photo Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                    <span>•</span> Contact & Directions
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="hover:text-emerald-400 transition flex items-center gap-1.5">
                    <span>•</span> Staff & Customer Portal
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Contact & Working Hours */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Contact & Hours
              </h4>
              <ul className="space-y-3.5 text-sm text-slate-400">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{SITE_CONFIG.address.fullAddress}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <a href={`tel:${SITE_CONFIG.phone}`} className="hover:text-white font-medium text-slate-300 transition">
                    {SITE_CONFIG.displayPhone}
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>24 Hours Open (7 Days a Week)</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{SITE_CONFIG.email}</span>
                </li>
              </ul>
            </div>

            {/* Col 4: Google Map & Location */}
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                Store Location
              </h4>
              <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-800/80 p-1">
                <iframe
                  title="S.R Medical Store Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14436.985651582294!2d85.442654!3d25.13674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2f35759e6d8a7%3A0xbcf4c643ff124d9!2sNalanda%2C%20Bihar%20803111!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="130"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="rounded-lg filter contrast-105 opacity-90 hover:opacity-100 transition"
                />
              </div>
              <a
                href={SITE_CONFIG.social.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2.5 inline-flex items-center gap-1.5 text-xs text-emerald-400 hover:text-emerald-300 font-medium transition"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Legal / Policy Links */}
          <div className="py-5 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => setActivePolicy('privacy')}
                className="hover:text-white transition cursor-pointer"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => setActivePolicy('terms')}
                className="hover:text-white transition cursor-pointer"
              >
                Terms of Service
              </button>
              <button
                type="button"
                onClick={() => setActivePolicy('disclaimer')}
                className="hover:text-white transition cursor-pointer"
              >
                Medical Disclaimer
              </button>
            </div>
            <div className="text-slate-500">
              Licensed Chemist & Druggist • More, Nalanda, Bihar 803111
            </div>
          </div>

          {/* STEP 12 MANDATORY COPYRIGHT LINE & WMIT POPUP TRIGGER */}
          <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              &copy; {new Date().getFullYear()} {SITE_CONFIG.businessName}. All rights reserved.
            </div>

            {/* MANDATORY POPUP TRIGGER PRESERVED EXACTLY:
                <a href="#" class="wmit-popup-trigger">Developed by WMIT</a>
                Placed in the center of the footer copyright line */}
            <div className="text-center font-medium">
              <a href="#" className="wmit-popup-trigger hover:text-emerald-400 text-slate-300 transition">
                Developed by WMIT
              </a>
            </div>

            <div className="flex items-center gap-1 text-slate-500">
              <span>Trusted Healthcare Service with</span>
              <Heart className="w-3.5 h-3.5 text-emerald-500 inline fill-emerald-500" />
              <span>in Nalanda</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Policy Modal */}
      {activePolicy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
          <div className="w-full max-w-lg rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-2xl border border-slate-200 dark:border-slate-800 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-base text-slate-900 dark:text-white capitalize flex items-center gap-2">
                <FileText className="w-4 h-4 text-emerald-600" />
                {activePolicy === 'privacy' && 'Privacy Policy'}
                {activePolicy === 'terms' && 'Terms of Service'}
                {activePolicy === 'disclaimer' && 'Medical & Health Disclaimer'}
              </h3>
              <button
                onClick={() => setActivePolicy(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-4 text-xs leading-relaxed text-slate-600 dark:text-slate-300 space-y-3">
              {activePolicy === 'privacy' && (
                <>
                  <p>
                    At {SITE_CONFIG.businessName}, your health information and communication privacy are strictly guarded. Any personal details, address, or medical prescriptions submitted through our order form or WhatsApp channels are utilized solely to fulfill medicine dispense and delivery.
                  </p>
                  <p>
                    We never share, sell, or disclose prescription history or customer phone records to unauthorized third parties.
                  </p>
                </>
              )}
              {activePolicy === 'terms' && (
                <>
                  <p>
                    All scheduled and prescription medicines dispensed by {SITE_CONFIG.businessName} require a valid prescription written by a registered medical practitioner (RMP) in compliance with the Drugs and Cosmetics Act of India.
                  </p>
                  <p>
                    Home deliveries in Nalanda are executed promptly according to product availability, batch safety verifications, and cold-chain maintenance where required.
                  </p>
                </>
              )}
              {activePolicy === 'disclaimer' && (
                <>
                  <p>
                    The information provided on this website, including the stock checker, is for general consumer convenience and pharmaceutical availability reference. It is not intended to substitute professional medical diagnosis, doctor consultation, or customized treatment regimens.
                  </p>
                  <p>
                    Always consult your physician before starting, modifying, or discontinuing any medication.
                  </p>
                </>
              )}
            </div>
            <button
              onClick={() => setActivePolicy(null)}
              className="mt-5 w-full py-2 rounded-xl bg-emerald-600 text-white font-medium text-xs shadow-sm hover:bg-emerald-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
