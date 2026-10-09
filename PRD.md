# Product Requirement Document (PRD) v2.0
## Personal Executive Advisory Portfolio for Vishwanath Sharma
### Senior Corporate Financial Consultant | Ex-Banking Regional Leader (IndusInd, Kotak, HDFC, ICICI, YES Bank, ESAF)

---

| Document Metadata | Details |
| :--- | :--- |
| **Principal Consultant** | **Vishwanath Sharma** |
| **Executive Experience** | 25+ Years Senior Banking Leadership across IndusInd, Kotak, HDFC, ICICI, YES Bank, ESAF |
| **Contact Info** | Email: `sharmavn2001@yahoo.com` \| Phone: `+91-9724305602` \| Location: Vadodara / Ahmedabad, Gujarat |
| **Education** | MBA (Finance & Marketing - Rajasthan University), B.Sc (M.D.S. University) |
| **Document Version** | **2.0.0 (Final Approved Executive Specification)** |
| **Design Reference** | Editorial Warmth & Layout matching `https://vikaschoudhary.vercel.app/` |
| **Visual Theme** | Warm Light Linen Canvas (`#F5F2EB`), Deep Onyx/Charcoal (`#1C1917`), Amber/Gold (`#B45309`), Playfair Display Headlines + Inter Body |
| **Tone & Voice** | Authentic **1st-Person Perspective ("I", "My", "Me")**, AI-written, hyper-professional, zero em-dashes (`—`) |
| **Bilingual Capability** | **English (EN) & Hindi (HI)** functional language switcher in Navbar |
| **Primary Conversion Goal** | Direct Mandate Inquiry Acquisition (Deal size, execution timeline, NDA brief, Executive CV & Deck Downloads) |
| **Architecture** | Single-Page Application (Vite + React + Tailwind CSS) + Single Self-Contained `standalone.html` Bundle |
| **Deployment Target** | GitHub Repository (`https://github.com/designsdehleez-del/VishiMama.git`) -> Vercel Deployment (`vishifinancialservices.vercel.app`) |

---

## 1. Executive Synopsis & Brand Positioning

### 1.1 Overview
A high-converting, editorial executive portfolio website for **Vishwanath Sharma**, a Senior Corporate Financial Consultant and former Banking Regional Leader with over 25 years of institutional executive experience. Throughout his career, Vishwanath has held key executive positions—including Regional Head, Cluster Head, and Assistant Vice President—across **IndusInd Bank, Kotak Mahindra Bank, HDFC Bank, ICICI Bank, YES Bank, and ESAF Small Finance Bank**.

### 1.2 Core Strengths & Key Career Benchmarks
- **PAN India Branch Balance Sheet Leadership**: Managed a **₹500+ Crore Branch Balance Sheet** in Surat (Kotak Mahindra Bank), achieving **#1 PAN India Rank in Fee Revenue and Asset Business** with zero audit risk.
- **Large-Scale Team Direction**: Led a regional sales force of **120+ Assistant Acquisition Managers and 21 Sales Managers** in Mumbai Region (Kotak Mahindra Bank).
- **Institutional & Government Banking Expansion**: Regional Head for Government Business Group (Gujarat) at IndusInd Bank across 5 major districts (Vadodara, Rajkot, Surat, Vapi, Valsad).
- **7 Core Advisory Practice Areas**:
  1. Debt Solutions & Structured Finance (Project Finance, Working Capital, ECB)
  2. Equity Advisory & M&A Solutions (PE/VC Growth Capital, Takeovers, IPO Readiness)
  3. Valuation & Fairness Opinions (Companies Act, Income Tax Act, FEMA/RBI, IBC)
  4. Techno-Economic Viability (TEV) & Feasibility Studies for Consortium Lenders
  5. Stressed Assets & Insolvency (IBC CIRP Resolution Plans, Out-of-Court Restructuring, OTS)
  6. Corporate Training & Banking Masterclasses (Paperless Credit Delivery, GSTR/ITR Diagnostics)
  7. Audit, Due Diligence & Financial Analytics (Buy-side/Sell-side FDD, Forensic Audits)

---

## 2. Visual & Editorial Guidelines (Vikas Choudhary Style Reference)

### 2.1 Color Palette & Typography
- **Background Tone**: Warm Light Linen Canvas (`#F5F2EB`), non-glare and executive.
- **Primary Text & Headings**: Deep Onyx Charcoal (`#1C1917`) for headlines and dark text (`#38342F`) for body paragraphs.
- **Accent Tones**: Warm Amber/Gold (`#B45309`) for tag pills, section highlights, and icon accents; Amber (`#F59E0B`) for CTA arrow accents.
- **Typography System**:
  - Headings & Name Logo: **Playfair Display** (Serif, font-extrabold/bold).
  - Body & Micro-copy: **Inter** (Sans-serif, 16px base, 1.75 line height).
  - Language Switcher & Tag Pills: **JetBrains Mono / Inter** (Sans-serif, uppercase, font-semibold).

### 2.2 UI Component Patterns
- **Top Accent Line**: 3px gradient line (`#1C1917` -> `#B45309` -> `#1C1917`) fixed at top of viewport.
- **Section Label**: Monospace/Inter uppercase micro-tag (`.section-label`, 0.725rem, letter-spacing 0.18em, text `#7A7368`).
- **Hero Photo Card**: Aspect ratio 4:5 rounded photo frame (`.hero__photo-wrapper`, max-width 320px, soft drop shadow).
- **4-Metric Impact Counter**: Border-y grid (`keyMetrics`) displaying 25+ Yrs, ₹500+ Cr, #1 Rank, 140+ Professionals.
- **Currently Callout Block**: Warm amber-bordered highlight callout (`.now-block`, bg `#EBE6DC`, border-left `#B45309`).
- **Work Cards**: Rounded white cards (`.work-card`, bg `#FFFFFF`, border `#E5E0D8`, hover shadow, border `#D6CEC0`).
- **Tag Pills**: Clean rounded pills (`.tag-pill`, bg `#EBE6DC`, text `#38342F`, border `#DDD7CC`).

---

## 3. Section Hierarchy & Architecture

```
+---------------------------------------------------------------------------------------------------+
| NAVBAR (Fixed)                                                                                    |
| [ Vishwanath Sharma ] (Serif Logo)   [ EN / HI Switcher ]   Home  Services  Insights  Story ...  |
+---------------------------------------------------------------------------------------------------+
| HERO SECTION                                                                                      |
| * Section Label: Ex-Regional Head & Banking Leader · Senior Financial Advisory                    |
| * Profile Photo (public/profile.jpg in 4:5 rounded executive wrapper)                             |
| * 1st-Person Narrative Bio (3 AI-written paragraphs)                                              |
| * 4-Metric Impact Counter Grid (25+ Yrs, ₹500+ Cr, #1 Rank PAN India, 140+ Sales Leadership)      |
| * Currently Callout Block (.now-block)                                                            |
| * Action Buttons: [ Submit Advisory Mandate → ]   [ Download Executive CV ↓ ]                     |
+---------------------------------------------------------------------------------------------------+
| SERVICES & PRACTICE AREAS                                                                         |
| * Category Filter Pills (All, Capital Raising, Capital Markets, Corporate Governance, etc.)       |
| * 7 Practice Area Cards with Deliverables scope, icons, and interactive Modal Detail View        |
+---------------------------------------------------------------------------------------------------+
| EXECUTIVE ADVISORY INSIGHTS & MUSINGS                                                             |
| * Catchy Articles: TEV Studies, RBI Debt Restructuring & OTS, Income Tax vs Companies Valuation    |
| * Interactive Modal Reading View                                                                  |
+---------------------------------------------------------------------------------------------------+
| EXECUTIVE STORY & ADVISORY PHILOSOPHY                                                             |
| * Boardroom Photo (public/boardroom.jpg in wide executive frame)                                  |
| * Inspiring Quote Callout: "Capital is easy to promise, but bankable debt syndication..."        |
| * Narrative on bridging promoter strategy with credit committee requirements                     |
+---------------------------------------------------------------------------------------------------+
| PROVEN IMPACT & PERFORMANCE (Track Record)                                                        |
| * Benchmarks: ₹500+ Cr Balance Sheet, 140+ Team Leadership, Government Expansion, Debt Turnaround |
+---------------------------------------------------------------------------------------------------+
| INSTITUTIONAL WORK HISTORY & EDUCATION                                                            |
| * Chronological Work Timeline: IndusInd (2022-2026), ESAF (2020-2022), Kotak (2009-2020),        |
|   YES Bank (2008-2009), HDFC Bank (2003-2008), ICICI Bank (2001-2003)                             |
| * Academic Qualifications Card (MBA Finance/Marketing, B.Sc) + 4 Professional Certifications     |
+---------------------------------------------------------------------------------------------------+
| RESOURCE CENTER / DOWNLOADS                                                                       |
| * Executive CV Download (.docx)                                                                   |
| * Corporate Capability PDF Deck Download (.pdf)                                                   |
+---------------------------------------------------------------------------------------------------+
| MANDATE INQUIRY FORM (Primary Lead Capture)                                                       |
| * Strict NDA & Confidentiality Guarantee Callout                                                  |
| * Direct Contact Cards (Email & Phone)                                                            |
| * Interactive Form: Full Name, Company, Corporate Email, Phone, Service, Deal Size, Timeline, Brief|
+---------------------------------------------------------------------------------------------------+
| FOOTER                                                                                            |
| * Brand, Contact Links, NDA Guarantee, © 2026 Vishwanath Sharma, Smooth Back-to-Top Button        |
+---------------------------------------------------------------------------------------------------+
```

---

## 4. Technical Architecture & File Structure

```
d:\Vishi Mama\
├── vercel.json                  # Clean Vercel SPA deployment configuration
├── vite.config.js               # Vite config with base: './' for relative asset resolution
├── package.json                 # Project dependencies (React 18, Tailwind CSS, Lucide React)
├── standalone.html              # 100% self-contained single HTML file with inlined JS & CSS
├── public/
│   ├── profile.jpg              # Executive profile headshot
│   ├── boardroom.jpg            # Corporate boardroom advisory photo
│   ├── cv/
│   │   └── Vishwanath_Sharma_CV.docx
│   └── service_pdfs/
│       └── Corporate_Services_Capability_Deck.pdf
└── src/
    ├── main.jsx                 # React root entry point
    ├── App.jsx                  # Main application container managing bilingual lang state
    ├── index.css                # Tailwind directives & custom Vikas Choudhary CSS classes
    ├── data/
    │   └── portfolioData.js     # Structured bilingual (en / hi) content without em-dashes
    └── components/
        ├── Navbar.jsx           # Top fixed bar with EN/HI switcher & mobile drawer
        ├── Hero.jsx             # Hero section with photo, 1st-person bio & 4 stat metrics
        ├── Services.jsx         # 7 practice areas with category filter & modal details
        ├── Insights.jsx         # Catchy financial musings & article modal preview
        ├── Story.jsx            # Boardroom photo & executive philosophy quote
        ├── TrackRecord.jsx      # Proven deal & leadership impact benchmarks
        ├── Timeline.jsx         # Work history timeline & Education/Certifications card
        ├── Downloads.jsx        # Resource downloads card for CV & Capability Deck
        ├── InquiryForm.jsx      # High-converting advisory mandate inquiry form
        └── Footer.jsx           # Footer with NDA note & smooth scroll-to-top
```

---

## 5. Verification & Quality Standards

1. **Zero Console Errors**: Complete React tree renders without warnings or exceptions.
2. **Instant Offline Viewing**: `standalone.html` opens cleanly on any machine by double-clicking in File Explorer.
3. **Flawless Vercel Deployments**: Relative asset paths (`base: './'`) and clean `vercel.json` ensure live URL `vishifinancialservices.vercel.app` loads without blank screens.
4. **Bilingual Switching**: Every title, narrative paragraph, category, and form label dynamically updates when toggling between EN and HI in the navbar.
