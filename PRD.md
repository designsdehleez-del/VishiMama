# Product Requirement Document (PRD)
## Personal Advisory Portfolio for Vishwanath Sharma
### Senior Corporate Financial Consultant | Ex-Banking Regional Leader (IndusInd, Kotak, HDFC, ICICI, YES Bank)

---

| Document Metadata | Details |
| :--- | :--- |
| **Principal Consultant** | **Vishwanath Sharma** |
| **Experience Benchmark** | 25+ Years Senior Leadership across Top Indian Banks |
| **Contact Info** | Email: `sharmavn2001@yahoo.com` \| Phone: `+91-9724305602` |
| **Education** | MBA (Finance & Marketing), B.Sc |
| **Document Version** | 1.3.0 (CV Integrated) |
| **Primary Conversion Goal** | Direct Mandate Inquiry Form (Capturing service type, debt/mandate size, urgency, and project brief) |
| **Architecture** | Single-Page Executive Portfolio (Vite + React + Tailwind CSS) |
| **Visual Theme** | Modern Wealth & Tech (Dark Slate/Onyx background `#0B0F17`, Emerald `#10B981` & Teal `#14B8A6` glow accents, Platinum typography) |
| **Deployment Target** | GitHub Repository -> Vercel / Netlify (Supabase backend for lead forms if needed) |
| **Status** | Approved & Ready for Build |

---

## 1. Executive Synopsis & Brand Positioning

### 1.1 Overview
A modern, single-page executive portfolio website for **Vishwanath Sharma**, a distinguished Corporate Financial Consultant and former Senior Banking Executive with **over 25 years of institutional banking experience**. Vishwanath has held key executive roles—including Regional Head, Cluster Head, and Assistant Vice President—across **IndusInd Bank, Kotak Mahindra Bank, ESAF Small Finance Bank, YES Bank, HDFC Bank, and ICICI Bank**.

### 1.2 Core Strengths & Key Career Milestones
* **PAN India Leadership**: Led ₹500+ Crore Branch Balance Sheet (Ahmedabad/Surat), ranking **PAN India #1 in Fee Revenue & Asset Business**.
* **Massive Team & P&L Scale**: Managed regional sales forces of **120+ Assistant Acquisition Managers and 21 Sales Managers** in Mumbai Region (Kotak Mahindra Bank).
* **Institutional & Government Banking**: Regional Head for Government Business Group (Gujarat) at IndusInd Bank and Institutional Business (Gujarat & MP) at Kotak Mahindra Bank.
* **Services Portfolio**: Debt Syndication, Equity Advisory, Business & Asset Valuation, Stressed Asset Resolution (IBC/CIRP), TEV Studies, Corporate Training, and Audit & Due Diligence.

---

## 2. Institutional Banking Career Highlights Timeline

| Period | Role / Title | Institution | Strategic Impact / Scope |
| :--- | :--- | :--- | :--- |
| **Jul 2022 – May 2026** | **Regional Head – Government Business Group (Gujarat)** | **IndusInd Bank** | Headed GBG portfolio across Vadodara, Rajkot, Surat, Vapi & Valsad |
| **Dec 2020 – Jul 2022** | **Cluster Head – Gujarat Cluster** | **ESAF Small Finance Bank** | Established retail liabilities, asset business & microbanking expansion across Gujarat |
| **Feb 2009 – Nov 2020** | **Regional Head (Institutional) / Regional Business Manager / Branch Head** | **Kotak Mahindra Bank** | Ranked #1 PAN India in Fee Revenue & Assets; managed ₹500Cr+ branch; led 140+ person sales force in Mumbai |
| **Oct 2008 – Feb 2009** | **Cluster Wealth Leader – Assistant Vice President (AVP)** | **YES Bank Ltd (Pune)** | Directed wealth management strategy, structured products & compliance |
| **Dec 2003 – Sep 2008** | **Branch Head & Regional Manager (Trade & NR)** | **HDFC Bank / Centurion Bank** | Managed cluster balance sheets, trade finance, Six Sigma process quality |
| **Jun 2001 – Dec 2003** | **Manager – Investment & Services** | **ICICI Bank Ltd** | Wealth management, liability acquisition & third-party cross sell |
| **Oct 1998 – May 2001** | **Assistant Manager** | **M & N Publications Ltd** | Corporate client relationship & space selling strategy |

---

## 3. Academic Credentials & Certifications

* **Master of Business Administration (MBA)** - Dual Specialization in **Finance & Marketing**, Rajasthan University (1996–1998)
* **Bachelor of Science (B.Sc)** - M.D.S. University (1993–1996)
* **Professional Certifications**:
  - Train the Trainer
  - Leadership, Portfolio Management & Project Management
  - Implementing 5S Management & Operational Risk Control

---

## 4. Single-Page Application (SPA) Structure

```
+-----------------------------------------------------------------------------------------------+
| NAVBAR: [ VS Logo ]  About & Credentials   Services   Career Timeline   Downloads   [ Contact ] |
+-----------------------------------------------------------------------------------------------+
| HERO SECTION                                                                                  |
| * Headline: "25+ Years of Institutional Banking Excellence. Executive Financial Advisory."    |
| * Subtitle: Former Regional Head at IndusInd, Kotak, HDFC, YES & ICICI Bank                   |
| * Stat Counters: ₹500+ Cr Branch Managed | PAN India #1 Fee Revenue | 25+ Yrs Banking Leadership|
| * Action Buttons: [ Submit Mandate Inquiry ]   [ Download Executive CV ]                       |
+-----------------------------------------------------------------------------------------------+
| ABOUT & INSTITUTIONAL BANKING LOGOS                                                           |
| * Vishwanath Sharma Executive Profile & Philosophy                                            |
| * Recognized Banking Institutions: IndusInd | Kotak | HDFC | ICICI | YES Bank | ESAF           |
+-----------------------------------------------------------------------------------------------+
| 7 PRACTICE AREA CARDS (Interactive Detail View)                                                |
| 1. Debt Solutions & Financing          5. TEV & Feasibility Studies                           |
| 2. Equity Advisory & M&A               6. Corporate Training & Banking Masterclasses          |
| 3. Valuation (Business, Asset, Tax)    7. Audit, Due Diligence & Financial Analytics          |
| 4. Stressed Assets & Insolvency (IBC)                                                         |
+-----------------------------------------------------------------------------------------------+
| CAREER MILESTONES TIMELINE                                                                    |
| * Interactive chronological timeline highlighting key executive positions & achievements      |
+-----------------------------------------------------------------------------------------------+
| DOWNLOAD CENTER / RESOURCE HUB                                                                |
| * Download Executive CV (`/cv/DOC-20230807-WA0016..docx` & PDF version)                      |
| * Download Capability Decks & Service Brochures (`/service_pdfs/`)                           |
+-----------------------------------------------------------------------------------------------+
| MANDATE INQUIRY FORM (Primary Conversion Goal)                                                |
| * Client Name, Company Name, Email, Phone Number                                              |
| * Service Pillar Dropdown (Debt, Equity, Valuation, TEV, Stressed Assets, Training, Audit)    |
| * Mandate / Deal Size Selection (< ₹10 Cr, ₹10-50 Cr, ₹50-200 Cr, > ₹200 Cr)                 |
| * Urgency / Execution Timeline (Immediate, Within 30 Days, Q3/Q4 Planning)                    |
| * Project Brief & Confidential Message                                                        |
| * [ Submit Advisory Mandate ]                                                                 |
+-----------------------------------------------------------------------------------------------+
| FOOTER                                                                                        |
| * Copyright © Vishwanath Sharma | Direct Contact Info | Strict Client Confidentiality         |
+-----------------------------------------------------------------------------------------------+
```

---

## 5. Next Steps: Building the Application

We will initialize a clean Vite + React + Tailwind CSS project in `d:\Vishi Mama`:
1. Scaffold Vite project with Tailwind CSS & Lucide Icons.
2. Build responsive components following the **Modern Wealth & Tech** design theme.
3. Configure static downloads for the CV and Service PDFs.
4. Verify lead form functionality and responsive layouts across mobile & desktop.
