import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Heart,
  Target,
  Eye,
  Award,
  Clock,
  MapPin,
  Phone,
  CheckCircle2,
  Calendar,
  Building2,
  UserCheck,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { updatePageSeo } from '../utils/seo';

export const About: React.FC = () => {
  useEffect(() => {
    updatePageSeo({
      title: 'About Us - S.R Medical Store Story, Mission & Values',
      description: 'Discover the story behind S.R Medical Store in More, Nalanda, Bihar. Committed to 24/7 authentic medicines, patient welfare, and community health.',
      canonicalPath: '/about'
    });
  }, []);

  const values = [
    {
      title: 'Uncompromised Drug Authenticity',
      desc: 'We procure directly from licensed drug distributors and maintain temperature-controlled storage to guarantee zero substandard or spurious medicines.',
      icon: ShieldCheck
    },
    {
      title: '24/7 Patient-First Availability',
      desc: 'Health crises have no schedule. Our doors remain open round the clock every day so no patient in Nalanda suffers for lack of critical medications.',
      icon: Clock
    },
    {
      title: 'Empathy & Affordability',
      desc: 'We believe healthcare is a fundamental right. We offer genuine generic alternatives alongside branded medicines to relieve patient financial burden.',
      icon: Heart
    },
    {
      title: 'Community Responsibility',
      desc: 'Deeply rooted in Nalanda, we serve as an educational touchpoint for preventative care, elderly wellness, and responsible antibiotic usage.',
      icon: UserCheck
    }
  ];

  const timeline = [
    {
      year: 'Foundation',
      title: 'Serving More, Nalanda',
      desc: 'Started with a modest dispensary in More, Nalanda, with a steadfast commitment to 100% genuine pharmaceutical supplies.'
    },
    {
      year: 'Expansion',
      title: '24/7 Emergency Counter',
      desc: 'Recognizing the critical need for late-night pharmaceuticals in the area, we transitioned to an around-the-clock 24/7 operational pharmacy.'
    },
    {
      year: 'Modernization',
      title: 'Digital Home Delivery & WhatsApp Care',
      desc: 'Introduced paperless prescription ordering via WhatsApp and fast doorstep delivery for senior citizens and emergency patients.'
    },
    {
      year: 'Present Day',
      title: '5.0 Star Rated Healthcare Destination',
      desc: 'Continuously stocking advanced medical devices, surgical equipment, baby care, and serving hundreds of families across Nalanda daily.'
    }
  ];

  const achievements = [
    { metric: '24/7', label: 'Uninterrupted Hours Open Every Day' },
    { metric: '10,000+', label: 'Patients & Families Served' },
    { metric: '5.0 ★', label: 'Customer Rating on Google Business' },
    { metric: '100%', label: 'Licensed Genuine Batch Verification' }
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16 sm:space-y-24">
      {/* Header & Breadcrumb */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            About S.R Medical Store
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Dedicated to the Health & Well-being of Nalanda
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
            Your neighborhood 24/7 chemist and trusted medical ally, bridging the gap between doctors' prescriptions and reliable patient recovery.
          </p>
        </div>
      </section>

      {/* Business Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 sm:p-12 border border-slate-200/80 dark:border-slate-800 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
              Our Journey
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              The Story Behind S.R Medical Store
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Located conveniently in More, Nalanda, on Museum Link Road (Bihar 803111), S.R Medical Store was established with a singular, resolute objective: to ensure that no family in our community struggles to find life-saving, genuine medications when they need them most.
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              In a sector often plagued by counterfeit medicines and irregular store hours, S.R Medical Store stepped forward as a bastion of trust. We built deep partnerships with certified pharmaceutical giants, invested in modern temperature-controlled storage, and opened a 24-hour service counter that never closes its shutters.
            </p>
            <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-800/60 text-xs text-emerald-900 dark:text-emerald-200 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                "Our reputation was earned prescription by prescription. Every customer is treated like our own family member, receiving honest advice and verified medications."
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=900&q=80"
                alt="Pharmacist organizing medicines in pharmacy"
                className="w-full h-80 sm:h-96 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-emerald-900 text-white shadow-xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-emerald-700/80 flex items-center justify-center text-emerald-300 mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-sm text-emerald-100 leading-relaxed">
              To provide immediate, round-the-clock access to 100% authentic medicines, surgical supplies, and patient healthcare essentials in Nalanda with transparency, compassionate counseling, and dependable doorstep delivery.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl border border-slate-800">
            <div className="w-12 h-12 rounded-2xl bg-slate-800 flex items-center justify-center text-emerald-400 mb-4">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              To be the gold standard of community pharmacy across Bihar, recognized for unwavering ethical drug dispensing, technological innovation through digital prescription logistics, and zero compromise on healthcare safety.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
            Our Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            Values That Guide Every Prescription
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div
                key={i}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-base text-slate-900 dark:text-white mb-2">{v.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Achievements / Numbers */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {achievements.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="text-3xl sm:text-5xl font-black text-emerald-400">
                  {item.metric}
                </div>
                <div className="text-xs sm:text-sm text-slate-300 font-medium">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Owner & Pharmacist Message */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center gap-6">
          <div className="w-24 h-24 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-2xl shrink-0 shadow-md">
            SR
          </div>
          <div className="space-y-3 text-center sm:text-left">
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
              Pharmacist In-Charge Message
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              "Your Trust is Our Greatest Asset"
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              "When you visit S.R Medical Store or send a prescription over WhatsApp, you are entrusting us with the health of someone you cherish. We take that responsibility deeply to heart. Whether it is verifying drug interactions, ensuring cold storage for vaccines, or delivering emergency medicines in the middle of the night, we are here for Nalanda 24 hours a day."
            </p>
            <div className="text-xs font-semibold text-slate-800 dark:text-slate-200 pt-1">
              — S.R Medical Store Team • More, Nalanda
            </div>
          </div>
        </div>
      </section>

      {/* Business Timeline */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
            Evolution
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            Our Business Timeline
          </h2>
        </div>

        <div className="space-y-6 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800 before:-translate-x-1/2">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-8 group"
            >
              <div className="sm:w-1/2 sm:text-right order-2 sm:order-1">
                <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-xs">
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    {item.year}
                  </span>
                  <h4 className="font-bold text-base text-slate-900 dark:text-white mt-0.5">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Dot */}
              <div className="hidden sm:flex absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-600 text-white items-center justify-center text-xs font-bold shadow-md z-10">
                {idx + 1}
              </div>

              <div className="sm:w-1/2 order-3 sm:order-2 hidden sm:block" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA to Services & Stock */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            Need to Check Current Medicine Stock?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
            Use our live online stock checker or explore category-wise services to find your medicines.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <Link
              to="/services"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition"
            >
              View Services & Check Stock
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
