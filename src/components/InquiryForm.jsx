import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

export default function InquiryForm({ data, lang }) {
  const { contact } = data.personalInfo;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Debt Solutions & Structured Finance',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate direct inquiry submission
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="inquiry" className="py-16 md:py-24 bg-[#EFECE6] border-y border-[#D6CEC0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F2EB] border border-[#D6CEC0] text-xs font-bold text-[#B45309] uppercase tracking-wider">
            {lang === 'en' ? 'Direct Principal Consultancy Contact' : 'प्रत्यक्ष कंसल्टेंसी संपर्क'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
            {lang === 'en' ? 'Initiate a Corporate Mandate Discussion' : 'कॉर्पोरेट कंसल्टेंसी के लिए संपर्क करें'}
          </h2>
          <p className="text-base sm:text-lg text-[#57534E]">
            {lang === 'en'
              ? 'Connect directly with Vishwanath Sharma for confidential debt syndication, TEV studies, regulatory valuation, or turnaround consultancy.'
              : 'ऋण सिंडिकेशन, TEV स्टडीज, मूल्यांकन या टर्नअराउंड कंसल्टेंसी के लिए सीधे संपर्क करें।'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column (5 cols): Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#F5F2EB] rounded-2xl p-6 sm:p-8 border border-[#D6CEC0] shadow-sm space-y-6">
              
              <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                {lang === 'en' ? 'Direct Consultancy Office' : 'कंसल्टेंसी कार्यालय एवं संपर्क'}
              </h3>

              <div className="space-y-4 text-sm text-[#44403C]">
                
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EFECE6] text-[#B45309] flex items-center justify-center border border-[#D6CEC0] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#78716C] uppercase tracking-wider">
                      {lang === 'en' ? 'Official Email' : 'ईमेल'}
                    </span>
                    <a href={`mailto:${contact.email}`} className="font-semibold text-[#1C1917] hover:text-[#B45309] transition-colors">
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EFECE6] text-[#B45309] flex items-center justify-center border border-[#D6CEC0] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#78716C] uppercase tracking-wider">
                      {lang === 'en' ? 'Direct Mobile / WhatsApp' : 'फोन नंबर'}
                    </span>
                    <a href={`tel:${contact.phone}`} className="font-semibold text-[#1C1917] hover:text-[#B45309] transition-colors">
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EFECE6] text-[#B45309] flex items-center justify-center border border-[#D6CEC0] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#78716C] uppercase tracking-wider">
                      {lang === 'en' ? 'Location Presence' : 'स्थान'}
                    </span>
                    <span className="font-semibold text-[#1C1917]">
                      {contact.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#EFECE6] text-[#B45309] flex items-center justify-center border border-[#D6CEC0] shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-[#78716C] uppercase tracking-wider">
                      {lang === 'en' ? 'LinkedIn Executive Profile' : 'लिंक्डइन प्रोफाइल'}
                    </span>
                    <a
                      href={contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#1C1917] hover:text-[#B45309] transition-colors"
                    >
                      vishwanath-sharma-corporate-finance
                    </a>
                  </div>
                </div>

              </div>

              {/* Response Time Notice */}
              <div className="pt-4 border-t border-[#D6CEC0] flex items-center gap-2 text-xs font-medium text-[#78716C]">
                <Clock className="w-4 h-4 text-[#B45309]" />
                <span>
                  {lang === 'en'
                    ? 'Guaranteed response within 24 business hours for corporate mandates.'
                    : '24 घंटे के भीतर प्रतिक्रिया की गारंटी।'}
                </span>
              </div>

            </div>

          </div>

          {/* Right Column (7 cols): Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#F5F2EB] rounded-2xl p-6 sm:p-8 border border-[#D6CEC0] shadow-sm">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#1C1917] text-[#B45309] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                    {lang === 'en' ? 'Mandate Inquiry Received' : 'आपका संदेश प्राप्त हो गया है'}
                  </h3>
                  <p className="text-sm text-[#57534E] max-w-md mx-auto leading-relaxed">
                    {lang === 'en'
                      ? 'Thank you for reaching out. Vishwanath Sharma will review your requirements and respond directly via email or phone within 24 hours.'
                      : 'धन्यवाद। विश्वनाथ शर्मा शीघ्र ही आपसे संपर्क करेंगे।'}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-lg bg-[#EFECE6] border border-[#D6CEC0] text-xs font-bold text-[#1C1917] hover:bg-[#D6CEC0]"
                  >
                    {lang === 'en' ? 'Submit Another Mandate' : 'दूसरा संदेश भेजें'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  <h3 className="font-serif text-xl font-bold text-[#1C1917]">
                    {lang === 'en' ? 'Corporate Consultancy Mandate Inquiry Form' : 'कंसल्टेंसी पूछताछ फॉर्म'}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#78716C] uppercase tracking-wider mb-1.5">
                        {lang === 'en' ? 'Full Name *' : 'पूरा नाम *'}
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Mehta"
                        className="w-full px-4 py-3 rounded-lg bg-[#EFECE6] border border-[#D6CEC0] text-sm text-[#1C1917] focus:outline-none focus:border-[#B45309]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#78716C] uppercase tracking-wider mb-1.5">
                        {lang === 'en' ? 'Official Email *' : 'आधिकारिक ईमेल *'}
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. rmehta@company.com"
                        className="w-full px-4 py-3 rounded-lg bg-[#EFECE6] border border-[#D6CEC0] text-sm text-[#1C1917] focus:outline-none focus:border-[#B45309]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-[#78716C] uppercase tracking-wider mb-1.5">
                        {lang === 'en' ? 'Phone / WhatsApp *' : 'फोन / व्हाट्सएप *'}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91-9876543210"
                        className="w-full px-4 py-3 rounded-lg bg-[#EFECE6] border border-[#D6CEC0] text-sm text-[#1C1917] focus:outline-none focus:border-[#B45309]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#78716C] uppercase tracking-wider mb-1.5">
                        {lang === 'en' ? 'Company / Organization' : 'कंपनी का नाम'}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="e.g. Apex Engineering Pvt Ltd"
                        className="w-full px-4 py-3 rounded-lg bg-[#EFECE6] border border-[#D6CEC0] text-sm text-[#1C1917] focus:outline-none focus:border-[#B45309]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#78716C] uppercase tracking-wider mb-1.5">
                      {lang === 'en' ? 'Primary Consultancy Service Required *' : 'आवश्यक कंसल्टेंसी सेवा *'}
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-[#EFECE6] border border-[#D6CEC0] text-sm text-[#1C1917] focus:outline-none focus:border-[#B45309]"
                    >
                      <option>Debt Solutions & Structured Finance</option>
                      <option>Techno-Economic Viability (TEV) & Feasibility</option>
                      <option>Valuation & Fairness Opinions</option>
                      <option>Stressed Assets & Insolvency (IBC / OTS)</option>
                      <option>Equity Consultancy & M&A Solutions</option>
                      <option>Corporate Training & Masterclasses</option>
                      <option>Audit & Financial Due Diligence</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#78716C] uppercase tracking-wider mb-1.5">
                      {lang === 'en' ? 'Mandate Details / Facility Size' : 'परियोजना विवरण'}
                    </label>
                    <textarea
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={lang === 'en' ? 'Briefly describe your capital requirements, project scope, or turnaround timeline...' : 'अपनी आवश्यकता का संक्षिप्त विवरण लिखें...'}
                      className="w-full px-4 py-3 rounded-lg bg-[#EFECE6] border border-[#D6CEC0] text-sm text-[#1C1917] focus:outline-none focus:border-[#B45309]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg bg-[#1C1917] text-[#F5F2EB] font-bold text-sm hover:bg-[#B45309] transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>{lang === 'en' ? 'Submit Confidential Mandate Request' : 'गोपनीय अनुरोध भेजें'}</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-xs text-[#78716C]">
                    <ShieldCheck className="w-4 h-4 text-[#B45309]" />
                    <span>{lang === 'en' ? '100% Confidentiality Assured under Non-Disclosure Standards.' : '100% गोपनीयता की गारंटी।'}</span>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
