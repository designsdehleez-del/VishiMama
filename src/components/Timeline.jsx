import React from 'react';
import { Briefcase, MapPin, GraduationCap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Timeline({ lang }) {
  const content = portfolioData[lang];
  const careerTimeline = content.careerTimeline;
  const academics = content.personalInfo.academics;
  const certifications = content.personalInfo.certifications;

  return (
    <section id="timeline" className="py-14 md:py-18 bg-[#F5F2EB] border-b border-[#E5E0D8]">
      <div className="site-container">
        
        {/* Header */}
        <span className="section-label font-sans">
          {lang === 'hi' ? 'संस्थागत कार्य इतिहास एवं शिक्षा' : 'Institutional Work History & Education'}
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#1C1917] mb-2">
          {lang === 'hi' ? '25+ वर्षों का बैंकिंग नेतृत्व' : '25+ Years Banking Leadership'}
        </h2>
        <p className="text-[#7A7368] text-sm sm:text-base mb-8 font-sans">
          {lang === 'hi' 
            ? 'इंडसइंड बैंक, कोटक महिंद्रा बैंक, एचडीएफसी बैंक, आईसीआईसीआई बैंक, यस बैंक और एएसएएफ में वरिष्ठ कार्यकारी नेतृत्व।'
            : 'Senior executive leadership roles across IndusInd Bank, Kotak Mahindra Bank, HDFC Bank, ICICI Bank, YES Bank, and ESAF.'}
        </p>

        {/* Work List matching vikaschoudhary.vercel.app work-list */}
        <div className="space-y-5 mb-12">
          {careerTimeline.map((item, index) => (
            <article key={index} className="work-card">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <h3 className="text-lg font-serif font-bold text-[#1C1917]">
                  {item.company}
                </h3>
                <span className="text-xs font-semibold text-[#B45309] font-sans">
                  {item.period}
                </span>
              </div>

              <div className="text-xs font-semibold text-[#1C1917] mb-3 flex items-center gap-2 font-sans">
                <Briefcase className="w-3.5 h-3.5 text-[#B45309]" />
                <span>{item.role}</span>
                <span className="text-[#7A7368]">•</span>
                <span className="text-xs text-[#7A7368] flex items-center gap-1 font-normal">
                  <MapPin className="w-3 h-3 text-[#7A7368]" />
                  {item.location}
                </span>
              </div>

              <p className="text-sm text-[#38342F] leading-relaxed mb-4 font-sans">
                {item.details}
              </p>

              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-[#E5E0D8]">
                <span className="tag-pill">{lang === 'hi' ? 'कार्यकारी नेतृत्व' : 'Executive Leadership'}</span>
                <span className="tag-pill">{lang === 'hi' ? 'पी एंड एल स्वामित्व' : 'P&L Ownership'}</span>
                <span className="tag-pill">{lang === 'hi' ? 'संस्थागत परामर्श' : 'Institutional Advisory'}</span>
              </div>

            </article>
          ))}
        </div>

        {/* Education Section placed near bottom */}
        <div className="work-card">
          <div className="flex items-center gap-3 pb-3 border-b border-[#E5E0D8] mb-4">
            <GraduationCap className="w-5 h-5 text-[#B45309]" />
            <h3 className="text-lg font-serif font-bold text-[#1C1917]">
              {lang === 'hi' ? 'शैक्षणिक योग्यता एवं प्रमाणपत्र' : 'Academic Qualifications & Certifications'}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {academics.map((edu, idx) => (
              <div key={idx} className="p-3 rounded-md bg-[#F5F2EB] border border-[#E5E0D8]">
                <div className="font-semibold text-[#1C1917] text-xs sm:text-sm">{edu.degree}</div>
                <div className="text-xs text-[#7A7368] flex justify-between mt-1">
                  <span>{edu.institution}</span>
                  <span className="font-medium text-[#1C1917]">{edu.year}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {certifications.map((cert, idx) => (
              <span key={idx} className="tag-pill">
                {cert}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
