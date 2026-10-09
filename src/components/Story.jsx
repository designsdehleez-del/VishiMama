import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Story({ lang }) {
  const content = portfolioData[lang].personalInfo;
  const story = content.executiveStory;

  return (
    <section id="story" className="py-14 md:py-18 bg-[#F5F2EB] border-b border-[#E5E0D8]">
      <div className="site-container">
        
        {/* Section Label */}
        <span className="section-label">
          {lang === 'hi' ? 'कार्यकारी कहानी एवं परामर्श दर्शन' : 'Executive Story & Advisory Philosophy'}
        </span>

        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#1C1917] mb-6">
          {story.title}
        </h2>

        {/* Boardroom Photo Wrapper */}
        <div className="w-full rounded-xl overflow-hidden border border-[#E5E0D8] shadow-md mb-8">
          <img
            src={content.boardroomPhoto}
            alt="Vishwanath Sharma conducting corporate financial advisory meeting"
            className="w-full h-auto object-cover max-h-[420px]"
          />
        </div>

        {/* Inspiring Quote Callout */}
        <blockquote className="now-block mb-8">
          <p className="text-base sm:text-lg font-serif italic text-[#1C1917] leading-relaxed mb-2">
            "{story.quote}"
          </p>
          <footer className="text-xs font-bold uppercase tracking-wider text-[#B45309] font-sans">
            — {content.name}
          </footer>
        </blockquote>

        {/* Narrative Paragraphs */}
        <div className="space-y-4 text-[#38342F] text-base leading-[1.75] font-sans">
          {story.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

      </div>
    </section>
  );
}
