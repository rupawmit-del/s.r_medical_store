import React, { useState } from 'react';
import { X, MessageCircle, Phone, UploadCloud, CheckCircle, FileText, Clock, MapPin, User, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface WhatsAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledMedicine?: string;
}

export const WhatsAppOrderModal: React.FC<WhatsAppOrderModalProps> = ({
  isOpen,
  onClose,
  prefilledMedicine = ''
}) => {
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [medicineName, setMedicineName] = useState(prefilledMedicine);
  const [hasPrescription, setHasPrescription] = useState<'Yes' | 'No'>('No');
  const [fileName, setFileName] = useState('');
  const [preferredTime, setPreferredTime] = useState('Immediate / Urgent (24/7)');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Synchronize prefilled medicine if it changes
  React.useEffect(() => {
    if (prefilledMedicine) {
      setMedicineName(prefilledMedicine);
    }
  }, [prefilledMedicine]);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setHasPrescription('Yes');
    }
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim()) {
      setError('Please provide your name');
      return;
    }
    if (!mobileNumber.trim() || mobileNumber.replace(/\D/g, '').length < 10) {
      setError('Please enter a valid 10-digit mobile number');
      return;
    }
    if (!medicineName.trim()) {
      setError('Please mention the medicine(s) or healthcare items required');
      return;
    }
    if (!address.trim()) {
      setError('Please enter delivery address in Nalanda / nearby locality');
      return;
    }

    setError('');

    const formattedMessage = `*Hello ${SITE_CONFIG.businessName}*,
I would like to place a *Medicine Order* via your website:

👤 *Customer Name:* ${customerName.trim()}
📞 *Phone:* ${mobileNumber.trim()}
${email.trim() ? `📧 *Email:* ${email.trim()}\n` : ''}💊 *Medicine Required:* ${medicineName.trim()}
📍 *Delivery Address:* ${address.trim()}
📋 *Prescription Available:* ${hasPrescription}${fileName ? ` (Attached in chat: ${fileName})` : ''}
⏰ *Preferred Delivery Time:* ${preferredTime}
${message.trim() ? `📝 *Notes/Instructions:* ${message.trim()}\n` : ''}
---
_Sent via S.R Medical Store Official Website_`;

    const encoded = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappInternational}?text=${encoded}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div 
        className="w-full max-w-xl rounded-2xl bg-white dark:bg-slate-900 p-6 shadow-2xl border border-slate-100 dark:border-slate-800 my-8 max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="order-modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-sm">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h2 id="order-modal-title" className="text-lg font-bold text-slate-900 dark:text-white">
                Order Medicines via WhatsApp
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Direct counter support • 24/7 Home Delivery in Nalanda
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSendWhatsApp} className="mt-4 space-y-4 overflow-y-auto pr-1">
          {error && (
            <div className="flex items-center gap-2 p-3 text-xs text-red-700 bg-red-50 dark:bg-red-950/40 dark:text-red-300 rounded-xl border border-red-200 dark:border-red-900/50">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
              <span>{error}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Customer Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                  type="tel"
                  required
                  placeholder="e.g. 9876543210"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Email Address <span className="text-slate-400 font-normal">(Optional)</span>
              </label>
              <input
                type="email"
                placeholder="e.g. ramesh@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                Preferred Delivery Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="Immediate / Urgent (24/7)">Immediate / Urgent (24/7)</option>
                  <option value="Within 1-2 Hours">Within 1-2 Hours</option>
                  <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                  <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                  <option value="Evening (4:00 PM - 8:00 PM)">Evening (4:00 PM - 8:00 PM)</option>
                  <option value="Night (8:00 PM - 12:00 AM)">Night (8:00 PM - 12:00 AM)</option>
                </select>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Medicine(s) Required <span className="text-red-500">*</span>
            </label>
            <textarea
              required
              rows={2}
              placeholder="e.g. Dolo 650 (2 strips), Augmentin 625 (1 strip), Benadryl Syrup (1 bottle)"
              value={medicineName}
              onChange={(e) => setMedicineName(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Delivery Address in Nalanda <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              <input
                type="text"
                required
                placeholder="House / Shop No., Landmark, More, Mohanpur, Nalanda"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Prescription Upload / Toggle */}
          <div className="p-3.5 rounded-xl border border-dashed border-emerald-300 dark:border-emerald-800 bg-emerald-50/40 dark:bg-emerald-950/20">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-emerald-600" />
                Prescription Upload (Optional)
              </label>
              <div className="flex items-center gap-2 text-xs">
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="prescriptionToggle"
                    checked={hasPrescription === 'Yes'}
                    onChange={() => setHasPrescription('Yes')}
                    className="accent-emerald-600"
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center gap-1 cursor-pointer">
                  <input
                    type="radio"
                    name="prescriptionToggle"
                    checked={hasPrescription === 'No'}
                    onChange={() => {
                      setHasPrescription('No');
                      setFileName('');
                    }}
                    className="accent-emerald-600"
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div className="relative">
              <input
                type="file"
                id="prescription-file"
                accept="image/*,.pdf"
                onChange={handleFileUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="flex items-center justify-center gap-2 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300">
                <UploadCloud className="w-4 h-4 text-emerald-600" />
                {fileName ? (
                  <span className="font-semibold text-emerald-700 dark:text-emerald-400 truncate max-w-xs">
                    {fileName} (Ready to attach in WhatsApp)
                  </span>
                ) : (
                  <span>Click to select photo / PDF prescription</span>
                )}
              </div>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5">
              *You can also attach the photo directly once WhatsApp opens.
            </p>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
              Additional Notes / Instructions
            </label>
            <input
              type="text"
              placeholder="e.g. Call before coming, urgent delivery, generic substitute allowed"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
            <button
              type="submit"
              className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#0A8F6A] hover:bg-[#087355] active:bg-[#055942] text-white font-semibold text-sm shadow-md transition"
            >
              <MessageCircle className="w-4 h-4" />
              Send via WhatsApp
            </button>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="w-full sm:w-auto flex items-center justify-center gap-2 py-3 px-5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              Call Now
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
