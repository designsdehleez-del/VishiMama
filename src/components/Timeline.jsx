import React from 'react';
import { Briefcase, Building2, MapPin, Calendar } from 'lucide-react';

export default function Timeline({ data, lang }) {
  const { careerTimeline } = data;

  return (
    <section id="timeline" className="py-16 md:py-24 bg-[#EFECE6] border-y border-[#D6CEC0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F2EB] border border-[#D6CEC0] text-xs font-bold text-[#B45309] uppercase tracking-wider">
            {lang === 'en' ? '25+ Years Institutional Leadership' : '25+ वर्षों का बैंकिंग नेतृत्व'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            {lang === 'en' ? 'Executive Banking Career Timeline' : 'कार्यकारी बैंकिंग करियर टाइमलाइन'}
          </h2>
          <p className="text-base sm:text-lg text-[#57534E]">
            {lang === 'en'
              ? 'A distinguished trajectory across India’s premier financial institutions, driving balance sheet growth, branch networks, and institutional advisory.'
              : 'भारत के प्रमुख वित्तीय संस्थानों में एक प्रतिष्ठित करियर पथ।'}
          </p>
        </div>

        {/* Timeline Items */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 border-l-2 border-[#D6CEC0] space-y-12">
          {careerTimeline.map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Dot Icon */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-[#1C1917] border-4 border-[#EFECE6] group-hover:bg-[#B45309] transition-colors" />

              {/* Timeline Content Card */}
              <div className="bg-[#F5F2EB] rounded-2xl p-6 sm:p-8 border border-[#D6CEC0] shadow-sm hover:shadow-md hover:border-[#B45309] transition-all space-y-3">
                
                {/* Period & Location Badge */}
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-semibold text-[#78716C]">
                  <span className="flex items-center gap-1 text-[#B45309]">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#B45309]" />
                    {item.location}
                  </span>
                </div>

                {/* Role Title */}
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917] group-hover:text-[#B45309] transition-colors">
                  {item.role}
                </h3>

                {/* Institution Name */}
                <div className="flex items-center gap-2 text-sm font-bold text-[#44403C]">
                  <Building2 className="w-4 h-4 text-[#B45309]" />
                  <span>{item.company}</span>
                </div>

                {/* Scope & Details */}
                <p className="text-sm text-[#57534E] leading-relaxed pt-1">
                  {item.details}
                </p>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
