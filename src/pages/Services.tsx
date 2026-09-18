import React, { useEffect } from 'react';
import {
  Pill,
  Stethoscope,
  Activity,
  HeartHandshake,
  Baby,
  Smile,
  ShieldPlus,
  Truck,
  Sparkles,
  ShoppingBag,
  CheckCircle2,
  Clock,
  ArrowRight
} from 'lucide-react';
import { MedicineStockChecker } from '../components/MedicineStockChecker';
import { updatePageSeo } from '../utils/seo';

interface ServicesProps {
  onOpenOrderModal: (medicine?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenOrderModal }) => {
  useEffect(() => {
    updatePageSeo({
      title: 'Services & Medicine Categories - S.R Medical Store Nalanda',
      description: 'Explore complete pharmaceutical services, medical devices, OTC, prescription medicines, baby care, surgical items, and live stock checker in Nalanda.',
      canonicalPath: '/services'
    });
  }, []);

  const serviceCategories = [
    {
      id: 'prescription-medicines',
      title: 'Prescription Medicines',
      icon: Stethoscope,
      badge: 'Certified Dispensing',
      desc: 'Authentic prescription drugs dispensed according to medical guidelines. We handle chronic diseases, cardiology, diabetology, neurology, and acute infections.',
      items: [
        'Anti-hypertensives & Beta-Blockers',
        'Insulin & Oral Anti-diabetics',
        'Antibiotics & Antivirals (Prescription required)',
        'Cardiovascular & Cholesterol Medications'
      ]
    },
    {
      id: 'otc-medicines',
      title: 'OTC Medicines (Over-The-Counter)',
      icon: Pill,
      badge: 'Quick Relief',
      desc: 'Immediate over-the-counter remedies for everyday ailments without needing complex specialist appointments.',
      items: [
        'Antipyretics (Dolo, Paracetamol)',
        'Antacids & Digestives (Pan, Digene, Gas relief)',
        'Cough Syrups & Decongestants (Benadryl, Ascoril)',
        'Analgesic Pain Relief Tablets & Balms'
      ]
    },
    {
      id: 'health-devices',
      title: 'Health Devices & Diagnostics',
      icon: Activity,
      badge: 'Precision Testing',
      desc: 'Reliable, calibrated home monitoring diagnostic instruments from globally acclaimed manufacturers.',
      items: [
        'Digital Blood Pressure Monitors (Omron)',
        'Blood Glucose Glucometers & Strips (Accu-Chek)',
        'Pulse Oximeters & Infrared Thermometers',
        'Compressor Nebulizers & Vaporizers'
      ]
    },
    {
      id: 'medical-equipment',
      title: 'Medical Equipment & Surgical Supplies',
      icon: ShieldPlus,
      badge: 'Hospital Grade',
      desc: 'Professional grade surgical consumables, wound dressing sets, and orthopedic supports.',
      items: [
        'Sterile Gauze, Crepe Bandages & Surgical Tape',
        'Betadine & Spirit Antiseptic Solutions',
        'Cervical Collars, Knee Braces & Lumbar Belts',
        'IV Infusion Sets, Cannulas & Disposable Syringes'
      ]
    },
    {
      id: 'baby-care',
      title: 'Baby & Infant Care',
      icon: Baby,
      badge: 'Gentle & Pure',
      desc: 'Dermatologically certified care products specifically crafted for newborns, infants, and new mothers.',
      items: [
        'Baby Formulas (Lactogen, Nan Pro, Similac)',
        'Hypoallergenic Baby Shampoos & Lotions (Sebamed, Chicco)',
        'Premium Diapers, Wipes & Diaper Rash Creams',
        'Gripe Water, Colic Drops & Teething Gels'
      ]
    },
    {
      id: 'personal-care',
      title: 'Personal Care & Hygiene',
      icon: Smile,
      badge: 'Daily Wellness',
      desc: 'High-quality personal hygiene, oral wellness, skin hydration, and sanitization products.',
      items: [
        'Medicated Soaps & Anti-dandruff Shampoos',
        'Oral Hygiene (Dental Pastes, Mouthwashes)',
        'Sanitary Napkins & Feminine Care',
        'Medical Grade Hand Rubs & Sanitizers'
      ]
    },
    {
      id: 'supplements',
      title: 'Nutritional Supplements & Vitamins',
      icon: Sparkles,
      badge: 'Immunity & Energy',
      desc: 'Dietary supplements to address micronutrient deficiencies, fatigue, and support bone density.',
      items: [
        'Calcium & Vitamin D3 (Shelcal, Calcirol)',
        'B-Complex & Zinc Formulations (Becosules)',
        'Protein Powders & Nutritional Drinks',
        'Omega-3 Fish Oils & Multivitamin Capsules'
      ]
    },
    {
      id: 'home-care',
      title: 'Home Care & Patient Aids',
      icon: HeartHandshake,
      badge: 'Comfort at Home',
      desc: 'Elderly assistance and convalescent equipment designed to support post-operative and bedridden patients.',
      items: [
        'Adult Diapers & Underpads',
        'Walking Sticks, Crutches & Walkers',
        'Air Mattresses for Bed Sore Prevention',
        'Hot Water Bags, Ice Packs & Heating Belts'
      ]
    }
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
          <Pill className="w-3.5 h-3.5" />
          Full Pharmacy Services
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
          Comprehensive Pharmacy Services & Supplies
        </h1>
        <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          From life-saving acute medications to daily baby care essentials and home medical devices, discover everything S.R Medical Store stocks for Nalanda.
        </p>
      </section>

      {/* EXCLUSIVE FEATURE: MEDICINE STOCK CHECKER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicineStockChecker onOrderMedicine={(med) => onOpenOrderModal(med)} />
      </section>

      {/* Category-Wise Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
            All Departments
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            Category-Wise Pharmaceutical Products
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
            Browse our full spectrum of healthcare inventory and order directly on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {serviceCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.id}
                className="flex flex-col justify-between p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs hover:shadow-md transition group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center group-hover:scale-105 transition">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {cat.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    {cat.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800">
                    <span className="text-[11px] font-semibold text-slate-700 dark:text-slate-300 block mb-2">
                      Key Items Stocked:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                      {cat.items.map((it, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <button
                    onClick={() => onOpenOrderModal(cat.title)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 text-xs font-semibold border border-emerald-200/60 dark:border-emerald-800/60 transition"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Inquire / Order Category</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Doorstep Delivery Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
              <Truck className="w-3.5 h-3.5" />
              Express Delivery Across Nalanda
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Need Medicines Delivered to Your Home?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed max-w-xl">
              Don't leave a sick family member unattended. Message us your address and medicine list. We deliver in Mohanpur, More, and all surrounding areas of Nalanda.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <button
              onClick={() => onOpenOrderModal()}
              className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition"
            >
              Order via WhatsApp
            </button>
            <a
              href="tel:+918634687777"
              className="w-full py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-center font-semibold text-sm border border-slate-700 transition"
            >
              Call Counter: 8634687777
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
