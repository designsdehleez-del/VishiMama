import React, { useState } from 'react';
import { TrendingUp, PieChart, Award, FileCheck, ShieldAlert, GraduationCap, SearchCheck, ArrowRight, X, Check, Download, Building } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  TrendingUp: TrendingUp,
  PieChart: PieChart,
  Award: Award,
  FileCheck: FileCheck,
  ShieldAlert: ShieldAlert,
  GraduationCap: GraduationCap,
  SearchCheck: SearchCheck,
};

export default function Services({ lang }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedService, setSelectedService] = useState(null);

  const practiceAreas = portfolioData[lang].practiceAreas;
  const categories = ['All', ...new Set(practiceAreas.map((item) => item.category))];

  const filteredServices = activeCategory === 'All'
    ? practiceAreas
    : practiceAreas.filter((item) => item.category === activeCategory);

  return (
    <section id="services" className="py-14 md:py-18 bg-[#F5F2EB] border-b border-[#E5E0D8]">
      <div className="site-container">
        
        {/* Section Label */}
        <span className="section-label">
          {lang === 'hi' ? 'अभ्यास क्षेत्र एवं सेवाएँ' : 'Services & Practice Areas'}
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#1C1917] mb-2">
          {lang === 'hi' ? 'कॉर्पोरेट वित्तीय परामर्श सेवाएँ' : 'Corporate Financial Advisory'}
        </h2>
        <p className="text-[#7A7368] text-sm sm:text-base mb-6 font-sans">
          {lang === 'hi' 
            ? 'पूंजी जुटाने, परिसंपत्ति मूल्यांकन, व्यवहार्यता अध्ययन और ऋण पुनरुद्धार में संस्थागत स्तर का परामर्श।' 
            : 'Institutional-grade corporate financial advisory across capital raising, asset valuation, feasibility studies, and debt turnaround.'}
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded text-xs font-medium transition-all font-sans ${
                activeCategory === cat
                  ? 'bg-[#1C1917] text-white'
                  : 'bg-[#FFFFFF] text-[#38342F] hover:bg-[#EBE6DC] border border-[#E5E0D8]'
              }`}
            >
              {cat === 'All' && lang === 'hi' ? 'सभी' : cat}
            </button>
          ))}
        </div>

        {/* Services List matching vikaschoudhary.vercel.app work-list */}
        <div className="space-y-5">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || TrendingUp;
            return (
              <article
                key={service.id}
                className="work-card cursor-pointer group"
                onClick={() => setSelectedService(service)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded bg-[#F5F2EB] border border-[#E5E0D8] flex items-center justify-center text-[#B45309]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-[#1C1917] group-hover:text-[#B45309] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B45309] bg-[#EBE6DC] px-2 py-0.5 rounded self-start sm:self-auto font-sans">
                    {service.category}
                  </span>
                </div>

                <p className="text-sm text-[#38342F] leading-relaxed mb-4 font-sans">
                  {service.shortDescription}
                </p>

                {/* Scope Tags */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-[#E5E0D8]">
                  <div className="flex flex-wrap items-center gap-1.5">
                    {service.scope.slice(0, 3).map((item, idx) => (
                      <span key={idx} className="tag-pill">
                        {item.split(' ')[0]} {item.split(' ')[1] || ''}
                      </span>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1C1917] group-hover:text-[#B45309] transition-colors font-sans">
                    <span>{lang === 'hi' ? 'वितरण का विवरण देखें →' : 'View Deliverables →'}</span>
                  </span>
                </div>
              </article>
            );
          })}
        </div>

      </div>

      {/* Modal View */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1917]/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#FFFFFF] border border-[#E5E0D8] max-w-2xl w-full rounded-xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-xl">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 rounded bg-[#EBE6DC] hover:bg-[#DDD7CC] text-[#1C1917]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3.5 mb-5">
              <div className="w-12 h-12 rounded-lg bg-[#1C1917] text-[#F59E0B] flex items-center justify-center font-bold">
                {React.createElement(iconMap[selectedService.iconName] || TrendingUp, { className: "w-6 h-6" })}
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#B45309] font-sans">
                  {selectedService.category}
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#1C1917]">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-[#38342F] leading-relaxed mb-6 font-sans">
              {selectedService.fullDescription}
            </p>

            {/* Scope Breakdown */}
            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-bold text-[#7A7368] uppercase tracking-wider font-sans">
                {lang === 'hi' ? 'कार्य का विस्तृत विवरण एवं परिणाम' : 'Detailed Scope of Work & Deliverables'}
              </h4>
              <div className="space-y-2">
                {selectedService.scope.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded bg-[#F5F2EB] border border-[#E5E0D8] text-xs sm:text-sm text-[#1C1917] font-sans">
                    <Check className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Clients */}
            <div className="p-4 rounded bg-[#EBE6DC] border border-[#DDD7CC] mb-6">
              <div className="text-xs font-bold text-[#B45309] uppercase tracking-wider mb-1 flex items-center gap-1.5 font-sans">
                <Building className="w-4 h-4 text-[#B45309]" />
                <span>{lang === 'hi' ? 'लक्ष्य ग्राहक प्रोफ़ाइल' : 'Target Client Profile'}</span>
              </div>
              <p className="text-xs sm:text-sm text-[#1C1917] font-medium font-sans">
                {selectedService.targetClients}
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="#inquiry"
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#1C1917] hover:bg-[#2E2A27] text-white font-medium text-xs shadow-sm"
              >
                <span>{lang === 'hi' ? 'इस सेवा के बारे में पूछें' : 'Inquire About This Service'}</span>
                <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
              </a>

              <a
                href={selectedService.pdfLink}
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#FFFFFF] hover:bg-[#EBE6DC] text-[#1C1917] font-medium text-xs border border-[#E5E0D8]"
              >
                <Download className="w-4 h-4 text-[#7A7368]" />
                <span>{lang === 'hi' ? 'क्षमता डेक डाउनलोड करें' : 'Download Capability Deck'}</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
