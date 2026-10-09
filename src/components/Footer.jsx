import React from 'react';
import { Shield, Mail, Phone, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ lang }) {
  const isHi = lang === 'hi';
  const content = portfolioData[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#F5F2EB] border-t border-[#E5E0D8] text-[#7A7368] py-8 font-sans">
      <div className="site-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-[#E5E0D8]">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#1C1917] flex items-center justify-center font-bold text-white text-xs">
              VS
            </div>
            <div>
              <div className="font-serif font-bold text-base text-[#1C1917]">
                {content.personalInfo.name}
              </div>
              <div className="text-xs text-[#7A7368]">
                {isHi ? 'वरिष्ठ कॉर्पोरेट वित्तीय सलाहकार एवं निवेश विशेषज्ञ' : 'Senior Corporate Financial Consultant & Investment Advisor'}
              </div>
            </div>
          </div>

          {/* Contact Links */}
          <div className="flex flex-wrap items-center gap-5 text-xs">
            <a href={`mailto:${content.personalInfo.contact.email}`} className="flex items-center gap-1.5 hover:text-[#1C1917] transition-colors">
              <Mail className="w-3.5 h-3.5 text-[#B45309]" />
              <span>{content.personalInfo.contact.email}</span>
            </a>

            <a href={`tel:${content.personalInfo.contact.phone}`} className="flex items-center gap-1.5 hover:text-[#1C1917] transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#B45309]" />
              <span>{content.personalInfo.contact.phone}</span>
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2 rounded bg-[#FFFFFF] hover:bg-[#EBE6DC] text-[#1C1917] border border-[#E5E0D8] transition-all flex items-center gap-1.5 text-xs font-medium"
          >
            <span>{isHi ? 'ऊपर जाएँ' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#B45309]" />
          </button>
        </div>

        {/* Bottom Line */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7A7368]">
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-[#B45309]" />
            <span>{isHi ? 'सख्त कॉर्पोरेट गोपनीयता का आश्वासन • एनडीए अनुपालन' : 'Strict Corporate Confidentiality Assured • NDA Compliant'}</span>
          </div>

          <div>
            © {new Date().getFullYear()} Vishwanath Sharma. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
