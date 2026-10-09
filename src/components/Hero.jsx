import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ lang }) {
  const content = portfolioData[lang];
  const { personalInfo, keyMetrics, currentlyWorkingOn } = content;

  return (
    <section id="home" className="pt-28 pb-14 md:pt-36 md:pb-18 bg-[#F5F2EB] border-b border-[#E5E0E0]">
      <div className="site-container">
        
        {/* Section Label */}
        <span className="section-label">
          {lang === 'hi' ? 'पूर्व क्षेत्रीय प्रमुख एवं बैंकिंग नेता · वरिष्ठ वित्तीय सलाहकार' : 'Ex-Regional Head & Banking Leader · Senior Financial Advisory'}
        </span>

        {/* Profile Photo Wrapper matching screenshot */}
        <div className="hero__photo-wrapper">
          <img
            src={personalInfo.photo}
            alt={personalInfo.name}
            className="hero__photo"
          />
        </div>

        {/* 1st Person Bio Narrative */}
        <div className="space-y-4 text-[#38342F] text-base sm:text-lg leading-[1.75] mb-8 font-sans">
          {personalInfo.bioParagraphs.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Impact Stats Grid matching screenshot */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-6 border-y border-[#E5E0D8] mb-8">
          {keyMetrics.map((metric, index) => (
            <div key={index} className="text-left">
              <div className="text-3xl sm:text-4xl font-serif font-extrabold text-[#1C1917] mb-1">
                {metric.value}
              </div>
              <div className="text-xs font-medium text-[#7A7368] font-sans">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Block matching screenshot now-block */}
        <div className="now-block">
          <div className="now-block__label">{lang === 'hi' ? 'वर्तमान में' : 'Currently'}</div>
          <p className="now-block__text font-sans">
            {currentlyWorkingOn}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-8">
          <a
            href="#inquiry"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#1C1917] hover:bg-[#2E2A27] text-white font-medium text-xs sm:text-sm shadow-sm transition-all"
          >
            <span>{lang === 'hi' ? 'सलाहकार जनादेश भेजें' : 'Submit Advisory Mandate'}</span>
            <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
          </a>

          <a
            href="cv/Vishwanath_Sharma_CV.docx"
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#FFFFFF] hover:bg-[#EBE6DC] text-[#1C1917] font-medium text-xs sm:text-sm border border-[#E5E0D8] shadow-sm transition-all"
          >
            <Download className="w-4 h-4 text-[#7A7368]" />
            <span>{lang === 'hi' ? 'कार्यकारी सीवी डाउनलोड करें' : 'Download Executive CV'}</span>
          </a>
        </div>

      </div>
    </section>
  );
}
