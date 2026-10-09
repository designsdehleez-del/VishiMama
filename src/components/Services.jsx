import React, { useState } from 'react';
import { 
  TrendingUp, 
  PieChart, 
  Award, 
  FileCheck, 
  ShieldAlert, 
  GraduationCap, 
  SearchCheck, 
  ArrowRight, 
  CheckCircle2, 
  Download,
  ChevronDown,
  X 
} from 'lucide-react';

const iconMap = {
  TrendingUp,
  PieChart,
  Award,
  FileCheck,
  ShieldAlert,
  GraduationCap,
  SearchCheck
};

export default function Services({ data, lang }) {
  const { practiceAreas } = data;
  const [activeModalService, setActiveModalService] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="services" className="py-16 md:py-24 bg-[#F5F2EB] border-y border-[#D6CEC0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFECE6] border border-[#D6CEC0] text-xs font-bold text-[#B45309] uppercase tracking-wider shadow-sm">
            {lang === 'en' ? 'Core Advisory Practice Areas' : 'मुख्य परामर्श सेवाएं'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
            {lang === 'en' ? 'Institutional Corporate Finance & Advisory Services' : 'संस्थागत कॉर्पोरेट वित्त एवं परामर्श सेवाएं'}
          </h2>
          <p className="text-base sm:text-lg text-[#57534E]">
            {lang === 'en'
              ? 'Hover over any card to expand full institutional scope and engagement details.'
              : 'किसी भी सेवा कार्ड पर कर्सर रखकर विस्तृत विवरण और कार्य क्षेत्र देखें।'}
          </p>
        </div>

        {/* 3x2 Grid Layout (3 cards in a row, 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {practiceAreas.slice(0, 6).map((service) => {
            const IconComponent = iconMap[service.iconName] || TrendingUp;
            const isHovered = hoveredId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`rounded-2xl border transition-all duration-300 ease-in-out relative flex flex-col justify-between overflow-hidden cursor-pointer shadow-lg ${
                  isHovered
                    ? 'bg-[#0F172A] border-[#B45309] ring-2 ring-[#B45309]/30 shadow-2xl scale-[1.01]'
                    : 'bg-[#1E293B] border-[#334155] hover:border-[#B45309]'
                } p-6 sm:p-7 text-[#F8FAFC]`}
              >
                <div className="space-y-4">
                  
                  {/* Top Badge & Icon Bar */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-wider text-[#F59E0B] bg-[#0F172A] px-3 py-1 rounded-full border border-[#B45309]/40 uppercase shadow-sm">
                      {service.category}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-[#0F172A] text-[#F59E0B] flex items-center justify-center border border-[#B45309]/30 group-hover:bg-[#B45309] group-hover:text-white transition-colors shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-[#F8FAFC] group-hover:text-[#F59E0B] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-[#94A3B8] leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Expandable Details Container (Opens on Cursor Hover) */}
                  <div
                    className={`transition-all duration-300 ease-in-out space-y-3 overflow-hidden ${
                      isHovered ? 'max-h-[500px] opacity-100 pt-3 border-t border-[#334155]' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="space-y-2">
                      <span className="block text-xs font-bold text-[#CBD5E1] uppercase tracking-wider">
                        {lang === 'en' ? 'Scope Highlights:' : 'प्रमुख कार्य क्षेत्र:'}
                      </span>
                      <ul className="space-y-1.5 text-xs text-[#CBD5E1]">
                        {service.scope.slice(0, 4).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 p-3 rounded-lg bg-[#0F172A]/80 border border-[#334155]">
                      <span className="block text-[11px] font-bold text-[#94A3B8] uppercase tracking-wider mb-0.5">
                        {lang === 'en' ? 'Target Clients:' : 'लक्षित ग्राहक:'}
                      </span>
                      <p className="text-xs text-[#E2E8F0]">
                        {service.targetClients}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Card Action Footer */}
                <div className="pt-4 mt-4 border-t border-[#334155] flex items-center justify-between text-xs">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalService(service);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F59E0B] hover:text-white transition-colors"
                  >
                    <span>{lang === 'en' ? 'View Full Scope' : 'पूरा विवरण देखें'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={service.pdfLink}
                      download
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg text-[#94A3B8] hover:text-white hover:bg-[#0F172A] transition-colors"
                      title="Download PDF"
                    >
                      <Download className="w-4 h-4" />
                    </a>
                    <ChevronDown className={`w-4 h-4 text-[#94A3B8] transition-transform duration-300 ${isHovered ? 'rotate-180 text-[#F59E0B]' : ''}`} />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* 7th Practice Area Card (Full Width Banner below 3x2 Grid) */}
        {practiceAreas.length > 6 && (
          <div className="mt-8">
            {practiceAreas.slice(6).map((service) => {
              const IconComponent = iconMap[service.iconName] || SearchCheck;
              const isHovered = hoveredId === service.id;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`rounded-2xl border transition-all duration-300 ease-in-out p-6 text-[#F8FAFC] shadow-lg cursor-pointer ${
                    isHovered
                      ? 'bg-[#0F172A] border-[#B45309] ring-2 ring-[#B45309]/30'
                      : 'bg-[#1E293B] border-[#334155] hover:border-[#B45309]'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#0F172A] text-[#F59E0B] flex items-center justify-center border border-[#B45309]/30 shrink-0">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-bold tracking-wider text-[#F59E0B] uppercase">
                          {service.category}
                        </span>
                        <h3 className="font-serif text-xl font-bold text-[#F8FAFC]">
                          {service.title}
                        </h3>
                        <p className="text-sm text-[#94A3B8]">
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <button
                        onClick={() => setActiveModalService(service)}
                        className="px-5 py-2.5 rounded-lg bg-[#B45309] text-white text-xs font-bold hover:bg-[#92400E] transition-colors flex items-center gap-2 shadow-md"
                      >
                        <span>{lang === 'en' ? 'View Full Scope' : 'पूरा विवरण देखें'}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <a
                        href={service.pdfLink}
                        download
                        className="p-2.5 rounded-lg bg-[#0F172A] text-[#94A3B8] hover:text-white transition-colors"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    </div>

                  </div>

                  {/* Expandable details on hover */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isHovered ? 'max-h-[300px] opacity-100 mt-6 pt-6 border-t border-[#334155]' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
                      <div>
                        <span className="block font-bold text-[#CBD5E1] uppercase mb-2">
                          {lang === 'en' ? 'Scope of Engagement:' : 'कार्य क्षेत्र:'}
                        </span>
                        <ul className="space-y-1.5 text-[#94A3B8]">
                          {service.scope.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-4 bg-[#0F172A] rounded-xl border border-[#334155]">
                        <span className="block font-bold text-[#CBD5E1] uppercase mb-1">
                          {lang === 'en' ? 'Target Clients:' : 'लक्षित ग्राहक:'}
                        </span>
                        <p className="text-sm text-[#94A3B8]">{service.targetClients}</p>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Download Deck Bar */}
        <div className="mt-16 p-8 rounded-2xl bg-[#1E293B] border border-[#334155] text-[#F8FAFC] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold">
              {lang === 'en' ? 'Require Full Capability Deck?' : 'क्या आपको विस्तृत कैपेबिलिटी डेक चाहिए?'}
            </h3>
            <p className="text-sm text-[#94A3B8] max-w-2xl">
              {lang === 'en'
                ? 'Download our comprehensive 2026 Corporate Advisory Services Capability Deck detailing past deal sizes, fee benchmarks, and advisory terms.'
                : 'पिछली डील साइज़ और परामर्श शर्तों के साथ विस्तृत कॉर्पोरेट सलाहकारी डेक (PDF) डाउनलोड करें।'}
            </p>
          </div>
          <a
            href="service_pdfs/Corporate_Services_Capability_Deck.pdf"
            download
            className="px-6 py-3.5 rounded-lg bg-[#B45309] text-white font-medium text-sm hover:bg-[#92400E] transition-colors shrink-0 flex items-center gap-2 shadow-md"
          >
            <Download className="w-4 h-4" />
            <span>{lang === 'en' ? 'Download Corporate Capability Deck' : 'कॉर्पोरेट कैपेबिलिटी डेक डाउनलोड करें'}</span>
          </a>
        </div>

      </div>

      {/* Modal for Full Service Scope */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0F172A]/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#1E293B] border border-[#334155] text-[#F8FAFC] rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative space-y-6">
            
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#0F172A] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-bold text-[#F59E0B] bg-[#0F172A] px-3 py-1 rounded-full border border-[#B45309]/40 uppercase">
                {activeModalService.category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
                {activeModalService.title}
              </h3>
            </div>

            <p className="text-sm text-[#CBD5E1] leading-relaxed">
              {activeModalService.fullDescription}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#94A3B8] uppercase tracking-wider">
                {lang === 'en' ? 'Complete Scope of Engagement:' : 'संपूर्ण जुड़ाव कार्य क्षेत्र:'}
              </h4>
              <ul className="space-y-2.5">
                {activeModalService.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#F8FAFC]">
                    <CheckCircle2 className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#0F172A] border border-[#334155] space-y-1">
              <span className="block text-xs font-bold text-[#94A3B8] uppercase tracking-wider">
                {lang === 'en' ? 'Target Clients:' : 'लक्षित ग्राहक:'}
              </span>
              <p className="text-xs font-medium text-[#F8FAFC]">
                {activeModalService.targetClients}
              </p>
            </div>

            <div className="flex items-center justify-end gap-4 pt-4 border-t border-[#334155]">
              <a
                href={activeModalService.pdfLink}
                download
                className="px-5 py-2.5 rounded-lg bg-[#B45309] text-white text-xs font-medium hover:bg-[#92400E] transition-colors flex items-center gap-2 shadow-md"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Download Service PDF' : 'सर्विस पीडीएफ डाउनलोड करें'}</span>
              </a>
              <button
                onClick={() => setActiveModalService(null)}
                className="px-5 py-2.5 rounded-lg border border-[#334155] bg-[#0F172A] text-xs font-semibold text-[#F8FAFC]"
              >
                {lang === 'en' ? 'Close' : 'बंद करें'}
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
