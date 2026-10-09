import React from 'react';
import { FileText, Calendar, Clock, ArrowRight } from 'lucide-react';

export default function Insights({ data, lang }) {
  const { insights } = data;

  return (
    <section id="insights" className="py-16 md:py-24 bg-[#F5F2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFECE6] border border-[#D6CEC0] text-xs font-bold text-[#B45309] uppercase tracking-wider">
              {lang === 'en' ? 'Executive Insights & Publications' : 'लेख एवं विचार'}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
              {lang === 'en' ? 'Thought Leadership on Corporate Credit & Turnarounds' : 'कॉर्पोरेट क्रेडिट और बदलाव पर विचार'}
            </h2>
          </div>
          <p className="text-sm text-[#57534E] max-w-md">
            {lang === 'en'
              ? 'Practical advisory perspective derived from evaluating multi-hundred crore debt applications and corporate restructuring plans.'
              : 'ऋण आवेदनों और कॉर्पोरेट पुनर्गठन योजनाओं के मूल्यांकन से प्राप्त व्यावहारिक विचार।'}
          </p>
        </div>

        {/* Insights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insights.map((item) => (
            <article
              key={item.id}
              className="bg-[#EFECE6] rounded-2xl p-6 border border-[#D6CEC0] shadow-sm hover:shadow-md hover:border-[#B45309] transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                
                {/* Meta info */}
                <div className="flex items-center justify-between text-xs text-[#78716C]">
                  <span className="font-bold text-[#B45309] uppercase tracking-wider">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.readTime}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-bold text-[#1C1917] group-hover:text-[#B45309] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Summary */}
                <p className="text-sm text-[#57534E] leading-relaxed">
                  {item.summary}
                </p>

              </div>

              {/* Read Action Link */}
              <div className="pt-6 mt-6 border-t border-[#D6CEC0]">
                <a
                  href="#inquiry"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#1C1917] group-hover:text-[#B45309] transition-colors"
                >
                  <span>{item.linkText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
