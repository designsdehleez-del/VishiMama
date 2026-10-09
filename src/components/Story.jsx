import React from 'react';
import { GraduationCap, Award, Quote, CheckCircle2 } from 'lucide-react';

export default function Story({ data, lang }) {
  const { personalInfo } = data;
  const { executiveStory, academics, certifications } = personalInfo;

  return (
    <section id="story" className="py-16 md:py-24 bg-[#EFECE6] border-y border-[#D6CEC0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F2EB] border border-[#D6CEC0] text-xs font-bold text-[#B45309] uppercase tracking-wider">
            {lang === 'en' ? 'Executive Philosophy & Story' : 'कार्यकारी दर्शन एवं अनुभव'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight mt-3">
            {executiveStory.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (6 cols): Boardroom Image */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#D6CEC0] shadow-xl bg-[#F5F2EB]">
              <img
                src={personalInfo.boardroomPhoto}
                alt="Vishwanath Sharma Boardroom Advisory"
                className="w-full h-auto object-cover object-center max-h-[440px]"
                loading="lazy"
              />
              <div className="p-4 bg-[#1C1917] text-[#F5F2EB] text-xs font-medium">
                {lang === 'en'
                  ? 'Vishwanath Sharma presiding over corporate credit advisory & banking committee discussions.'
                  : 'विश्वनाथ शर्मा कॉर्पोरेट क्रेडिट और बैंकिंग समिति की बैठकों की अध्यक्षता करते हुए।'}
              </div>
            </div>

            {/* Featured Quote Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#F5F2EB] border border-[#D6CEC0] shadow-sm flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#EFECE6] text-[#B45309] flex items-center justify-center border border-[#D6CEC0] shrink-0 mt-0.5">
                <Quote className="w-5 h-5" />
              </div>
              <p className="font-sans font-medium text-base sm:text-lg text-[#1C1917] leading-relaxed">
                "{executiveStory.quote}"
              </p>
            </div>
          </div>

          {/* Right Column (6 cols): Story Paragraphs & Education */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Story Paragraphs */}
            <div className="space-y-4 text-[#44403C] leading-relaxed text-base sm:text-lg">
              {executiveStory.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            {/* Academic Credentials */}
            <div className="space-y-4 pt-4 border-t border-[#D6CEC0]">
              <div className="flex items-center gap-2 text-sm font-bold text-[#1C1917] uppercase tracking-wider">
                <GraduationCap className="w-5 h-5 text-[#B45309]" />
                <span>{lang === 'en' ? 'Academic Background:' : 'शैक्षणिक पृष्ठभूमि:'}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {academics.map((edu, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#F5F2EB] border border-[#D6CEC0]">
                    <div className="font-serif font-bold text-[#1C1917] text-base">{edu.degree}</div>
                    <div className="text-xs text-[#57534E] font-medium">{edu.institution}</div>
                    <div className="text-xs text-[#78716C] mt-1">{edu.year}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Executive Certifications */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-2 text-sm font-bold text-[#1C1917] uppercase tracking-wider">
                <Award className="w-5 h-5 text-[#B45309]" />
                <span>{lang === 'en' ? 'Leadership & Risk Certifications:' : 'नेतृत्व एवं प्रमाणन:'}</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#44403C] p-2.5 rounded-lg bg-[#F5F2EB] border border-[#D6CEC0]">
                    <CheckCircle2 className="w-4 h-4 text-[#B45309] shrink-0" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
