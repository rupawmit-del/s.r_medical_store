import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Navigation,
  Send,
  CheckCircle2,
  AlertCircle,
  Building2,
  ShieldAlert,
  HeartPulse
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { updatePageSeo } from '../utils/seo';

export const Contact: React.FC = () => {
  useEffect(() => {
    updatePageSeo({
      title: 'Contact & Directions - S.R Medical Store Nalanda',
      description: 'Visit or contact S.R Medical Store in More, Nalanda, Bihar 803111. 24/7 phone +91 86346 87777, WhatsApp medicine inquiries, and interactive Google Map.',
      canonicalPath: '/contact'
    });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Medicine Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setFormError('Please provide your name and mobile number.');
      return;
    }
    setFormError('');
    setSubmitted(true);
  };

  const handleSendToWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello ${SITE_CONFIG.businessName},\n*Inquiry from Website:*\nName: ${formData.name || 'Visitor'}\nPhone: ${formData.phone || 'N/A'}\nSubject: ${formData.subject}\nMessage: ${formData.message || 'I have an inquiry regarding medicines'}`
    );
    window.open(`https://wa.me/${SITE_CONFIG.whatsappInternational}?text=${text}`, '_blank');
  };

  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
          <Phone className="w-3.5 h-3.5" />
          Get In Touch 24/7
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          Contact S.R Medical Store
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          We are located at More, Nalanda, Bihar. Reach out any time of day or night for emergency prescriptions, product inquiries, or doorstep home delivery.
        </p>
      </section>

      {/* Emergency Alert Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-8 rounded-3xl bg-red-600/90 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
              <HeartPulse className="w-8 h-8 text-white" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider bg-white/20 px-2.5 py-0.5 rounded-full inline-block mb-1">
                24/7 Medical Emergency Desk
              </span>
              <h3 className="text-xl sm:text-2xl font-bold">Need Immediate Emergency Medicines?</h3>
              <p className="text-xs sm:text-sm text-red-100 mt-0.5">
                Our counter never shuts. Call our direct priority line for immediate nighttime dispensation.
              </p>
            </div>
          </div>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="px-6 py-3.5 rounded-xl bg-white text-red-700 hover:bg-red-50 font-bold text-sm shadow-md transition shrink-0 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Emergency Call: {SITE_CONFIG.displayPhone}
          </a>
        </div>
      </section>

      {/* Business Info Cards + Quick Action Buttons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Address */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-slate-900 dark:text-white">Store Address</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                {SITE_CONFIG.address.fullAddress}
              </p>
              <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-2 font-medium">
                {SITE_CONFIG.address.landmark}
              </p>
            </div>
            <a
              href={SITE_CONFIG.social.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:underline"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get GPS Directions</span>
            </a>
          </div>

          {/* Card 2: Phone */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-50 dark:bg-sky-950 text-sky-600 dark:text-sky-400 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-slate-900 dark:text-white">Phone & Direct Call</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                24/7 dedicated telephone support for patient queries and urgent stock checks.
              </p>
              <p className="text-sm font-bold text-slate-900 dark:text-white mt-2">
                {SITE_CONFIG.displayPhone}
              </p>
            </div>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:underline"
            >
              <span>Click to Call Now</span>
            </a>
          </div>

          {/* Card 3: WhatsApp */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400 flex items-center justify-center mb-4">
                <MessageCircle className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-slate-900 dark:text-white">WhatsApp Medicine Desk</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Send prescription photos or item inquiries for instant digital response and delivery.
              </p>
              <p className="text-sm font-bold text-slate-900 dark:text-white mt-2">
                +91 {SITE_CONFIG.whatsappNumber}
              </p>
            </div>
            <button
              onClick={handleSendToWhatsAppDirect}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-green-600 hover:underline text-left"
            >
              <span>Open WhatsApp Chat</span>
            </button>
          </div>

          {/* Card 4: Hours */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-slate-900 dark:text-white">Operating Hours</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                Open 24 Hours, 7 Days a week without holidays.
              </p>
              <div className="mt-2 inline-block text-[11px] font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md">
                Always Open (24x7)
              </div>
            </div>
            <span className="mt-4 text-xs text-slate-400">
              Counter Service & Delivery
            </span>
          </div>
        </div>
      </section>

      {/* Interactive Contact Form & Embedded Google Map */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Form */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              Send an Online Inquiry
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-6">
              Fill in your requirement below and our pharmacist team will get back to you promptly.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-emerald-900 dark:text-emerald-200">
                  Message Sent Successfully!
                </h4>
                <p className="text-xs text-emerald-700 dark:text-emerald-300">
                  Thank you {formData.name}. Our pharmacist on duty has received your inquiry. For immediate urgent response, you can also forward it directly to our WhatsApp.
                </p>
                <button
                  onClick={handleSendToWhatsAppDirect}
                  className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A8F6A] text-white text-xs font-semibold"
                >
                  <MessageCircle className="w-4 h-4" />
                  Forward to WhatsApp Now
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {formError && (
                  <div className="p-3 text-xs text-red-700 bg-red-50 dark:bg-red-950/40 rounded-xl border border-red-200 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>{formError}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="10-digit number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Inquiry Type
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    >
                      <option value="General Medicine Inquiry">General Medicine Inquiry</option>
                      <option value="Home Delivery Request">Home Delivery Request</option>
                      <option value="Medical Device Availability">Medical Device Availability</option>
                      <option value="Bulk / Surgical Order">Bulk / Surgical Order</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Your Message / Required Medicines
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="List required medicine names, dosage, or ask questions about delivery timing..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Submit Online Inquiry
                  </button>

                  <button
                    type="button"
                    onClick={handleSendToWhatsAppDirect}
                    className="py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm shadow-md transition flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Send via WhatsApp
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Embedded Google Map + Directions */}
          <div className="lg:col-span-6 bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Find Our Store on Google Maps
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 mb-4">
                Located conveniently on Museum Link Road in More, Nalanda with easy roadside access.
              </p>

              <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-inner">
                <iframe
                  title="S.R Medical Store Full Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14436.985651582294!2d85.442654!3d25.13674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f2f35759e6d8a7%3A0xbcf4c643ff124d9!2sNalanda%2C%20Bihar%20803111!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="340"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="rounded-xl"
                />
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Pincode: 803111 • Nalanda, Bihar
              </span>
              <a
                href={SITE_CONFIG.social.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm flex items-center justify-center gap-1.5 transition"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Open in Google Maps App</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
