import React from 'react';
import { Download, FileText, Briefcase, CheckCircle2, Shield } from 'lucide-react';

export default function Downloads({ data, lang }) {
  const downloadItems = [
    {
      title: lang === 'en' ? 'Vishwanath Sharma - Executive Curriculum Vitae (CV)' : 'विश्वनाथ शर्मा - कार्यकारी बायोडाटा (CV)',
      description: lang === 'en'
        ? 'Comprehensive executive profile detailing 25+ years of banking leadership, branch balance sheet achievements, regional roles, and consultancy scope.'
        : '25+ वर्षों का बैंकिंग नेतृत्व, शाखा बैलेंस शीट उपलब्धियां और कंसल्टेंसी अनुभव विवरण।',
      fileSize: 'DOCX / PDF • Executive Brief',
      path: 'cv/Vishwanath_Sharma_CV.docx',
      icon: FileText
    },
    {
      title: lang === 'en' ? 'Corporate Financial Consultancy Services Overview' : 'कॉर्पोरेट वित्तीय कंसल्टेंसी सेवाएं विवरण (Word Document)',
      description: lang === 'en'
        ? 'Detailed practice overview covering Debt Syndication, TEV Feasibility Studies, Regulatory Valuations, and Stressed Asset (IBC/OTS) Resolutions.'
        : 'डेट सिंडिकेशन, TEV स्टडीज, मूल्यांकन और तनावग्रस्त परिसंपत्ति समाधान पर विस्तृत विवरण।',
      fileSize: 'DOCX • Official Services Overview',
      path: 'service_pdfs/Vishwanath_Sharma_Corporate_Consultancy_Services.docx',
      icon: Briefcase
    }
  ];

  return (
    <section id="downloads" className="py-16 md:py-24 bg-[#F5F2EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFECE6] border border-[#D6CEC0] text-xs font-bold text-[#B45309] uppercase tracking-wider">
            {lang === 'en' ? 'Document & Brochure Center' : 'दस्तावेज़ एवं ब्रोशर केंद्र'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            {lang === 'en' ? 'Download Executive Credentials & Practice Decks' : 'कार्यकारी दस्तावेज एवं प्रोफाइल डाउनलोड करें'}
          </h2>
          <p className="text-base sm:text-lg text-[#57534E]">
            {lang === 'en'
              ? 'Access official executive CVs, capability presentations, and service engagement decks.'
              : 'आधिकारिक कार्यकारी बायोडाटा और सेवा प्रस्तुतीकरण डाउनलोड करें।'}
          </p>
        </div>

        {/* Download Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {downloadItems.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#EFECE6] rounded-2xl p-6 sm:p-8 border border-[#D6CEC0] shadow-sm hover:shadow-md hover:border-[#B45309] transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#F5F2EB] text-[#1C1917] flex items-center justify-center border border-[#D6CEC0] group-hover:bg-[#B45309] group-hover:text-white transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-bold text-[#B45309] uppercase tracking-wider block">
                    {item.fileSize}
                  </span>

                  <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#57534E] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#D6CEC0]">
                  <a
                    href={item.path}
                    download
                    className="w-full py-3.5 px-6 rounded-lg bg-[#1C1917] text-[#F5F2EB] font-medium text-sm hover:bg-[#B45309] transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>{lang === 'en' ? 'Download PDF Document' : 'पीडीएफ डाउनलोड करें'}</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
