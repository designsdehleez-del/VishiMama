import React from 'react';
import { Mail, Phone, MapPin, Linkedin, ArrowUp } from 'lucide-react';

export default function Footer({ data, lang }) {
  const { personalInfo } = data;
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1917] text-[#F5F2EB] pt-16 pb-12 border-t border-[#44403C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Bio Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#B45309] text-white flex items-center justify-center font-serif font-bold text-xl">
                VS
              </div>
              <span className="font-serif font-bold text-xl tracking-tight">
                {personalInfo.name}
              </span>
            </div>
            
            <p className="text-sm text-[#D6CEC0] leading-relaxed max-w-md">
              {personalInfo.title} — 25+ years of institutional banking executive experience providing principal corporate finance, debt syndication, TEV studies, and regulatory valuation advisory.
            </p>

            <div className="pt-2 text-xs text-[#A8A29E]">
              {personalInfo.contact.location}
            </div>
          </div>

          {/* Quick Nav Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <span className="block text-xs font-bold text-[#B45309] uppercase tracking-wider">
              {lang === 'en' ? 'Quick Navigation' : 'त्वरित नेविगेशन'}
            </span>
            <ul className="space-y-2 text-sm text-[#D6CEC0]">
              {data.navLinks.slice(0, 6).map((link) => (
                <li key={link.id}>
                  <a href={link.href} className="hover:text-[#B45309] transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="block text-xs font-bold text-[#B45309] uppercase tracking-wider">
              {lang === 'en' ? 'Direct Contact' : 'प्रत्यक्ष संपर्क'}
            </span>
            <div className="space-y-2.5 text-sm text-[#D6CEC0]">
              <a href={`mailto:${personalInfo.contact.email}`} className="block hover:text-[#B45309] transition-colors">
                {personalInfo.contact.email}
              </a>
              <a href={`tel:${personalInfo.contact.phone}`} className="block hover:text-[#B45309] transition-colors">
                {personalInfo.contact.phone}
              </a>
              <a
                href={personalInfo.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-[#B45309] transition-colors text-xs pt-1"
              >
                <Linkedin className="w-4 h-4 text-[#B45309]" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-[#292524] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A8A29E]">
          <div>
            © {year} {personalInfo.name}. {lang === 'en' ? 'All rights reserved.' : 'सर्वाधिकार सुरक्षित।'}
          </div>

          <div className="flex items-center gap-6">
            <a href="#services" className="hover:text-[#F5F2EB] transition-colors">
              {lang === 'en' ? 'Practice Areas' : 'सेवाएं'}
            </a>
            <a href="cv/Vishwanath_Sharma_CV.pdf" download className="hover:text-[#F5F2EB] transition-colors">
              {lang === 'en' ? 'Download CV' : 'सीवी'}
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-[#292524] text-[#F5F2EB] hover:bg-[#B45309] transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
