import React from 'react';
import { Download, FileText, FileSpreadsheet } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Downloads({ lang }) {
  const isHi = lang === 'hi';
  const documents = [
    {
      title: isHi ? "मेरा कार्यकारी बायोडाटा (CV)" : "My Executive Curriculum Vitae (CV)",
      type: isHi ? "वर्ड दस्तावेज़ (.docx)" : "Word Document (.docx)",
      description: isHi ? "इंडसइंड, कोटक, एचडीएफसी, आईसीआईसीआई, यस बैंक और ईएसएएफ में मेरे 25+ वर्षों के वरिष्ठ बैंकिंग नेतृत्व का विवरण।" : "Comprehensive executive resume detailing my 25+ years senior banking leadership experience across IndusInd, Kotak, HDFC, ICICI, YES Bank, and ESAF.",
      downloadPath: "/cv/Vishwanath_Sharma_CV.docx",
      buttonText: isHi ? "कार्यकारी सीवी डाउनलोड करें" : "Download Executive CV",
      icon: FileText,
      badge: isHi ? "सत्यापित प्रोफ़ाइल" : "Verified Profile"
    },
    {
      title: isHi ? "कॉर्पोरेट सेवाएं एवं क्षमता डेक" : "My Corporate Services & Capability Deck",
      type: isHi ? "पीडीएफ दस्तावेज़ (.pdf)" : "PDF Document (.pdf)",
      description: isHi ? "ऋण सिंडिकेशन, इक्विटी सलाहकार, मूल्यांकन, टीईवी रिपोर्ट, आईबीसी दिवाला और ऑडिट पर संपूर्ण सेवा पोर्टफोलियो।" : "Full service portfolio deck covering my advisory practice across Debt Syndication, Equity Advisory, Valuation, TEV Reports, Insolvency (IBC), Training & Audits.",
      downloadPath: "/service_pdfs/Corporate_Services_Capability_Deck.pdf",
      buttonText: isHi ? "क्षमता पीडीएफ डाउनलोड करें" : "Download Capability PDF",
      icon: FileSpreadsheet,
      badge: isHi ? "संस्थागत डेक" : "Institutional Deck"
    }
  ];

  return (
    <section id="downloads" className="py-14 md:py-18 bg-[#F5F2EB] border-b border-[#E5E0D8]">
      <div className="site-container">
        
        <span className="section-label font-sans">
          {isHi ? 'संसाधन केंद्र' : 'Resource Center'}
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#1C1917] mb-2">
          {isHi ? 'आधिकारिक दस्तावेज़ डाउनलोड करें' : 'Download Official Documents'}
        </h2>
        <p className="text-[#7A7368] text-sm sm:text-base mb-8 max-w-2xl font-sans">
          {isHi 
            ? 'संस्थागत समीक्षा के लिए मेरे आधिकारिक बायोडाटा, सेवा क्षमता डेक और क्रेडेंशियल सारांश तक पहुँचें।' 
            : 'Access my official resume, service capability decks, and credential summaries for institutional review.'}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {documents.map((doc, idx) => {
            const IconComponent = doc.icon;
            return (
              <div key={idx} className="work-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-9 h-9 rounded bg-[#1C1917] text-[#F59E0B] flex items-center justify-center font-bold">
                      <IconComponent className="w-4.5 h-4.5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#38342F] bg-[#EBE6DC] border border-[#DDD7CC] px-2 py-0.5 rounded font-sans">
                      {doc.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#1C1917] mb-1">
                    {doc.title}
                  </h3>
                  <div className="text-xs font-semibold text-[#B45309] mb-3 font-sans">
                    {doc.type}
                  </div>

                  <p className="text-xs sm:text-sm text-[#38342F] leading-relaxed mb-6 font-sans">
                    {doc.description}
                  </p>
                </div>

                <a
                  href={doc.downloadPath}
                  download
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-[#1C1917] hover:bg-[#2E2A27] text-white font-medium text-xs shadow-sm transition-all"
                >
                  <Download className="w-4 h-4 text-[#F59E0B]" />
                  <span>{doc.buttonText}</span>
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
