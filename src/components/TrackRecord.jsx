import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function TrackRecord({ lang }) {
  const deals = portfolioData[lang].trackRecordDeals;

  return (
    <section id="track-record" className="py-14 md:py-18 bg-[#F5F2EB] border-b border-[#E5E0D8]">
      <div className="site-container">
        
        {/* Track Record Section */}
        <span className="section-label font-sans">
          {lang === 'hi' ? 'प्रभाव एवं प्रदर्शन' : 'Proven Impact & Performance'}
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#1C1917] mb-2">
          {lang === 'hi' ? 'प्रमुख जनादेश मील के पत्थर' : 'Key Mandate Benchmarks'}
        </h2>
        <p className="text-[#7A7368] text-sm sm:text-base mb-8 max-w-2xl font-sans">
          {lang === 'hi'
            ? 'लाभ और हानि वृद्धि, जोखिम शमन, संस्थागत ग्राहक अधिग्रहण, और बहु-करोड़ बैलेंस शीट प्रबंधन में अनुभवजन्य परिणाम।'
            : 'Empirical results across P&L growth, risk mitigation, institutional client acquisition, and multi-crore balance sheet management.'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {deals.map((deal, idx) => (
            <div key={idx} className="work-card flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#1C1917] bg-[#EBE6DC] border border-[#DDD7CC] px-2 py-0.5 rounded font-sans">
                    {deal.category}
                  </span>
                  <span className="text-xs font-semibold text-[#B45309] font-sans">
                    {deal.institution}
                  </span>
                </div>

                <h3 className="text-lg font-serif font-bold text-[#1C1917] mb-2">
                  {deal.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#38342F] leading-relaxed mb-4 font-sans">
                  {deal.achievement}
                </p>
              </div>

              <div className="pt-3 border-t border-[#E5E0D8] flex items-center gap-2 text-xs text-[#7A7368] font-sans">
                <ShieldCheck className="w-4 h-4 text-[#B45309] shrink-0" />
                <span><strong className="text-[#1C1917]">{lang === 'hi' ? 'रणनीतिक परिणाम:' : 'Strategic Outcome:'}</strong> {deal.impact}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
