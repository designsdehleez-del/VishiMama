import React, { useState } from 'react';
import { Menu, X, Globe, Download, Send } from 'lucide-react';

export default function Navbar({ lang, setLang, data }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'hi' : 'en');
  };

  return (
    <header className="sticky top-0 z-50 bg-[#F5F2EB]/95 backdrop-blur-md border-b border-[#E2DCD0] shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo & Title */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#1C1917] text-[#F5F2EB] flex items-center justify-center font-serif font-bold text-xl group-hover:bg-[#B45309] transition-colors">
              VS
            </div>
            <div>
              <span className="block font-serif font-bold text-lg text-[#1C1917] leading-tight group-hover:text-[#B45309] transition-colors">
                {data.personalInfo.name}
              </span>
              <span className="block text-xs text-[#57534E] font-medium tracking-wide">
                {lang === 'en' ? 'Corporate Financial Consultant' : 'वरिष्ठ वित्तीय सलाहकार'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6">
            {data.navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-sm font-medium text-[#44403C] hover:text-[#B45309] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Language Toggle Button */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#D6CEC0] bg-[#EFECE6] text-xs font-semibold text-[#1C1917] hover:bg-[#B45309] hover:text-white hover:border-[#B45309] transition-all shadow-sm"
              title="Switch Language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'हिंदी (HI)' : 'English (EN)'}</span>
            </button>

            {/* Direct Advisory Mandate Inquiry Button */}
            <a
              href="#inquiry"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#B45309] text-white text-xs font-bold hover:bg-[#92400E] transition-colors shadow-md"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Inquire Mandate' : 'परामर्श पूछताछ'}</span>
            </a>

            {/* Executive CV Button */}
            <a
              href="cv/Vishwanath_Sharma_CV.pdf"
              download
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#1C1917] text-[#F5F2EB] text-xs font-medium hover:bg-[#B45309] transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Executive CV' : 'सीवी'}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[#D6CEC0] bg-[#EFECE6] text-xs font-semibold text-[#1C1917]"
            >
              <Globe className="w-3 h-3" />
              <span>{lang === 'en' ? 'HI' : 'EN'}</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#1C1917] hover:bg-[#EFECE6] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F5F2EB] border-b border-[#E2DCD0] px-4 pt-2 pb-6 space-y-3">
          {data.navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-medium text-[#1C1917] hover:text-[#B45309] border-b border-[#E2DCD0]/50"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <a
              href="#inquiry"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-[#B45309] text-white text-sm font-bold shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>{lang === 'en' ? 'Inquire Mandate Form' : 'परामर्श पूछताछ फॉर्म'}</span>
            </a>
            <a
              href="cv/Vishwanath_Sharma_CV.pdf"
              download
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg bg-[#1C1917] text-[#F5F2EB] text-sm font-medium"
            >
              <Download className="w-4 h-4" />
              <span>{lang === 'en' ? 'Download Executive CV' : 'सीवी डाउनलोड करें'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
