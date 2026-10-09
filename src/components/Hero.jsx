import React from 'react';
import { ArrowUpRight, Download, CheckCircle2, Building2, Briefcase } from 'lucide-react';

export default function Hero({ data, lang }) {
  const { personalInfo } = data;

  const bankPills = [
    'IndusInd Bank',
    'Kotak Mahindra Bank',
    'HDFC Bank',
    'ICICI Bank',
    'YES Bank',
    'ESAF Bank'
  ];

  return (
    <section id="home" className="pt-8 pb-16 md:pt-16 md:pb-24 bg-[#F5F2EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tagline Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFECE6] border border-[#D6CEC0] text-xs font-semibold text-[#B45309] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#B45309] animate-pulse"></span>
          <span>{personalInfo.tagline}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Hero Column (Left - 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] tracking-tight leading-[1.15]">
              {personalInfo.name}
            </h1>
            
            <p className="text-xl sm:text-2xl font-serif text-[#B45309] font-medium leading-snug">
              {personalInfo.title}
            </p>

            {/* Bio Paragraphs */}
            <div className="space-y-4 text-[#44403C] leading-relaxed text-base sm:text-lg">
              {personalInfo.bioParagraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Bank Affiliation Tag Pills */}
            <div className="pt-2">
              <span className="block text-xs font-bold text-[#78716C] uppercase tracking-wider mb-2.5">
                {lang === 'en' ? 'Institutional Leadership Experience:' : 'संस्थागत नेतृत्व अनुभव:'}
              </span>
              <div className="flex flex-wrap gap-2">
                {bankPills.map((bank, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#EFECE6] border border-[#D6CEC0] text-xs font-medium text-[#1C1917]"
                  >
                    <Building2 className="w-3.5 h-3.5 text-[#B45309]" />
                    {bank}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#1C1917] text-[#F5F2EB] font-medium text-sm hover:bg-[#B45309] transition-all shadow-md group"
              >
                <span>{lang === 'en' ? 'Explore Advisory Practice' : 'परामर्श सेवाएं देखें'}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href="cv/Vishwanath_Sharma_CV.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#EFECE6] border border-[#D6CEC0] text-[#1C1917] font-medium text-sm hover:bg-[#D6CEC0] transition-colors"
              >
                <Download className="w-4 h-4 text-[#B45309]" />
                <span>{lang === 'en' ? 'Download Executive CV' : 'सीवी डाउनलोड करें'}</span>
              </a>

              <a
                href="service_pdfs/Corporate_Services_Capability_Deck.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg border border-[#B45309] text-[#B45309] font-medium text-sm hover:bg-[#B45309] hover:text-white transition-all"
              >
                <Briefcase className="w-4 h-4" />
                <span>{lang === 'en' ? 'Capability Deck (PDF)' : 'कैपेबिलिटी डेक (PDF)'}</span>
              </a>
            </div>
          </div>

          {/* Right Column (5 cols) - Photo & Currently Working On */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Profile Photo Wrapper */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#D6CEC0] shadow-xl bg-[#EFECE6]">
              <img
                src={personalInfo.photo}
                alt={personalInfo.name}
                className="w-full h-auto object-cover object-center max-h-[480px]"
                loading="eager"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#1C1917]/90 via-[#1C1917]/40 to-transparent p-6 text-[#F5F2EB]">
                <div className="font-serif text-lg font-bold">{personalInfo.name}</div>
                <div className="text-xs text-[#D6CEC0]">Former Regional Head, IndusInd Bank & Kotak Bank</div>
              </div>
            </div>

            {/* Currently Working On Callout Block (.now-block) */}
            <div className="now-block bg-[#EFECE6] border border-[#D6CEC0] rounded-xl p-5 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-bold text-[#B45309] uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-[#B45309] animate-pulse"></span>
                <span>{lang === 'en' ? 'Currently Executing:' : 'वर्तमान निष्पादन:'}</span>
              </div>
              <p className="text-sm text-[#44403C] leading-relaxed">
                {personalInfo.currentlyWorkingOn}
              </p>
            </div>

          </div>

        </div>

        {/* Key Institutional Metrics Banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-[#EFECE6] border border-[#D6CEC0] shadow-sm">
          {personalInfo.keyMetrics.map((metric, idx) => (
            <div key={idx} className="text-center p-4 border-r last:border-r-0 border-[#D6CEC0]">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-medium text-[#78716C] mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
