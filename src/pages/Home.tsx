import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  Navigation,
  ShieldCheck,
  Clock,
  Truck,
  HeartPulse,
  Sparkles,
  Award,
  Users,
  ChevronRight,
  Star,
  HelpCircle,
  CheckCircle2,
  Mail,
  ArrowRight,
  Activity,
  Package,
  Stethoscope
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { updatePageSeo } from '../utils/seo';

interface HomeProps {
  onOpenOrderModal: (medicine?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenOrderModal }) => {
  useEffect(() => {
    updatePageSeo({
      title: 'Home - 24/7 Pharmacy & Medical Store in Nalanda',
      description: 'S.R Medical Store in More, Nalanda, Bihar provides genuine medicines, surgical items, healthcare devices, and prompt 24/7 home delivery.',
      canonicalPath: '/'
    });
  }, []);

  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.includes('@')) {
      setNewsletterSubscribed(true);
      setTimeout(() => setNewsletterSubscribed(false), 5000);
      setNewsletterEmail('');
    }
  };

  const featuredServices = [
    {
      title: 'Prescription Medicines',
      desc: '100% authentic drugs verified from licensed pharma distributors with batch traceability.',
      icon: Stethoscope,
      category: 'Prescription',
      tag: 'Verified'
    },
    {
      title: '24/7 Emergency Counter',
      desc: 'Round-the-clock physical store counter and priority night dispensation for critical patient needs.',
      icon: Clock,
      category: 'Emergency',
      tag: '24/7 Open'
    },
    {
      title: 'Express Home Delivery',
      desc: 'Fast, secure doorstep delivery of emergency and routine medicines throughout Nalanda and nearby areas.',
      icon: Truck,
      category: 'Delivery',
      tag: 'Doorstep'
    },
    {
      title: 'Medical Devices & Diagnostics',
      desc: 'Digital BP monitors, blood glucose meters, nebulizers, pulse oximeters, and surgical supports.',
      icon: Activity,
      category: 'Devices',
      tag: 'Warranty'
    },
    {
      title: 'Baby & Maternal Care',
      desc: 'Certified infant nutrition formulas, gentle dermatological washes, diapering, and lactation aids.',
      icon: HeartPulse,
      category: 'Mother & Baby',
      tag: 'Gentle'
    },
    {
      title: 'OTC Health & Supplements',
      desc: 'Immunity boosters, vitamins, calcium tablets, digestive antacids, and everyday first aid kits.',
      icon: Package,
      category: 'Wellness',
      tag: 'Popular'
    }
  ];

  const whyChooseUs = [
    {
      title: '100% Genuine Medicines',
      desc: 'Direct sourcing from authorized Indian pharmaceutical manufacturers with zero compromise on authenticity.',
      icon: ShieldCheck
    },
    {
      title: '24/7 Emergency Availability',
      desc: 'Unlike standard shops, our pharmacy counter operates day and night for urgent healthcare emergencies.',
      icon: Clock
    },
    {
      title: 'Qualified Pharmacist Guidance',
      desc: 'Knowledgeable pharmacists available to guide you on dosages, precautions, and generic drug alternatives.',
      icon: Award
    },
    {
      title: 'Fast WhatsApp Ordering',
      desc: 'Snap a picture of your doctor prescription and have your medicines dispatched within minutes.',
      icon: MessageCircle
    }
  ];

  const featuredProductsPreview = [
    {
      name: 'Dolo 650 Tablet',
      brand: 'Micro Labs',
      type: 'Antipyretic / Pain Relief',
      mrp: '₹33.50',
      status: 'In Stock'
    },
    {
      name: 'Augmentin 625 Duo',
      brand: 'GSK Healthcare',
      type: 'Antibacterial Medication',
      mrp: '₹204.00',
      status: 'In Stock'
    },
    {
      name: 'Omron BP Monitor',
      brand: 'Omron Healthcare',
      type: 'Digital Diagnostic Kit',
      mrp: '₹2,150.00',
      status: 'Limited Stock'
    },
    {
      name: 'Benadryl Cough Syrup',
      brand: 'Johnson & Johnson',
      type: 'Throat & Cough Relief',
      mrp: '₹138.00',
      status: 'In Stock'
    }
  ];

  const reviewsPreview = [
    {
      name: 'Dr. Alok Verma',
      location: 'Nalanda',
      comment: 'S.R Medical Store is a lifesaver in More, Nalanda. Their 24-hour service means my patients can find emergency injectables and critical tablets even at midnight.',
      rating: 5,
      date: 'Recent verified customer'
    },
    {
      name: 'Priya Ranjan Singh',
      location: 'Mohanpur',
      comment: 'Very polite staff and fast WhatsApp home delivery. Sent my father prescription photo, and medicines arrived packed safely within 45 minutes.',
      rating: 5,
      date: 'Verified order'
    },
    {
      name: 'Sunita Devi',
      location: 'Nalanda More',
      comment: 'Always get genuine baby care products and my mother BP medications at fair MRP prices. Highest rated medical store in our town for a reason!',
      rating: 5,
      date: 'Verified customer'
    }
  ];

  const faqPreview = [
    {
      q: 'Are you open 24 hours in Nalanda?',
      a: 'Yes, S.R Medical Store operates 24 hours a day, 7 days a week, including Sundays and public holidays, to ensure uninterrupted access to emergency medicines.'
    },
    {
      q: 'How can I order medicines via WhatsApp?',
      a: 'Simply click the "WhatsApp Order" button or message 8634687777 with your medicine list or a clear photo of your prescription and address. Our pharmacist will confirm and dispatch.'
    },
    {
      q: 'Do you offer home delivery in Nalanda and nearby areas?',
      a: 'Yes! We provide prompt doorstep delivery across Nalanda, Mohanpur, and adjacent localities.'
    },
    {
      q: 'Is a prescription mandatory for all medicines?',
      a: 'Prescription is required for Scheduled drugs (like antibiotics, blood pressure, diabetes, and psychiatric medications). General OTC items, vitamins, and healthcare devices can be purchased directly.'
    }
  ];

  const healthTips = [
    {
      title: 'Safe Storage of Insulin & Syrups at Home',
      date: 'Healthcare Guide',
      excerpt: 'Learn why temperature regulation is critical for preserving drug efficacy and avoiding degradation during summer.',
      category: 'Medicine Care'
    },
    {
      title: 'Managing Seasonal Viral Infections & Fevers',
      date: 'Wellness Tips',
      excerpt: 'Essential hydration protocols, paracetamol dosing guidelines, and when you should immediately see a physician.',
      category: 'Seasonal Health'
    },
    {
      title: 'Digital BP & Sugar Tracking: Best Practices',
      date: 'Home Diagnostics',
      excerpt: 'Tips for obtaining accurate diagnostic readings in the comfort of your home using modern digital monitors.',
      category: 'Diagnostics'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* 1. HERO BANNER */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-950 text-white py-20 sm:py-28">
        {/* Background Ambient Glow & Healthcare Pattern */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                24/7 Verified Pharmacy in More, Nalanda
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
                Your Trusted Medical Store for{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">
                  Genuine Medicines
                </span>{' '}
                & Healthcare Needs
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Providing genuine medicines, healthcare products, surgical supplies, baby care, personal care and daily medical essentials at affordable prices.
              </p>

              {/* Hero Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-sm shadow-lg shadow-sky-900/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <Phone className="w-4 h-4" />
                  Call Now ({SITE_CONFIG.displayPhone})
                </a>

                <button
                  onClick={() => onOpenOrderModal()}
                  className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0A8F6A] hover:bg-[#087a5a] text-white font-bold text-sm shadow-lg shadow-emerald-950/40 transition transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Order
                </button>

                <a
                  href={SITE_CONFIG.social.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 bg-slate-800/80 hover:bg-slate-800 text-slate-200 font-semibold text-sm transition"
                >
                  <Navigation className="w-4 h-4 text-emerald-400" />
                  Get Directions
                </a>
              </div>

              {/* Trust Points */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-slate-800 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>100% Genuine</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>24/7 Emergency Counter</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-400 shrink-0 fill-amber-400" />
                  <span>5.0 Star Rated Store</span>
                </div>
              </div>
            </div>

            {/* Right Visual Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl p-6 sm:p-8 bg-slate-800/60 border border-slate-700/80 shadow-2xl backdrop-blur-lg">
                <div className="flex items-center justify-between pb-4 border-b border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white font-bold text-xl">
                      SR
                    </div>
                    <div>
                      <h2 className="font-bold text-lg text-white">S.R Medical Store</h2>
                      <p className="text-xs text-emerald-400 font-medium">Licensed Chemist & Druggist</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800 text-[11px] font-semibold">
                    Open Now
                  </span>
                </div>

                <div className="mt-5 space-y-3.5 text-sm">
                  <div className="flex items-start gap-3 text-slate-300">
                    <Navigation className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>More, Museum Link Road, Nalanda, Bihar 803111</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-300">
                    <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>24 Hours Open (Every Day)</span>
                  </div>

                  <div className="flex items-center gap-3 text-slate-300">
                    <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Emergency Home Delivery Available</span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-700">
                  <button
                    onClick={() => onOpenOrderModal()}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold text-sm shadow-md hover:from-emerald-500 hover:to-teal-500 transition"
                  >
                    Quick Prescription Upload
                  </button>
                  <p className="text-[11px] text-center text-slate-400 mt-2">
                    Send prescription photo on WhatsApp for immediate billing & dispatch
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SHORT ABOUT PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-sm border border-slate-200/80 dark:border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
              About S.R Medical Store
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              A Legacy of Trust, Genuine Care & 24/7 Healthcare in Nalanda
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              Established in the historic heart of Nalanda, Bihar, S.R Medical Store has grown to become the community's most dependable pharmaceutical ally. Located on Museum Link Road at More, we take pride in safeguarding public health through uncompromising medicine genuineness, 24/7 accessibility, and honest pricing.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60">
                <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">24/7</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Emergency Support</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60">
                <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">5.0 ★</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Customer Rating</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700/60 col-span-2 sm:col-span-1">
                <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">100%</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">Authentic Drugs</div>
              </div>
            </div>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition"
              >
                <span>Read Our Full Story & Mission</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1586015555751-63bb77f4322a?auto=format&fit=crop&w=800&q=80"
                alt="Pharmacy interior shelves and medicine store"
                className="w-full h-72 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED SERVICES (MAXIMUM 6) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
              Our Core Offerings
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Featured Pharmacy Services
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
              Comprehensive pharmaceutical solutions tailored for patient safety, convenience, and emergency preparedness.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            <span>View All Categories & Services</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredServices.map((srv, idx) => {
            const Icon = srv.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-700/60 transition group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    {srv.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {srv.desc}
                </p>
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <Link
                    to="/services"
                    className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                  >
                    Learn Details & Stock
                  </Link>
                  <button
                    onClick={() => onOpenOrderModal(srv.title)}
                    className="text-xs text-slate-500 hover:text-emerald-600 transition"
                  >
                    Order Now →
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="bg-slate-100/70 dark:bg-slate-900/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
              The S.R Advantage
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Why Nalanda Families Trust S.R Medical Store
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              Combining 24/7 physical dependability with modern digital convenience and genuine pharmaceuticals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-emerald-600 text-white flex items-center justify-center mb-4 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
              Daily Medical Essentials
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Popular Medicines & Diagnostic Kits
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Sample products available right now at our store in More, Nalanda.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-semibold text-xs border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition"
          >
            <span>Open Medicine Stock Checker</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredProductsPreview.map((prod, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                  {prod.brand}
                </span>
                <h3 className="font-bold text-base text-slate-900 dark:text-white mt-2">
                  {prod.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  {prod.type}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400">MRP: </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{prod.mrp}</span>
                </div>
                <button
                  onClick={() => onOpenOrderModal(prod.name)}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition"
                >
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS PREVIEW */}
      <section className="bg-slate-100/70 dark:bg-slate-900/60 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1 text-amber-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
              <span className="text-xs font-bold text-slate-800 dark:text-slate-200 ml-1.5">5.0 Star Rating</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Trusted by Hundreds of Nalanda Residents
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              Summaries of verified feedback from local families and medical professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewsPreview.map((rev, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">{rev.name}</h4>
                    <span className="text-[11px] text-slate-400">{rev.location}</span>
                  </div>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                    {rev.date}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ PREVIEW */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
            Have Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            Frequently Asked Questions
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Everything you need to know about our 24/7 store, prescriptions, and home delivery.
          </p>
        </div>

        <div className="space-y-3">
          {faqPreview.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left font-bold text-sm text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800/60 transition"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                    {item.q}
                  </span>
                  <span className="text-slate-400 text-lg">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800/60">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. LATEST HEALTH TIPS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
              Pharmacist Advice
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
              Latest Health & Medicine Tips
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
              Practical guidance from our certified pharmacists to keep your family healthy.
            </p>
          </div>
          <Link
            to="/about"
            className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
          >
            Learn more about our team →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {healthTips.map((tip, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md">
                  {tip.category}
                </span>
                <h3 className="font-bold text-base text-slate-900 dark:text-white mt-3">
                  {tip.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  {tip.excerpt}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400">
                {tip.date} • Verified Pharmacist Tip
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. CALL TO ACTION (CTA) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-800 text-white p-8 sm:p-12 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-xs font-semibold backdrop-blur-xs">
              <Clock className="w-3.5 h-3.5 text-emerald-300" />
              Need Emergency Medicines Right Now?
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
              Our 24/7 Counter in Nalanda is Always Ready for You
            </h2>
            <p className="text-sm text-emerald-100 leading-relaxed">
              Don't wait when health is at stake. Call our emergency direct line or message us on WhatsApp with your prescription.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="px-6 py-3 rounded-xl bg-white text-emerald-900 font-bold text-sm shadow-md hover:bg-emerald-50 transition"
              >
                Call {SITE_CONFIG.displayPhone}
              </a>
              <button
                onClick={() => onOpenOrderModal()}
                className="px-6 py-3 rounded-xl bg-emerald-950/70 hover:bg-emerald-950 text-white font-bold text-sm border border-emerald-400/40 transition"
              >
                WhatsApp Direct Order
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 10. NEWSLETTER */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="text-center p-8 rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mx-auto mb-3 shadow-sm">
            <Mail className="w-6 h-6" />
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Stay Updated on Seasonal Health Alerts
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-md mx-auto">
            Subscribe for free medicine stock updates, wellness newsletters, and immunization schedules in Nalanda.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="mt-5 flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="Enter your email address"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              className="flex-1 px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-sm transition"
            >
              Subscribe
            </button>
          </form>

          {newsletterSubscribed && (
            <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-3">
              ✓ Thank you for subscribing! You will receive our healthcare notifications.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};
