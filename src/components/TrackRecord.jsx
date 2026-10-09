import React from 'react';
import { Award, CheckCircle2, TrendingUp, Building2, Users } from 'lucide-react';

export default function TrackRecord({ data, lang }) {
  const { trackRecordDeals } = data;

  return (
    <section id="track-record" className="py-16 md:py-24 bg-[#F5F2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFECE6] border border-[#D6CEC0] text-xs font-bold text-[#B45309] uppercase tracking-wider">
            {lang === 'en' ? 'Institutional Accomplishments' : 'संस्थागत उपलब्धियां'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            {lang === 'en' ? 'Key Track Record & Deal Execution Highlights' : 'प्रमुख ट्रैक रिकॉर्ड और उपलब्धि हाइलाइट्स'}
          </h2>
          <p className="text-base sm:text-lg text-[#57534E]">
            {lang === 'en'
              ? 'Proven institutional performance spanning balance sheet scaling, regional team leadership, and multi-crore corporate advisory mandates.'
              : 'बैलेंस शीट विस्तार, क्षेत्रीय टीम का नेतृत्व और बहु-करोड़ कॉर्पोरेट परामर्श उपलब्धियां।'}
          </p>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trackRecordDeals.map((deal, idx) => (
            <div
              key={idx}
              className="bg-[#EFECE6] rounded-2xl p-6 sm:p-8 border border-[#D6CEC0] shadow-sm hover:shadow-md hover:border-[#B45309] transition-all space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#B45309] bg-[#F5F2EB] px-3 py-1 rounded-full border border-[#D6CEC0]">
                  {deal.category}
                </span>
                <span className="text-xs font-semibold text-[#78716C] flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-[#B45309]" />
                  {deal.institution}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                {deal.title}
              </h3>

              <p className="text-sm text-[#44403C] leading-relaxed">
                {deal.achievement}
              </p>

              <div className="p-3.5 rounded-xl bg-[#F5F2EB] border border-[#D6CEC0] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
                <div className="text-xs font-medium text-[#1C1917]">
                  <span className="font-bold text-[#78716C] uppercase tracking-wider block mb-0.5">
                    {lang === 'en' ? 'Impact Generated:' : 'प्रभाव:'}
                  </span>
                  {deal.impact}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
