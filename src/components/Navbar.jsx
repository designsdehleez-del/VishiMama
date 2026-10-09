import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ lang, setLang }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const content = portfolioData[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Accent Line */}
      <div className="top-bar" />
      
      <nav
        className={`bg-white transition-all duration-200 border-b border-[#E5E0D8] ${
          isScrolled ? 'py-3.5 shadow-sm' : 'py-4'
        }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo Text in Playfair Display Serif font */}
            <a href="#" className="font-serif font-bold text-xl sm:text-2xl text-[#1C1917] tracking-tight hover:opacity-80 transition-opacity">
              {content.personalInfo.name}
            </a>

            {/* Right Side: Links & EN/HI Switcher */}
            <div className="hidden md:flex items-center gap-6">
              
              {/* Functional Language Switcher */}
              <div className="flex items-center text-xs font-semibold uppercase tracking-wider pr-3 border-r border-[#E5E0D8]">
                <button
                  onClick={() => setLang('en')}
                  className={`px-2 py-0.5 rounded font-mono transition-colors ${
                    lang === 'en'
                      ? 'bg-[#1C1917] text-white font-bold'
                      : 'text-[#7A7368] hover:text-[#1C1917]'
                  }`}
                >
                  EN
                </button>
                <span className="text-[#7A7368] opacity-50 px-1">/</span>
                <button
                  onClick={() => setLang('hi')}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    lang === 'hi'
                      ? 'bg-[#1C1917] text-white font-bold'
                      : 'text-[#7A7368] hover:text-[#1C1917]'
                  }`}
                >
                  HI
                </button>
              </div>

              {content.navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`text-sm font-medium transition-all ${
                    activeSection === link.id
                      ? 'text-[#1C1917] font-semibold border-b-2 border-[#1C1917] pb-1'
                      : 'text-[#666666] hover:text-[#1C1917]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Hamburger & Lang Switcher */}
            <div className="md:hidden flex items-center gap-3">
              <div className="flex items-center text-xs font-semibold">
                <button
                  onClick={() => setLang('en')}
                  className={`px-2 py-0.5 rounded ${lang === 'en' ? 'bg-[#1C1917] text-white' : 'text-[#7A7368]'}`}
                >
                  EN
                </button>
                <span className="text-[#7A7368] px-0.5">/</span>
                <button
                  onClick={() => setLang('hi')}
                  className={`px-2 py-0.5 rounded ${lang === 'hi' ? 'bg-[#1C1917] text-white' : 'text-[#7A7368]'}`}
                >
                  HI
                </button>
              </div>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-[#1C1917] hover:opacity-75"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-[#E5E0D8] px-4 pt-3 pb-6 space-y-3">
            <div className="flex flex-col gap-2">
              {content.navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className="text-base font-medium text-[#333333] hover:text-[#1C1917] py-2 border-b border-[#F0ECE3]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
