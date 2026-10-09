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
    <section id="services" className="py-16 md:py-24 bg-[#EFECE6] border-y border-[#D6CEC0]">
      <div className="max-w-[92rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F2EB] border border-[#D6CEC0] text-xs font-bold text-[#B45309] uppercase tracking-wider">
            {lang === 'en' ? 'Core Advisory Practice Areas' : 'मुख्य परामर्श सेवाएं'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1917] tracking-tight">
            {lang === 'en' ? 'Institutional Corporate Finance & Advisory Services' : 'संस्थागत कॉर्पोरेट वित्त एवं परामर्श सेवाएं'}
          </h2>
          <p className="text-base sm:text-lg text-[#57534E]">
            {lang === 'en'
              ? 'Hover over any practice area card to expand full institutional scope and engagement details.'
              : 'किसी भी सेवा कार्ड पर कर्सर रखकर विस्तृत विवरण और कार्य क्षेत्र देखें।'}
          </p>
        </div>

        {/* 6-Column Dark Cards Grid with Hover Expansion */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-start">
          {practiceAreas.slice(0, 6).map((service) => {
            const IconComponent = iconMap[service.iconName] || TrendingUp;
            const isHovered = hoveredId === service.id;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`bg-[#1C1917] rounded-xl border border-[#292524] p-5 text-[#F5F2EB] shadow-md hover:shadow-2xl hover:border-[#B45309] transition-all duration-300 ease-in-out relative flex flex-col justify-between overflow-hidden group cursor-pointer ${
                  isHovered ? 'ring-1 ring-[#B45309] bg-[#1C1917]' : 'h-auto'
                }`}
              >
                <div className="space-y-3">
                  
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-wider text-[#B45309] bg-[#292524] px-2.5 py-1 rounded-md border border-[#383330] uppercase">
                      {service.category}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-[#292524] text-[#B45309] flex items-center justify-center border border-[#383330] group-hover:bg-[#B45309] group-hover:text-white transition-colors shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-base font-bold text-[#F5F2EB] group-hover:text-[#B45309] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs text-[#D6CEC0] leading-relaxed line-clamp-3">
                    {service.shortDescription}
                  </p>

                  {/* Expanded Content (Opens gracefully when hovered) */}
                  <div
                    className={`transition-all duration-300 ease-in-out space-y-3 overflow-hidden ${
                      isHovered ? 'max-h-[500px] opacity-100 pt-2 border-t border-[#292524]' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <span className="block text-[10px] font-bold text-[#A8A29E] uppercase tracking-wider">
                        {lang === 'en' ? 'Scope Highlights:' : 'प्रमुख कार्य क्षेत्र:'}
                      </span>
                      <ul className="space-y-1 text-xs text-[#D6CEC0]">
                        {service.scope.slice(0, 4).map((item, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B45309] shrink-0 mt-0.5" />
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-1">
                      <span className="block text-[10px] font-bold text-[#A8A29E] uppercase tracking-wider mb-0.5">
                        {lang === 'en' ? 'Target Clients:' : 'लक्षित ग्राहक:'}
                      </span>
                      <p className="text-[11px] text-[#A8A29E] leading-tight">
                        {service.targetClients}
                      </p>
                    </div>
                  </div>

                </div>

                {/* Bottom Action Footer */}
                <div className="pt-3 mt-3 border-t border-[#292524] flex items-center justify-between text-xs">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalService(service);
                    }}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#B45309] hover:text-white transition-colors"
                  >
                    <span>{lang === 'en' ? 'Full Details' : 'विवरण'}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={service.pdfLink}
                      download
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 rounded-md text-[#A8A29E] hover:text-[#F5F2EB] hover:bg-[#292524] transition-colors"
                      title="Download Service PDF"
                    >
                      <Download className="w-3.5 h-3.5" />
                    </a>

                    <ChevronDown className={`w-3.5 h-3.5 text-[#78716C] transition-transform duration-300 ${isHovered ? 'rotate-180 text-[#B45309]' : ''}`} />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* 7th Practice Area / Additional Services Bar */}
        {practiceAreas.length > 6 && (
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-1 gap-4">
            {practiceAreas.slice(6).map((service) => {
              const IconComponent = iconMap[service.iconName] || SearchCheck;
              const isHovered = hoveredId === service.id;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setHoveredId(service.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`bg-[#1C1917] rounded-xl border border-[#292524] p-5 text-[#F5F2EB] shadow-md hover:shadow-2xl hover:border-[#B45309] transition-all duration-300 ease-in-out cursor-pointer ${
                    isHovered ? 'ring-1 ring-[#B45309]' : ''
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#292524] text-[#B45309] flex items-center justify-center border border-[#383330] shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold tracking-wider text-[#B45309] uppercase">
                          {service.category}
                        </span>
                        <h3 className="font-serif text-lg font-bold text-[#F5F2EB]">
                          {service.title}
                        </h3>
                        <p className="text-xs text-[#D6CEC0]">
                          {service.shortDescription}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <button
                        onClick={() => setActiveModalService(service)}
                        className="px-4 py-2 rounded-lg bg-[#B45309] text-white text-xs font-bold hover:bg-[#92400E] transition-colors flex items-center gap-1.5"
                      >
                        <span>{lang === 'en' ? 'View Full Audit Scope' : 'पूरा विवरण देखें'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <a
                        href={service.pdfLink}
                        download
                        className="p-2 rounded-lg bg-[#292524] text-[#D6CEC0] hover:text-white transition-colors"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    </div>

                  </div>

                  {/* Expanded View for 7th Service */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isHovered ? 'max-h-[300px] opacity-100 mt-4 pt-4 border-t border-[#292524]' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="block font-bold text-[#A8A29E] uppercase mb-1">
                          {lang === 'en' ? 'Scope of Engagement:' : 'कार्य क्षेत्र:'}
                        </span>
                        <ul className="space-y-1 text-[#D6CEC0]">
                          {service.scope.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-[#B45309] shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-3 bg-[#292524] rounded-lg">
                        <span className="block font-bold text-[#A8A29E] uppercase mb-1">
                          {lang === 'en' ? 'Target Clients:' : 'लक्षित ग्राहक:'}
                        </span>
                        <p className="text-[#D6CEC0]">{service.targetClients}</p>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

        {/* Bottom Download Deck Bar */}
        <div className="mt-16 p-8 rounded-2xl bg-[#1C1917] border border-[#292524] text-[#F5F2EB] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold">
              {lang === 'en' ? 'Require Full Capability Deck?' : 'क्या आपको विस्तृत कैपेबिलिटी डेक चाहिए?'}
            </h3>
            <p className="text-sm text-[#D6CEC0] max-w-2xl">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1917]/80 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#1C1917] border border-[#292524] text-[#F5F2EB] rounded-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative space-y-6">
            
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-[#A8A29E] hover:text-[#F5F2EB] hover:bg-[#292524] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-bold text-[#B45309] bg-[#292524] px-3 py-1 rounded-full border border-[#383330]">
                {activeModalService.category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#F5F2EB]">
                {activeModalService.title}
              </h3>
            </div>

            <p className="text-sm text-[#D6CEC0] leading-relaxed">
              {activeModalService.fullDescription}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#A8A29E] uppercase tracking-wider">
                {lang === 'en' ? 'Complete Scope of Engagement:' : 'संपूर्ण जुड़ाव कार्य क्षेत्र:'}
              </h4>
              <ul className="space-y-2.5">
                {activeModalService.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#F5F2EB]">
                    <CheckCircle2 className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#292524] border border-[#383330] space-y-1">
              <span className="block text-xs font-bold text-[#A8A29E] uppercase tracking-wider">
                {lang === 'en' ? 'Target Clients:' : 'लक्षित ग्राहक:'}
              </span>
              <p className="text-xs font-medium text-[#F5F2EB]">
                {activeModalService.targetClients}
              </p>
            </div>

            <div className="flex items-center justify-end gap-4 pt-4 border-t border-[#292524]">
              <a
                href={activeModalService.pdfLink}
                download
                className="px-5 py-2.5 rounded-lg bg-[#B45309] text-white text-xs font-medium hover:bg-[#92400E] transition-colors flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Download Service PDF' : 'सर्विस पीडीएफ डाउनलोड करें'}</span>
              </a>
              <button
                onClick={() => setActiveModalService(null)}
                className="px-5 py-2.5 rounded-lg border border-[#383330] bg-[#292524] text-xs font-semibold text-[#F5F2EB]"
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
