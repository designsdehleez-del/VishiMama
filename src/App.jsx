import React, { useState } from 'react';
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

  return (
    <div className="min-h-screen bg-[#F5F2EB] text-[#38342F] selection:bg-[#1C1917] selection:text-[#FFFFFF]">
      <Navbar lang={lang} setLang={setLang} />
      <main>
        <Hero lang={lang} />
        <Services lang={lang} />
        <Insights lang={lang} />
        <Story lang={lang} />
        <TrackRecord lang={lang} />
        <Timeline lang={lang} />
        <Downloads lang={lang} />
        <InquiryForm lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
