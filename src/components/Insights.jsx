import React, { useState } from 'react';
import { BookOpen, X, ArrowRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Insights({ lang }) {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const insights = portfolioData[lang].insights;

  return (
    <section id="insights" className="py-14 md:py-18 bg-[#F5F2EB] border-b border-[#E5E0D8]">
      <div className="site-container">
        
        {/* Section Label */}
        <span className="section-label">
          {lang === 'hi' ? 'लेख एवं विचार · वित्तीय अंतर्दृष्टि' : 'Writing · Financial Musings & Insights'}
        </span>
        
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#1C1917] mb-2">
          {lang === 'hi' ? 'बैंकिंग एवं वित्तीय अंतर्दृष्टि' : 'Executive Advisory Insights'}
        </h2>
        
        <p className="text-[#7A7368] text-sm sm:text-base mb-8 max-w-2xl font-sans">
          {lang === 'hi'
            ? 'कॉर्पोरेट वित्त, ऋण सिंडिकेशन, और नियामक अनुपालन पर व्यावहारिक विचार।'
            : 'Perspectives on corporate finance, debt syndication, valuation standards, and turnaround advisory.'}
        </p>

        {/* Article Cards matching vikaschoudhary.vercel.app blog-list */}
        <div className="space-y-5">
          {insights.map((item) => (
            <article key={item.id} className="work-card">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                <h3 className="text-lg font-serif font-bold text-[#1C1917] hover:text-[#B45309] transition-colors cursor-pointer" onClick={() => setSelectedArticle(item)}>
                  {item.title}
                </h3>
                <span className="text-xs text-[#7A7368] font-medium font-sans shrink-0">
                  {item.date}
                </span>
              </div>

              <p className="text-sm text-[#38342F] leading-relaxed mb-4 font-sans">
                {item.summary}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-3 border-t border-[#E5E0D8]">
                <div className="flex items-center gap-2">
                  <span className="tag-pill">{item.category}</span>
                  <span className="text-xs text-[#7A7368] font-medium">{item.readTime}</span>
                </div>

                <button
                  onClick={() => setSelectedArticle(item)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#1C1917] hover:text-[#B45309] transition-colors font-sans"
                >
                  <span>{item.linkText}</span>
                </button>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Modal Article Preview */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1C1917]/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-[#FFFFFF] border border-[#E5E0D8] max-w-2xl w-full rounded-xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-xl">
            
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-5 right-5 p-2 rounded bg-[#EBE6DC] hover:bg-[#DDD7CC] text-[#1C1917]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#B45309] uppercase tracking-wider mb-2 font-sans">
              <BookOpen className="w-4 h-4" />
              <span>{selectedArticle.category} • {selectedArticle.readTime}</span>
            </div>

            <h3 className="text-2xl font-serif font-bold text-[#1C1917] mb-4">
              {selectedArticle.title}
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-[#38342F] leading-relaxed font-sans mb-6">
              <p>{selectedArticle.summary}</p>
              <p className="text-xs text-[#7A7368]">
                {lang === 'hi' 
                  ? 'यह लेख प्रमोटरों और सीएफओ के लिए व्यावहारिक संस्थागत अनुभव पर आधारित है। विस्तृत परामर्श के लिए संपर्क करें।'
                  : 'This article distills two decades of institutional banking experience. For tailored corporate advisory regarding this topic, submit a mandate inquiry.'}
              </p>
            </div>

            <div className="flex justify-end pt-4 border-t border-[#E5E0D8]">
              <a
                href="#inquiry"
                onClick={() => setSelectedArticle(null)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#1C1917] text-white text-xs font-semibold"
              >
                <span>{lang === 'hi' ? 'सलाहकार जनादेश भेजें' : 'Discuss This Mandate'}</span>
                <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
