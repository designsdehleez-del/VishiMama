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

  return (
    <section id="services" className="py-16 md:py-24 bg-[#EFECE6] border-y border-[#D6CEC0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
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
              ? 'Over 25 years of institutional banking expertise translated into direct principal advisory for corporate enterprises, promoters, and lenders.'
              : 'कॉर्पोरेट उद्यमों, प्रमोटरों और ऋणदाताओं के लिए 25 से अधिक वर्षों का संस्थागत बैंकिंग अनुभव।'}
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((service) => {
            const IconComponent = iconMap[service.iconName] || TrendingUp;

            return (
              <div
                key={service.id}
                className="bg-[#F5F2EB] rounded-2xl p-6 sm:p-8 border border-[#D6CEC0] shadow-sm hover:shadow-md hover:border-[#B45309] transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Category Pill & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#B45309] bg-[#EFECE6] px-3 py-1 rounded-full border border-[#D6CEC0]">
                      {service.category}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-[#EFECE6] text-[#1C1917] flex items-center justify-center group-hover:bg-[#B45309] group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-bold text-[#1C1917] group-hover:text-[#B45309] transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-[#57534E] leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Key Scope Preview */}
                  <div className="space-y-2 pt-2">
                    <span className="block text-xs font-bold text-[#78716C] uppercase tracking-wider">
                      {lang === 'en' ? 'Scope Highlights:' : 'प्रमुख कार्य क्षेत्र:'}
                    </span>
                    <ul className="space-y-1.5">
                      {service.scope.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-[#44403C]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#B45309] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-6 border-t border-[#E2DCD0] flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1C1917] hover:text-[#B45309] transition-colors"
                  >
                    <span>{lang === 'en' ? 'View Full Scope' : 'पूरा विवरण देखें'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={service.pdfLink}
                    download
                    className="p-2 rounded-lg text-[#78716C] hover:text-[#B45309] hover:bg-[#EFECE6] transition-colors"
                    title="Download Service Capability Deck"
                  >
                    <Download className="w-4 h-4" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Bottom Download Deck Bar */}
        <div className="mt-16 p-8 rounded-2xl bg-[#1C1917] text-[#F5F2EB] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1917]/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#F5F2EB] rounded-2xl border border-[#D6CEC0] max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl relative space-y-6">
            
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-[#78716C] hover:text-[#1C1917] hover:bg-[#EFECE6] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-bold text-[#B45309] bg-[#EFECE6] px-3 py-1 rounded-full border border-[#D6CEC0]">
                {activeModalService.category}
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917]">
                {activeModalService.title}
              </h3>
            </div>

            <p className="text-sm text-[#44403C] leading-relaxed">
              {activeModalService.fullDescription}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-[#78716C] uppercase tracking-wider">
                {lang === 'en' ? 'Complete Scope of Engagement:' : 'संपूर्ण जुड़ाव कार्य क्षेत्र:'}
              </h4>
              <ul className="space-y-2.5">
                {activeModalService.scope.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-[#1C1917]">
                    <CheckCircle2 className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#EFECE6] border border-[#D6CEC0] space-y-1">
              <span className="block text-xs font-bold text-[#78716C] uppercase tracking-wider">
                {lang === 'en' ? 'Target Clients:' : 'लक्षित ग्राहक:'}
              </span>
              <p className="text-xs font-medium text-[#1C1917]">
                {activeModalService.targetClients}
              </p>
            </div>

            <div className="flex items-center justify-end gap-4 pt-4 border-t border-[#E2DCD0]">
              <a
                href={activeModalService.pdfLink}
                download
                className="px-5 py-2.5 rounded-lg bg-[#1C1917] text-[#F5F2EB] text-xs font-medium hover:bg-[#B45309] transition-colors flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Download Service PDF' : 'सर्विस पीडीएफ डाउनलोड करें'}</span>
              </a>
              <button
                onClick={() => setActiveModalService(null)}
                className="px-5 py-2.5 rounded-lg border border-[#D6CEC0] bg-[#EFECE6] text-xs font-semibold text-[#1C1917]"
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
