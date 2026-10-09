import React, { useState } from 'react';
import { portfolioData } from './data/portfolioData';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Insights from './components/Insights';
import Story from './components/Story';
import TrackRecord from './components/TrackRecord';
import Timeline from './components/Timeline';
import Downloads from './components/Downloads';
import InquiryForm from './components/InquiryForm';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState('en');
  const data = portfolioData[lang];

  return (
    <div className="min-h-screen bg-[#F5F2EB] text-[#1C1917] font-sans selection:bg-[#B45309] selection:text-white">
      <Navbar lang={lang} setLang={setLang} data={data} />
      <main>
        <Hero data={data} lang={lang} />
        <Services data={data} lang={lang} />
        <Insights data={data} lang={lang} />
        <Story data={data} lang={lang} />
        <TrackRecord data={data} lang={lang} />
        <Timeline data={data} lang={lang} />
        <Downloads data={data} lang={lang} />
        <InquiryForm data={data} lang={lang} />
      </main>
      <Footer data={data} lang={lang} />
    </div>
  );
}
