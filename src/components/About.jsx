import React from 'react';
import { GraduationCap, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-14 md:py-18 bg-[#F5F2EB] border-b border-[#E5E0D8]">
      <div className="site-container">
        
        <span className="section-label">Executive Background</span>

        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#1C1917] mb-5">
          Over Two Decades of Institutional Banking Leadership
        </h2>

        <div className="space-y-4 text-[#38342F] text-base leading-[1.75] mb-8 font-sans">
          <p>
            With a career spanning 25+ years across top Indian financial institutions, I provide high-impact corporate financial advisory. My domain expertise covers credit risk, debt syndication, valuation frameworks, regulatory compliance under RBI and Income Tax, and debt resolution under the Insolvency & Bankruptcy Code (IBC).
          </p>
        </div>

        {/* Strategic Pillars */}
        <div className="space-y-3 mb-8">
          <div className="flex items-start gap-3 p-3.5 rounded-md bg-[#FFFFFF] border border-[#E5E0D8]">
            <CheckCircle2 className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-[#1C1917]">Debt & Project Finance Syndication</div>
              <div className="text-xs text-[#7A7368]">I structure project finance, term loans, working capital, ECB & buyer's credit.</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-md bg-[#FFFFFF] border border-[#E5E0D8]">
            <CheckCircle2 className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-[#1C1917]">Valuation & TEV Studies</div>
              <div className="text-xs text-[#7A7368]">I deliver bankable feasibility reports, business valuations, and asset valuations.</div>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3.5 rounded-md bg-[#FFFFFF] border border-[#E5E0D8]">
            <CheckCircle2 className="w-4 h-4 text-[#B45309] shrink-0 mt-0.5" />
            <div>
              <div className="text-sm font-semibold text-[#1C1917]">Stressed Assets & IBC Advisory</div>
              <div className="text-xs text-[#7A7368]">I assist in out-of-court restructuring, OTS settlements, and CIRP resolution plans.</div>
            </div>
          </div>
        </div>

        {/* Scholastics Card */}
        <div className="work-card mb-8">
          <div className="flex items-center gap-3 pb-3 border-b border-[#E5E0D8] mb-4">
            <GraduationCap className="w-5 h-5 text-[#B45309]" />
            <h3 className="text-lg font-serif font-bold text-[#1C1917]">Academic Qualifications & Certifications</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {personalInfo.academics.map((edu, idx) => (
              <div key={idx} className="p-3 rounded-md bg-[#F5F2EB] border border-[#E5E0D8]">
                <div className="font-semibold text-[#1C1917] text-xs sm:text-sm">{edu.degree}</div>
                <div className="text-xs text-[#7A7368] flex justify-between mt-1">
                  <span>{edu.institution}</span>
                  <span className="font-medium text-[#1C1917]">{edu.year}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {personalInfo.certifications.map((cert, idx) => (
              <span key={idx} className="tag-pill">
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Direct Contact Links */}
        <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-[#7A7368] pt-2">
          <a href={`mailto:${personalInfo.contact.email}`} className="flex items-center gap-1.5 hover:text-[#1C1917] transition-colors">
            <Mail className="w-4 h-4 text-[#B45309]" />
            <span>{personalInfo.contact.email}</span>
          </a>

          <a href={`tel:${personalInfo.contact.phone}`} className="flex items-center gap-1.5 hover:text-[#1C1917] transition-colors">
            <Phone className="w-4 h-4 text-[#B45309]" />
            <span>{personalInfo.contact.phone}</span>
          </a>

          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-[#B45309]" />
            <span>{personalInfo.contact.location}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
