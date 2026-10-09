import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, Phone, Lock } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function InquiryForm({ lang }) {
  const isHi = lang === 'hi';
  const content = portfolioData[lang];
  const practiceAreas = content.practiceAreas;
  const personalInfo = content.personalInfo;

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    serviceCategory: practiceAreas[0].title,
    dealSize: isHi ? '₹10 करोड़ - ₹50 करोड़' : '₹10 Crore - ₹50 Crore',
    timeline: isHi ? 'तत्काल (7-14 दिनों के भीतर)' : 'Immediate (Within 7-14 Days)',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="inquiry" className="py-14 md:py-18 bg-[#F5F2EB]">
      <div className="site-container">
        
        <span className="section-label font-sans">
          {isHi ? 'संपर्क एवं प्रत्यक्ष परामर्श जनादेश' : 'Contact & Advisory Mandate'}
        </span>
        <h2 className="text-2xl sm:text-3xl font-serif font-extrabold text-[#1C1917] mb-2">
          {isHi ? 'सलाहकार जनादेश प्रस्तुत करें' : 'Submit Mandate Inquiry'}
        </h2>
        <p className="text-[#7A7368] text-sm sm:text-base mb-8 max-w-2xl font-sans">
          {isHi
            ? 'कॉर्पोरेट ऋण सिंडिकेशन, व्यवसाय मूल्यांकन, टीईवी अध्ययन, ऋण पुनर्गठन, या कार्यकारी प्रशिक्षण आवश्यकताओं पर चर्चा करने के लिए संपर्क करें।'
            : 'I am always open to discussing corporate debt syndications, business valuations, TEV studies, debt restructuring, or executive training mandates.'}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-4 rounded-md bg-[#EBE6DC] border border-[#DDD7CC] space-y-1.5 font-sans">
              <div className="flex items-center gap-2 text-xs font-bold text-[#1C1917] uppercase tracking-wider">
                <Lock className="w-4 h-4 text-[#B45309]" />
                <span>{isHi ? 'गैर-प्रकटीकरण गारंटी' : 'Strict Non-Disclosure Guarantee'}</span>
              </div>
              <p className="text-xs text-[#7A7368] leading-relaxed">
                {isHi 
                  ? 'प्रस्तुत की गई सभी कंपनी विवरण, ऋण आवश्यकताएं और वित्तीय डेटा सख्त कॉर्पोरेट एनडीए प्रोटोकॉल के तहत सुरक्षित हैं।'
                  : 'All deal parameters, debt requirements, and company details submitted are handled under strict corporate NDA protocols.'}
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="p-3.5 rounded-md work-card flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#1C1917] text-[#F59E0B] flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[#7A7368] font-sans">{isHi ? 'ईमेल पता' : 'Direct Email'}</div>
                  <a href={`mailto:${personalInfo.contact.email}`} className="text-xs sm:text-sm font-semibold text-[#1C1917] hover:text-[#B45309] font-sans">
                    {personalInfo.contact.email}
                  </a>
                </div>
              </div>

              <div className="p-3.5 rounded-md work-card flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#1C1917] text-[#F59E0B] flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[#7A7368] font-sans">{isHi ? 'मोबाइल / व्हाट्सएप' : 'Mobile / WhatsApp'}</div>
                  <a href={`tel:${personalInfo.contact.phone}`} className="text-xs sm:text-sm font-semibold text-[#1C1917] hover:text-[#B45309] font-sans">
                    {personalInfo.contact.phone}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="work-card">
              
              {submitted ? (
                <div className="text-center py-8 space-y-3 font-sans">
                  <CheckCircle2 className="w-10 h-10 text-[#B45309] mx-auto" />
                  <h3 className="text-xl font-serif font-bold text-[#1C1917]">
                    {isHi ? 'जनादेश प्रस्तुति प्राप्त हुई' : 'Mandate Submission Received'}
                  </h3>
                  <p className="text-xs text-[#7A7368] max-w-sm mx-auto">
                    {isHi 
                      ? `धन्यवाद, ${formData.fullName}। मुझे ${formData.serviceCategory} के संबंध में आपकी जांच प्राप्त हुई है। मैं 24 घंटों के भीतर समीक्षा करूंगा और आपसे संपर्क करूंगा।`
                      : `Thank you, ${formData.fullName}. I have received your mandate inquiry regarding ${formData.serviceCategory}. I will review your requirements and respond within 24 hours.`}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-4 py-1.5 rounded bg-[#EBE6DC] text-[#1C1917] text-xs font-semibold hover:bg-[#DDD7CC]"
                  >
                    {isHi ? 'दूसरी पूछताछ भेजें' : 'Submit Another Inquiry'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5 font-sans">
                  <div className="border-b border-[#E5E0D8] pb-2.5 mb-3">
                    <h3 className="text-base font-serif font-bold text-[#1C1917]">
                      {isHi ? 'जनादेश पूछताछ फॉर्म' : 'Mandate Inquiry Form'}
                    </h3>
                    <p className="text-xs text-[#7A7368]">
                      {isHi ? 'प्रत्यक्ष व्यस्तता के लिए अपनी कॉर्पोरेट आवश्यकताएं नीचे भरें' : 'Fill in your corporate requirement details below for direct engagement'}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-[#1C1917] uppercase tracking-wider mb-1">
                        {isHi ? 'पूरा नाम *' : 'Full Name *'}
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder={isHi ? "उदा. राजेश मेहता" : "e.g. Rajesh Mehta"}
                        className="w-full px-3 py-2 rounded bg-[#FFFFFF] border border-[#E5E0D8] text-[#1C1917] placeholder-[#7A7368] text-xs focus:outline-none focus:border-[#1C1917]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#1C1917] uppercase tracking-wider mb-1">
                        {isHi ? 'कंपनी का नाम *' : 'Company Name *'}
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleChange}
                        placeholder={isHi ? "उदा. एपेक्स इंफ्रा प्राइवेट लिमिटेड" : "e.g. Apex Infra Pvt Ltd"}
                        className="w-full px-3 py-2 rounded bg-[#FFFFFF] border border-[#E5E0D8] text-[#1C1917] placeholder-[#7A7368] text-xs focus:outline-none focus:border-[#1C1917]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-[#1C1917] uppercase tracking-wider mb-1">
                        {isHi ? 'कॉर्पोरेट ईमेल *' : 'Corporate Email *'}
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className="w-full px-3 py-2 rounded bg-[#FFFFFF] border border-[#E5E0D8] text-[#1C1917] placeholder-[#7A7368] text-xs focus:outline-none focus:border-[#1C1917]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#1C1917] uppercase tracking-wider mb-1">
                        {isHi ? 'फोन / व्हाट्सएप *' : 'Phone / WhatsApp *'}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-3 py-2 rounded bg-[#FFFFFF] border border-[#E5E0D8] text-[#1C1917] placeholder-[#7A7368] text-xs focus:outline-none focus:border-[#1C1917]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#1C1917] uppercase tracking-wider mb-1">
                      {isHi ? 'सेवा श्रेणी *' : 'Service Category *'}
                    </label>
                    <select
                      name="serviceCategory"
                      value={formData.serviceCategory}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded bg-[#FFFFFF] border border-[#E5E0D8] text-[#1C1917] text-xs focus:outline-none focus:border-[#1C1917]"
                    >
                      {practiceAreas.map((area) => (
                        <option key={area.id} value={area.title}>
                          {area.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-[#1C1917] uppercase tracking-wider mb-1">
                        {isHi ? 'जनादेश आकार' : 'Mandate Size'}
                      </label>
                      <select
                        name="dealSize"
                        value={formData.dealSize}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded bg-[#FFFFFF] border border-[#E5E0D8] text-[#1C1917] text-xs focus:outline-none focus:border-[#1C1917]"
                      >
                        <option value="Below ₹10 Crore">{isHi ? '₹10 करोड़ से कम' : 'Below ₹10 Crore'}</option>
                        <option value="₹10 Crore - ₹50 Crore">₹10 Crore - ₹50 Crore</option>
                        <option value="₹50 Crore - ₹200 Crore">₹50 Crore - ₹200 Crore</option>
                        <option value="Above ₹200 Crore">{isHi ? '₹200 करोड़ से अधिक' : 'Above ₹200 Crore'}</option>
                        <option value="Advisory Mandate">{isHi ? 'सलाहकार / प्रशिक्षण जनादेश' : 'Advisory / Retainer / Training'}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[#1C1917] uppercase tracking-wider mb-1">
                        {isHi ? 'निष्पादन समयरेखा' : 'Execution Timeline'}
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded bg-[#FFFFFF] border border-[#E5E0D8] text-[#1C1917] text-xs focus:outline-none focus:border-[#1C1917]"
                      >
                        <option value="Immediate">{isHi ? 'तत्काल (7-14 दिनों के भीतर)' : 'Immediate (Within 7-14 Days)'}</option>
                        <option value="Within 30 Days">{isHi ? '30 दिनों के भीतर' : 'Within 30 Days'}</option>
                        <option value="Q3 / Q4 Planning">{isHi ? 'Q3 / Q4 योजना' : 'Q3 / Q4 Planning'}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-[#1C1917] uppercase tracking-wider mb-1">
                      {isHi ? 'संक्षिप्त जनादेश विवरण' : 'Brief Mandate Description'}
                    </label>
                    <textarea
                      name="message"
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={isHi ? "ऋण आवश्यकताओं, मूल्यांकन मापदंडों, या आवश्यक सलाह की रूपरेखा दें..." : "Outline key debt requirements, valuation parameters, or advisory assistance needed..."}
                      className="w-full px-3 py-2 rounded bg-[#FFFFFF] border border-[#E5E0D8] text-[#1C1917] placeholder-[#7A7368] text-xs focus:outline-none focus:border-[#1C1917]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#1C1917] hover:bg-[#2E2A27] text-white font-medium text-xs shadow-sm transition-all"
                  >
                    <span>{isHi ? 'सलाहकार जनादेश अनुरोध सबमिट करें' : 'Submit Advisory Mandate Request'}</span>
                    <Send className="w-3.5 h-3.5 text-[#F59E0B]" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
