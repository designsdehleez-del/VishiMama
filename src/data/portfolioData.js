export const portfolioData = {
  en: {
    personalInfo: {
      name: "Vishwanath Sharma",
      title: "Senior Corporate Financial Consultant & Investment Advisor",
      tagline: "25+ Years of Institutional Banking Leadership & Corporate Advisory Excellence",
      photo: "profile.jpg",
      boardroomPhoto: "boardroom.jpg",
      bioParagraphs: [
        "I am a Senior Corporate Financial Consultant and former Banking Regional Leader with over 25 years of institutional executive experience. Throughout my career, I have held senior leadership positions including Regional Head, Cluster Head, and Assistant Vice President across premier institutions such as IndusInd Bank, Kotak Mahindra Bank, HDFC Bank, ICICI Bank, YES Bank, and ESAF Small Finance Bank.",
        "My advisory practice bridges corporate financial strategy with institutional credit requirements. I specialize in high-value Debt Syndications, bankable Techno-Economic Viability (TEV) Studies, Business Valuations under regulatory frameworks, NCLT and IBC Stressed Asset Resolutions, and Financial Audits.",
        "Having managed multi-hundred crore balance sheets (including a ₹500+ Cr branch in Surat ranked #1 PAN India in Fee Revenue) and led sales teams of over 140 professionals in Mumbai, I provide direct, battle-tested principal advisory to CFOs, corporate promoters, and institutional investors."
      ],
      executiveStory: {
        title: "Strategic Financial Solutions Built on Institutional Rigor",
        quote: "Capital is easy to promise, but bankable debt syndication requires aligning project reality with institutional risk frameworks.",
        paragraphs: [
          "Over two decades in Indian banking taught me that most transaction failures stem from a breakdown in communication between corporate promoters and institutional credit committees. Promoters focus on commercial potential, while lenders require empirical sensitivity modeling and regulatory compliance.",
          "I established my independent advisory practice to solve this disconnect. Whether securing project finance for an infrastructure enterprise or formulating an out-of-court restructuring plan under RBI guidelines, I manage the mandate directly from initial diagnostic to final execution."
        ]
      },
      contact: {
        email: "sharmavn2001@yahoo.com",
        phone: "+91-9724305602",
        location: "Vadodara / Ahmedabad, Gujarat, India",
        linkedin: "https://www.linkedin.com/in/vishwanath-sharma-corporate-finance"
      },
      academics: [
        {
          degree: "MBA (Finance & Marketing)",
          institution: "Rajasthan University, Jaipur",
          year: "1996 - 1998"
        },
        {
          degree: "B.Sc (Bachelor of Science)",
          institution: "M. D. S. University",
          year: "1993 - 1996"
        }
      ],
      certifications: [
        "Leadership, Portfolio Management & Project Management",
        "Train the Trainer - Executive Soft Skills & Banking",
        "Implementing 5S Management & Operational Risk Controls",
        "Bank on Me - Advanced Banking & Credit Diagnostics"
      ],
      keyMetrics: [
        { label: "Banking & Advisory Experience", value: "25+", suffix: "Years" },
        { label: "Branch Balance Sheet Managed", value: "₹500+", suffix: "Cr+" },
        { label: "PAN India Rank in Fee Revenue", value: "#1", suffix: "Rank" },
        { label: "Regional Team Size Led", value: "140+", suffix: "Professionals" }
      ],
      currentlyWorkingOn: "Executing mid-market Debt Syndications, bankable TEV Reports for consortium lenders, Regulatory Valuations under Companies Act & Income Tax Act, and OTS and CIRP Stressed Asset Resolution plans across Gujarat and PAN India."
    },

    navLinks: [
      { name: 'Home', href: '#home', id: 'home' },
      { name: 'Services', href: '#services', id: 'services' },
      { name: 'Insights', href: '#insights', id: 'insights' },
      { name: 'Story', href: '#story', id: 'story' },
      { name: 'Track Record', href: '#track-record', id: 'track-record' },
      { name: 'Experience', href: '#timeline', id: 'timeline' },
      { name: 'Downloads', href: '#downloads', id: 'downloads' },
      { name: 'Contact', href: '#inquiry', id: 'inquiry' },
    ],

    practiceAreas: [
      {
        id: "debt-solutions",
        title: "Debt Solutions & Structured Finance",
        category: "Capital Raising",
        iconName: "TrendingUp",
        shortDescription: "I structure and syndicate project finance, term loans, working capital facilities, and cross-border ECB borrowing for corporate enterprises.",
        fullDescription: "I assist mid-market corporates, infrastructure developers, and promoters in structuring lender-compliant debt proposals. My institutional banking background ensures competitive pricing, optimal covenant structures, and expedited credit committee approvals.",
        scope: [
          "Project Finance & Term Loans for Infrastructure, Energy, & Manufacturing",
          "Working Capital Facilities (Cash Credit, Overdraft, LC, Bank Guarantees)",
          "External Commercial Borrowings (ECB) & Cross-Border Buyer's Credit",
          "Equipment Finance, Factoring, & Asset-Backed Lending",
          "Leveraged Buyouts (LBOs) & Credit Rating Advisory"
        ],
        targetClients: "Mid-Market Corporates, Infrastructure Developers, Manufacturing Enterprises, PE Portfolio Companies.",
        pdfLink: "service_pdfs/Corporate_Services_Capability_Deck.pdf"
      },
      {
        id: "equity-mna",
        title: "Equity Advisory & M&A Solutions",
        category: "Capital Markets",
        iconName: "PieChart",
        shortDescription: "I advise growth-stage companies and corporate promoters on Private Equity fundraising, M&A transactions, takeovers, buybacks, and public market listings.",
        fullDescription: "I guide business founders through the entire equity capital lifecycle including investor presentation structuring, financial valuation modeling, term sheet negotiations, and strategic M&A execution.",
        scope: [
          "Private Equity (PE) & Venture Capital (VC) Growth Capital Raising",
          "Buy-side & Sell-side Mergers & Acquisitions (M&A) Execution",
          "Takeovers, Buyback Offers, & Stock Exchange De-Listing Advisory",
          "IPO, FPO, Rights Issue, & Qualified Institutional Placements (QIP)",
          "Term Sheet Negotiation & Investor Readiness Structuring"
        ],
        targetClients: "High-Growth Startups, Enterprise Promoters, PE Investors, Corporate Buyers.",
        pdfLink: "service_pdfs/Corporate_Services_Capability_Deck.pdf"
      },
      {
        id: "valuation-services",
        title: "Valuation & Fairness Opinions",
        category: "Corporate Governance",
        iconName: "Award",
        shortDescription: "I deliver independent, regulatory-compliant valuation reports for business equity, real estate, plant and machinery, ESOPs, and intangible assets.",
        fullDescription: "I prepare certified valuation reports mandated under the Income Tax Act, FEMA and RBI guidelines, Companies Act, and Insolvency and Bankruptcy Code (IBC).",
        scope: [
          "Tangible Asset Valuation: Land & Building, Plant & Machinery",
          "Financial Assets & Securities Valuation (DCF, Multiples, Asset-Based)",
          "Regulatory Valuations under Income Tax Act, FEMA/RBI, & Companies Act",
          "ESOP Structuring, Fair Market Valuation, & Impairment Testing (Ind AS/IFRS)",
          "Brand & Intangible Asset Valuation"
        ],
        targetClients: "CFOs, Tax Directors, PE/VC Investors, Auditors, Regulatory Bodies.",
        pdfLink: "service_pdfs/Corporate_Services_Capability_Deck.pdf"
      },
      {
        id: "tev-feasibility",
        title: "Techno-Economic Viability (TEV) & Feasibility",
        category: "Lender Advisory",
        iconName: "FileCheck",
        shortDescription: "I author bankable TEV study reports and conduct technical risk assessments required by consortium lenders prior to multi-crore credit sanctions.",
        fullDescription: "I evaluate technical parameters, manufacturing feasibility, market demand elasticity, and sensitivity cash flow models to deliver TEV reports that satisfy bank credit committees.",
        scope: [
          "Bankable Techno-Economic Viability (TEV) Study Reports",
          "Technical Risk & Manufacturing Capability Assessment",
          "Market Demand Evaluation & Financial Sensitivity Modeling",
          "Lender's Independent Engineer (LIE) Services & Drawdown Verification",
          "Detailed Project Report (DPR) Preparation for Bank Approvals"
        ],
        targetClients: "Commercial Banks, Consortium Lenders, Project Promoters, Infrastructure Funds.",
        pdfLink: "service_pdfs/Corporate_Services_Capability_Deck.pdf"
      },
      {
        id: "stressed-assets-ibc",
        title: "Stressed Assets & Insolvency (IBC)",
        category: "Turnaround Advisory",
        iconName: "ShieldAlert",
        shortDescription: "I specialize in out-of-court debt restructuring, One-Time Settlement (OTS) structuring, and NCLT resolution plan formulation under the IBC Code.",
        fullDescription: "I handhold corporate promoters and Resolution Professionals (RPs) through complex debt turnarounds under the Insolvency and Bankruptcy Code (IBC) and RBI prudential restructuring guidelines.",
        scope: [
          "Corporate Insolvency Resolution Process (CIRP) Advisory",
          "Formulation & Submission of Bankable Resolution Plans",
          "Out-of-Court Debt Restructuring & One-Time Settlement (OTS)",
          "Promoter Handholding with Minimal Franchise & Financial Risk Exposure",
          "Liquidation Management & Stressed Asset Buying Advisory"
        ],
        targetClients: "Stressed Enterprises, Resolution Professionals (RPs), ARC Companies, Lenders.",
        pdfLink: "service_pdfs/Corporate_Services_Capability_Deck.pdf"
      },
      {
        id: "corporate-training",
        title: "Corporate Training & Masterclasses",
        category: "Capability Building",
        iconName: "GraduationCap",
        shortDescription: "I conduct executive masterclasses for banking credit teams and CFOs on paperless credit delivery, financial diagnostics, and IBC regulations.",
        fullDescription: "I leverage my senior banking leadership background to train institutional credit officers, bank managers, and corporate finance departments on financial statement diagnostics and risk management.",
        scope: [
          "Paperless Credit Delivery & Balance Sheet Analysis for Banking Staff",
          "GSTR, Income Tax Return, & Bank Statement Diagnostic Training",
          "Corporate Finance, Valuation Methods, & IBC Regulations Workshops",
          "Soft Skills, Leadership, & Team Building for Finance Leaders",
          "1-on-1 Executive Coaching for CFOs and Finance Controllers"
        ],
        targetClients: "Banks, NBFCs, Corporate Finance Teams, Industry Associations.",
        pdfLink: "service_pdfs/Corporate_Services_Capability_Deck.pdf"
      },
      {
        id: "audit-due-diligence",
        title: "Audit, Due Diligence & Financial Analytics",
        category: "Assurance & Risk",
        iconName: "SearchCheck",
        shortDescription: "I execute buy-side and sell-side financial due diligence, forensic audits, and integrated multi-source financial reconciliations.",
        fullDescription: "I provide corporate acquirers, PE funds, and lenders with financial health audits, fund flow verifications, and compliance checks to mitigate transaction risk.",
        scope: [
          "Buy-side & Sell-side Financial Due Diligence (FDD)",
          "Forensic Financial Audits & Fund Flow Verification",
          "Integrated Data Analytics (Bank Statement, GSTR, ITR Reconciliation)",
          "Internal Controls Assessment & Risk Management Audits",
          "Compliance Verification & KYC Validation for Institutional Lenders"
        ],
        targetClients: "Acquirers, PE Funds, Corporate Boards, Financial Regulators.",
        pdfLink: "service_pdfs/Corporate_Services_Capability_Deck.pdf"
      }
    ],

    insights: [
      {
        id: "insight-1",
        title: "Demystifying Bankable TEV Studies for Consortium Lenders",
        date: "March 2026",
        readTime: "5 min read",
        category: "Project Finance",
        summary: "Why traditional feasibility reports fail in bank credit committees, and how structured sensitivity analysis bridges the gap between project promoters and institutional risk officers.",
        linkText: "Read Article →"
      },
      {
        id: "insight-2",
        title: "Navigating Debt Restructuring & OTS Under RBI Frameworks",
        date: "February 2026",
        readTime: "6 min read",
        category: "Turnaround Advisory",
        summary: "Key tactical considerations for promoters attempting out-of-court debt restructuring, balancing lender recovery benchmarks with business operational viability.",
        linkText: "Read Article →"
      },
      {
        id: "insight-3",
        title: "Valuation Under Income Tax Act vs. Companies Act",
        date: "January 2026",
        readTime: "4 min read",
        category: "Corporate Valuation",
        summary: "A practical guide for CFOs on navigating conflicting valuation methodologies under DCF, Net Asset Value, and Fair Market Value regulatory standards.",
        linkText: "Read Article →"
      }
    ],

    careerTimeline: [
      {
        period: "July 2022 - May 2026",
        role: "Regional Head – Government Business Group (Gujarat)",
        company: "IndusInd Bank",
        location: "Vadodara, Gujarat",
        details: "I managed the Government Business Group portfolio across Vadodara, Rajkot, Surat, Vapi, and Valsad, establishing IndusInd as the primary banking partner for public sector entities."
      },
      {
        period: "Dec 2020 - July 2022",
        role: "Cluster Head – Gujarat Cluster",
        company: "ESAF Small Finance Bank",
        location: "Gujarat Region",
        details: "I spearheaded ESAF expansion across major Gujarat towns, overseeing retail liabilities, asset portfolios, fee income generation, and microbanking footprint."
      },
      {
        period: "Feb 2009 - Nov 2020",
        role: "Regional Business Manager & Head Institutional Business",
        company: "Kotak Mahindra Bank",
        location: "Mumbai, Gujarat & MP",
        details: "Over an 11-year tenure, I managed the ₹500+ Cr Surat branch (ranking PAN India #1 in Fee Revenue & Assets), directed a sales team of 140+ in Mumbai, and headed Institutional Business across Gujarat and Madhya Pradesh."
      },
      {
        period: "Oct 2008 - Feb 2009",
        role: "Cluster Wealth Leader (Assistant Vice President)",
        company: "YES Bank Ltd",
        location: "Pune",
        details: "I led senior relationship managers in executing wealth management strategies, structured fee product distribution, and group compliance."
      },
      {
        period: "Dec 2003 - Sep 2008",
        role: "Branch Head & Regional Manager (Trade & NR)",
        company: "HDFC Bank Ltd / Centurion Bank of Punjab",
        location: "Gujarat Cluster",
        details: "I expanded cluster balance sheets, conducted network training on trade finance and NR products, and implemented Six Sigma operational controls."
      },
      {
        period: "June 2001 - Dec 2003",
        role: "Manager - Investment & Services",
        company: "ICICI Bank Ltd",
        location: "India",
        details: "I managed liability acquisition, walk-in wealth management cross-sell, and high-net-worth portfolio retention."
      }
    ],

    trackRecordDeals: [
      {
        title: "₹500+ Cr Branch Balance Sheet Scale",
        category: "Banking Leadership",
        institution: "Kotak Mahindra Bank",
        achievement: "I led the Surat branch to rank PAN India #1 in Fee Revenue and Asset Business while maintaining zero audit risk.",
        impact: "Established dominant market presence in key industrial hub."
      },
      {
        title: "140+ Member Regional Sales Leadership",
        category: "Executive Management",
        institution: "Kotak Mahindra Bank - Mumbai",
        achievement: "I directed 120 Assistant Acquisition Managers and 21 Sales Managers delivering record CASA acquisition for Mumbai Region.",
        impact: "Drove multi-fold expansion in transaction volume."
      },
      {
        title: "Government & Institutional Expansion",
        category: "Institutional Banking",
        institution: "IndusInd Bank - Gujarat",
        achievement: "I spearheaded GBG business growth across 5 major districts including Vadodara, Rajkot, Surat, Vapi, and Valsad.",
        impact: "Secured primary banking status for major public sector accounts."
      },
      {
        title: "Corporate Debt & Stressed Asset Resolutions",
        category: "Advisory & Restructuring",
        institution: "Advisory Mandates",
        achievement: "I provided end-to-end advisory for promoter debt restructuring, OTS settlement, and bankable TEV report submissions.",
        impact: "Protected client franchise value while securing lender compliance."
      }
    ]
  },

  hi: {
    personalInfo: {
      name: "विश्वनाथ शर्मा",
      title: "वरिष्ठ कॉर्पोरेट वित्तीय सलाहकार एवं निवेश विशेषज्ञ",
      tagline: "25+ वर्षों का बैंकिंग नेतृत्व एवं कॉर्पोरेट परामर्श अनुभव",
      photo: "profile.jpg",
      boardroomPhoto: "boardroom.jpg",
      bioParagraphs: [
        "मैं एक वरिष्ठ कॉर्पोरेट वित्तीय सलाहकार और पूर्व बैंकिंग क्षेत्रीय प्रमुख हूँ, जिसके पास 25 से अधिक वर्षों का संस्थागत अनुभव है। अपने करियर के दौरान, मैंने इंडसइंड बैंक, कोटक महिंद्रा बैंक, एचडीएफसी बैंक, आईसीआईसीआई बैंक, यस बैंक और एएसएएफ स्मॉल फाइनेंस बैंक जैसे प्रमुख संस्थानों में क्षेत्रीय प्रमुख, क्लस्टर प्रमुख और सहायक उपाध्यक्ष जैसे वरिष्ठ पदों पर कार्य किया है।",
        "मेरा परामर्श कार्य कॉर्पोरेट वित्तीय रणनीति और संस्थागत क्रेडिट आवश्यकताओं के बीच संतुलन स्थापित करता है। मैं उच्च-मूल्य वाले ऋण सिंडिकेशन, बैंक योग्य तकनीकी-आर्थिक व्यवहार्यता (TEV) अध्ययन, नियामक मूल्यांकन, NCLT एवं IBC तनावग्रस्त परिसंपत्ति समाधान और वित्तीय ऑडिट में विशेषज्ञता रखता हूँ।",
        "सूरत में ₹500+ करोड़ के शाखा बैलेंस शीट का प्रबंधन करने (जो शुल्क राजस्व में पूरे भारत में नंबर 1 पर रहा) और मुंबई में 140 से अधिक पेशेवरों की टीम का नेतृत्व करने के अनुभव के साथ, मैं सीएफओ, कॉर्पोरेट प्रमोटरों और संस्थागत निवेशकों को प्रत्यक्ष परामर्श प्रदान करता हूँ।"
      ],
      executiveStory: {
        title: "संस्थागत अनुशासन पर आधारित रणनीतिक वित्तीय समाधान",
        quote: "पूंजी का वादा करना आसान है, लेकिन बैंक योग्य ऋण सिंडिकेशन के लिए परियोजना की वास्तविकता को संस्थागत जोखिम ढांचे के साथ जोड़ना आवश्यक है।",
        paragraphs: [
          "भारतीय बैंकिंग में दो दशकों से अधिक के अनुभव ने मुझे सिखाया कि अधिकांश सौदों की विफलता कॉर्पोरेट प्रमोटरों और संस्थागत क्रेडिट समितियों के बीच संचार की कमी के कारण होती है। प्रमोटर वाणिज्यिक क्षमता पर ध्यान केंद्रित करते हैं, जबकि ऋणदाताओं को डेटा-आधारित संवेदनशीलता मॉडल और नियामक अनुपालन की आवश्यकता होती है।",
          "मैंने इस अंतर को दूर करने के लिए अपनी स्वतंत्र परामर्श अभ्यास की स्थापना की। चाहे किसी बुनियादी ढांचा उद्यम के लिए परियोजना वित्त सुरक्षित करना हो या आरबीआई दिशानिर्देशों के तहत अदालत से बाहर पुनर्गठन योजना तैयार करना हो, मैं प्रारंभिक निदान से लेकर अंतिम निष्पादन तक पूरे जनादेश का प्रबंधन स्वयं करता हूँ।"
        ]
      },
      contact: {
        email: "sharmavn2001@yahoo.com",
        phone: "+91-9724305602",
        location: "वडोदरा / अहमदाबाद, गुजरात, भारत",
        linkedin: "https://www.linkedin.com/in/vishwanath-sharma-corporate-finance"
      },
      academics: [
        {
          degree: "एमबीए (वित्त एवं विपणन)",
          institution: "राजस्थान विश्वविद्यालय, जयपुर",
          year: "1996 - 1998"
        },
        {
          degree: "बी.एससी (बैचलर ऑफ साइंस)",
          institution: "एम. डी. एस. विश्वविद्यालय",
          year: "1993 - 1996"
        }
      ],
      certifications: [
        "नेतृत्व, पोर्टफोलियो प्रबंधन एवं परियोजना प्रबंधन",
        "ट्रेन द ट्रेनर - कार्यकारी कौशल एवं बैंकिंग",
        "5S प्रबंधन एवं परिचालन जोखिम नियंत्रण",
        "बैंक ऑन मी - उन्नत बैंकिंग एवं क्रेडिट निदान"
      ],
      keyMetrics: [
        { label: "बैंकिंग एवं परामर्श अनुभव", value: "25+", suffix: "वर्ष" },
        { label: "प्रबंधित शाखा बैलेंस शीट", value: "₹500+", suffix: "करोड़+" },
        { label: "शुल्क राजस्व में अखिल भारतीय रैंक", value: "#1", suffix: "रैंक" },
        { label: "नेतृत्व वाली क्षेत्रीय टीम का आकार", value: "140+", suffix: "पेशेवर" }
      ],
      currentlyWorkingOn: "मध्य-बाजार ऋण सिंडिकेशन, बैंक योग्य TEV रिपोर्ट, कंपनी अधिनियम और आयकर अधिनियम के तहत नियामक मूल्यांकन, और गुजरात एवं पूरे भारत में OTS तथा CIRP तनावग्रस्त परिसंपत्ति समाधान योजनाओं का निष्पादन।"
    },

    navLinks: [
      { name: 'होम', href: '#home', id: 'home' },
      { name: 'सेवाएँ', href: '#services', id: 'services' },
      { name: 'लेख एवं विचार', href: '#insights', id: 'insights' },
      { name: 'कहानी', href: '#story', id: 'story' },
      { name: 'ट्रैक रिकॉर्ड', href: '#track-record', id: 'track-record' },
      { name: 'अनुभव', href: '#timeline', id: 'timeline' },
      { name: 'डाउनलोड', href: '#downloads', id: 'downloads' },
      { name: 'संपर्क', href: '#inquiry', id: 'inquiry' },
    ],

    practiceAreas: [
      {
        id: "debt-solutions",
        title: "ऋण समाधान एवं संरचित वित्त (Debt Solutions)",
        category: "पूंजी जुटाना",
        iconName: "TrendingUp",
        shortDescription: "मैं कॉर्पोरेट उद्यमों के लिए परियोजना वित्त, सावधि ऋण, कार्यशील पूंजी सुविधाओं और सीमा पार ईसीबी उधार की संरचना और सिंडिकेशन करता हूँ।",
        fullDescription: "मैं मध्य-बाजार कॉर्पोरेट्स, इंफ्रास्ट्रक्चर डेवलपर्स और प्रमोटरों को ऋण प्रस्ताव तैयार करने में सहायता करता हूँ। मेरी संस्थागत बैंकिंग पृष्ठभूमि प्रतिस्पर्धी दरों और क्रेडिट समिति की त्वरित स्वीकृति सुनिश्चित करती है।",
        scope: [
          "इंफ्रास्ट्रक्चर, ऊर्जा और विनिर्माण के लिए प्रोजेक्ट फाइनेंस एवं टर्म लोन",
          "कार्यशील पूंजी सुविधाएं (कैश क्रेडिट, ओवरड्राफ्ट, एलसी, बैंक गारंटी)",
          "बाहरी वाणिज्यिक उधार (ECB) और सीमा पार खरीदार क्रेडिट",
          "उपकरण वित्त, फैक्टरिंग और परिसंपत्ति-आधारित उधार",
          "लीवरेज्ड बायआउट्स (LBOs) एवं क्रेडिट रेटिंग परामर्श"
        ],
        targetClients: "मध्य-बाजार कॉर्पोरेट्स, इंफ्रास्ट्रक्चर डेवलपर्स, विनिर्माण उद्यम, पीई पोर्टफोलियो कंपनियां।",
        pdfLink: "service_pdfs/Corporate_Services_Capability_Deck.pdf"
      },
      {
        id: "equity-mna",
        title: "इक्विटी सलाहकार एवं एम एंड ए (Equity & M&A)",
        category: "पूंजी बाजार",
        iconName: "PieChart",
        shortDescription: "मैं विकास-चरण की कंपनियों और प्रमोटरों को प्राइवेट इक्विटी फंड जुटाने, विलय एवं अधिग्रहण सौदों और सार्वजनिक बाजार सूचियों पर सलाह देता हूँ।",
        fullDescription: "मैं व्यवसाय संस्थापकों को इक्विटी पूंजी जीवन चक्र के दौरान निवेशक प्रस्तुति संरचना, वित्तीय मूल्यांकन मॉडलिंग और रणनीतिक एम एंड ए निष्पादन में मार्गदर्शन करता हूँ।",
        scope: [
          "प्राइवेट इक्विटी (PE) और वेंचर कैपिटल (VC) विकास पूंजी जुटाना",
          "खरीद-पक्ष एवं बिक्री-पक्ष विलय और अधिग्रहण (M&A) निष्पादन",
          "अधिग्रहण, बायबैक ऑफर और स्टॉक एक्सचेंज डी-लिस्टिंग परामर्श",
          "आईपीओ, एफपीओ, राइट्स इश्यू और योग्य संस्थागत प्लेसमेंट (QIP)",
          "टर्म शीट बातचीत और निवेशक तत्परता संरचना"
        ],
        targetClients: "उच्च-विकास वाले स्टार्टअप, उद्यम प्रमोटर, पीई निवेशक, कॉर्पोरेट खरीदार।",
        pdfLink: "service_pdfs/Corporate_Services_Capability_Deck.pdf"
      },
      {
        id: "valuation-services",
        title: "मूल्यांकन एवं निष्पक्षता राय (Valuation)",
        category: "कॉर्पोरेट प्रशासन",
        iconName: "Award",
        shortDescription: "मैं व्यावसायिक इक्विटी, अचल संपत्ति, संयंत्र और मशीनरी, ईएसओपी और अमूर्त परिसंपत्तियों के लिए स्वतंत्र नियामक मूल्यांकन रिपोर्ट प्रदान करता हूँ।",
        fullDescription: "मैं आयकर अधिनियम, फेमा/आरबीआई दिशानिर्देशों, कंपनी अधिनियम और दिवाला एवं दिवालियापन संहिता (IBC) के तहत प्रमाणित मूल्यांकन रिपोर्ट तैयार करता हूँ।",
        scope: [
          "मूर्त परिसंपत्ति मूल्यांकन: भूमि और भवन, संयंत्र और मशीनरी",
          "वित्तीय परिसंपत्ति एवं प्रतिभूति मूल्यांकन (DCF, गुणक, परिसंपत्ति-आधारित)",
          "आयकर अधिनियम, फेमा/आरबीआई और कंपनी अधिनियम के तहत नियामक मूल्यांकन",
          "ईएसओपी संरचना, उचित बाजार मूल्य निर्धारण और हानि परीक्षण",
          "ब्रांड और अमूर्त परिसंपत्ति मूल्यांकन"
        ],
        targetClients: "सीएफओ, टैक्स निदेशक, पीई/वीसी निवेशक, लेखा परीक्षक, नियामक निकाय।",
        pdfLink: "service_pdfs/Corporate_Services_Capability_Deck.pdf"
      },
      {
        id: "tev-feasibility",
        title: "तकनीकी-आर्थिक व्यवहार्यता (TEV Studies)",
        category: "ऋणदाता परामर्श",
        iconName: "FileCheck",
        shortDescription: "मैं बैंक योग्य TEV अध्ययन रिपोर्ट लिखता हूँ और बहु-करोड़ क्रेडिट स्वीकृतियों से पहले बैंक संघों द्वारा आवश्यक तकनीकी जोखिम मूल्यांकन करता हूँ।",
        fullDescription: "मैं तकनीकी मापदंडों, विनिर्माण व्यवहार्यता, बाजार मांग लोच और संवेदनशीलता नकद प्रवाह मॉडल का मूल्यांकन करता हूँ जो बैंक क्रेडिट समितियों को संतुष्ट करते हैं।",
        scope: [
          "बैंक योग्य तकनीकी-आर्थिक व्यवहार्यता (TEV) अध्ययन रिपोर्ट",
          "तकनीकी जोखिम एवं विनिर्माण क्षमता मूल्यांकन",
          "बाजार मांग मूल्यांकन एवं वित्तीय संवेदनशीलता मॉडलिंग",
          "ऋणदाता का स्वतंत्र इंजीनियर (LIE) सेवाएं एवं ड्राडाउन सत्यापन",
          "बैंक स्वीकृतियों के लिए विस्तृत परियोजना रिपोर्ट (DPR) की तैयारी"
        ],
        targetClients: "वाणिज्यिक बैंक, कंसोर्टियम ऋणदाता, परियोजना प्रमोटर, इंफ्रास्ट्रक्चर फंड।",
        pdfLink: "service_pdfs/Corporate_Services_Capability_Deck.pdf"
      },
      {
        id: "stressed-assets-ibc",
        title: "तनावग्रस्त परिसंपत्तियां एवं दिवाला (IBC Advisory)",
        category: "टर्नअराउंड परामर्श",
        iconName: "ShieldAlert",
        shortDescription: "मैं आईबीसी कोड के तहत अदालत से बाहर ऋण पुनर्गठन, एकमुश्त निपटान (OTS) संरचना और एनसीएलटी संकल्प योजना तैयार करने में विशेषज्ञता रखता हूँ।",
        fullDescription: "मैं दिवाला और दिवालियापन संहिता (IBC) और आरबीआई विवेकपूर्ण पुनर्गठन दिशानिर्देशों के तहत जटिल ऋण पुनरुद्धार के माध्यम से प्रमोटरों का मार्गदर्शन करता हूँ।",
        scope: [
          "कॉर्पोरेट दिवाला समाधान प्रक्रिया (CIRP) परामर्श",
          "बैंक योग्य समाधान योजनाओं का निर्माण एवं प्रस्तुति",
          "अदालत से बाहर ऋण पुनर्गठन एवं एकमुश्त निपटान (OTS)",
          "न्यूनतम वित्तीय जोखिम जोखिम के साथ प्रमोटर सहायता",
          "समापन प्रबंधन एवं तनावग्रस्त परिसंपत्ति खरीद परामर्श"
        ],
        targetClients: "तनावग्रस्त उद्यम, समाधान पेशेवर (RPs), एआरसी कंपनियां, ऋणदाता।",
        pdfLink: "service_pdfs/Corporate_Services_Capability_Deck.pdf"
      },
      {
        id: "corporate-training",
        title: "कॉर्पोरेट प्रशिक्षण एवं मास्टरक्लास",
        category: "क्षमता निर्माण",
        iconName: "GraduationCap",
        shortDescription: "मैं बैंकिंग क्रेडिट टीमों और सीएफओ के लिए पेपरलेस क्रेडिट डिलीवरी, वित्तीय निदान और आईबीसी नियमों पर कार्यकारी मास्टरक्लास आयोजित करता हूँ।",
        fullDescription: "मैं संस्थागत क्रेडिट अधिकारियों और कॉर्पोरेट वित्त विभागों को वित्तीय विवरण निदान और जोखिम प्रबंधन पर प्रशिक्षित करने के लिए अपने वरिष्ठ बैंकिंग नेतृत्व अनुभव का लाभ उठाता हूँ।",
        scope: [
          "बैंकिंग कर्मचारियों के लिए पेपरलेस क्रेडिट डिलीवरी एवं बैलेंस शीट विश्लेषण",
          "जीएसटीआर, आयकर रिटर्न और बैंक स्टेटमेंट डायग्नोस्टिक प्रशिक्षण",
          "कॉर्पोरेट वित्त, मूल्यांकन विधियां और आईबीसी विनियम कार्यशालाएं",
          "वित्त नेताओं के लिए सॉफ्ट स्किल, नेतृत्व और टीम निर्माण",
          "सीएफओ और वित्त नियंत्रकों के लिए व्यक्तिगत कार्यकारी कोचिंग"
        ],
        targetClients: "बैंक, एनबीएफसी, कॉर्पोरेट वित्त टीमें, उद्योग संघ।",
        pdfLink: "service_pdfs/Corporate_Services_Capability_Deck.pdf"
      },
      {
        id: "audit-due-diligence",
        title: "ऑडिट, उचित तत्परता एवं विश्लेषण (Financial Audit)",
        category: "आश्वासन एवं जोखिम",
        iconName: "SearchCheck",
        shortDescription: "मैं खरीद-पक्ष और बिक्री-पक्ष वित्तीय उचित तत्परता, फोरेंसिक ऑडिट और एकीकृत बहु-स्रोत वित्तीय डेटा मिलान का निष्पादन करता हूँ।",
        fullDescription: "मैं कॉर्पोरेट खरीदारों, पीई फंडों और ऋणदाताओं को सौदे के जोखिम को कम करने के लिए गहन वित्तीय स्वास्थ्य ऑडिट और अनुपालन जांच प्रदान करता हूँ।",
        scope: [
          "खरीद-पक्ष एवं बिक्री-पक्ष वित्तीय उचित तत्परता (FDD)",
          "फोरेंसिक वित्तीय ऑडिट एवं फंड प्रवाह सत्यापन",
          "एकीकृत डेटा विश्लेषण (बैंक स्टेटमेंट, जीएसटीआर, आईटीआर मिलान)",
          "आंतरिक नियंत्रण मूल्यांकन एवं जोखिम प्रबंधन ऑडिट",
          "संस्थागत ऋणदाताओं के लिए अनुपालन सत्यापन एवं केवाईसी सत्यापन"
        ],
        targetClients: "अधिग्रहणकर्ता, पीई फंड, कॉर्पोरेट बोर्ड, वित्तीय नियामक।",
        pdfLink: "service_pdfs/Corporate_Services_Capability_Deck.pdf"
      }
    ],

    insights: [
      {
        id: "insight-1",
        title: "बैंक योग्य TEV अध्ययन: कंसोर्टियम ऋणदाताओं के लिए मार्गदर्शिका",
        date: "मार्च 2026",
        readTime: "5 मिनट पढ़ें",
        category: "प्रोजेक्ट फाइनेंस",
        summary: "पारंपरिक व्यवहार्यता रिपोर्ट बैंक क्रेडिट समितियों में क्यों विफल होती हैं, और संरचित संवेदनशीलता विश्लेषण प्रमोटरों और जोखिम अधिकारियों के बीच के अंतर को कैसे पाटता है।",
        linkText: "लेख पढ़ें →"
      },
      {
        id: "insight-2",
        title: "आरबीआई ढांचे के तहत ऋण पुनर्गठन और OTS का प्रबंधन",
        date: "फरवरी 2026",
        readTime: "6 मिनट पढ़ें",
        category: "टर्नअराउंड परामर्श",
        summary: "अदालत से बाहर ऋण पुनर्गठन का प्रयास करने वाले प्रमोटरों के लिए महत्वपूर्ण रणनीतिक विचार, ऋणदाता वसूली मानकों और व्यावसायिक परिचालन व्यवहार्यता का संतुलन।",
        linkText: "लेख पढ़ें →"
      },
      {
        id: "insight-3",
        title: "आयकर अधिनियम बनाम कंपनी अधिनियम के तहत मूल्यांकन",
        date: "जनवरी 2026",
        readTime: "4 मिनट पढ़ें",
        category: "कॉर्पोरेट मूल्यांकन",
        summary: "डीसीएफ, शुद्ध परिसंपत्ति मूल्य और उचित बाजार मूल्य नियामक मानकों के तहत परस्पर विरोधी मूल्यांकन पद्धतियों को नेविगेट करने पर सीएफओ के लिए एक व्यावहारिक गाइड।",
        linkText: "लेख पढ़ें →"
      }
    ],

    careerTimeline: [
      {
        period: "जुलाई 2022 - मई 2026",
        role: "क्षेत्रीय प्रमुख – सरकारी व्यवसाय समूह (गुजरात)",
        company: "इंडसइंड बैंक",
        location: "वडोदरा, गुजरात",
        details: "मैंने वडोदरा, राजकोट, सूरत, वापी और वलसाड में सरकारी व्यवसाय समूह पोर्टफोलियो का प्रबंधन किया, जिससे इंडसइंड सार्वजनिक क्षेत्र की संस्थाओं के लिए प्राथमिक बैंकर बन गया।"
      },
      {
        period: "दिसंबर 2020 - जुलाई 2022",
        role: "क्लस्टर प्रमुख – गुजरात क्लस्टर",
        company: "ईएसएएफ स्मॉल फाइनेंस बैंक",
        location: "गुजरात क्षेत्र",
        details: "मैंने प्रमुख गुजरात शहरों में ईएसएएफ के विस्तार का नेतृत्व किया, खुदरा देनदारियों, परिसंपत्ति पोर्टफोलियो, शुल्क आय और माइक्रोबैंकिंग उपस्थिति की देखरेख की।"
      },
      {
        period: "फरवरी 2009 - नवंबर 2020",
        role: "क्षेत्रीय व्यवसाय प्रबंधक एवं प्रमुख संस्थागत व्यवसाय",
        company: "कोटक महिंद्रा बैंक",
        location: "मुंबई, गुजरात एवं एमपी",
        details: "11 वर्षों के कार्यकाल में, मैंने ₹500+ करोड़ की सूरत शाखा का प्रबंधन किया (शुल्क राजस्व में पूरे भारत में #1 स्थान प्राप्त किया), मुंबई में 140+ की बिक्री टीम का नेतृत्व किया, और गुजरात तथा एमपी में संस्थागत व्यवसाय का नेतृत्व किया।"
      },
      {
        period: "अक्टूबर 2008 - फरवरी 2009",
        role: "क्लस्टर वेल्थ लीडर (सहायक उपाध्यक्ष)",
        company: "यस बैंक लिमिटेड",
        location: "पुणे",
        details: "मैंने वेल्थ प्रबंधन रणनीतियों, संरचित शुल्क उत्पाद वितरण और समूह अनुपालन को निष्पादित करने में वरिष्ठ संबंध प्रबंधकों का नेतृत्व किया।"
      },
      {
        period: "दिसंबर 2003 - सितंबर 2008",
        role: "शाखा प्रमुख एवं क्षेत्रीय प्रबंधक (व्यापार एवं एनआर)",
        company: "एचडीएफसी बैंक / सेंट्यूरियन बैंक ऑफ पंजाब",
        location: "गुजरात क्लस्टर",
        details: "मैंने क्लस्टर balance sheet का विस्तार किया, व्यापार वित्त और एनआर उत्पादों पर नेटवर्क प्रशिक्षण आयोजित किया, और सिक्स सिग्मा परिचालन नियंत्रण लागू किया।"
      },
      {
        period: "जून 2001 - दिसंबर 2003",
        role: "प्रबंधक - निवेश एवं सेवाएं",
        company: "आईसीआईसीआई बैंक लिमिटेड",
        location: "भारत",
        details: "मैंने देयता अधिग्रहण, वेल्थ प्रबंधन क्रॉस-सेल और उच्च-निवल मूल्य वाले ग्राहक पोर्टफोलियो को बनाए रखने का प्रबंधन किया।"
      }
    ],

    trackRecordDeals: [
      {
        title: "₹500+ करोड़ शाखा बैलेंस शीट का विस्तार",
        category: "बैंकिंग नेतृत्व",
        institution: "कोटक महिंद्रा बैंक",
        achievement: "मैंने सूरत शाखा का नेतृत्व करते हुए शून्य ऑडिट जोखिम बनाए रखते हुए शुल्क राजस्व और परिसंपत्ति व्यवसाय में पूरे भारत में #1 स्थान प्राप्त किया।",
        impact: "प्रमुख औद्योगिक केंद्र में हावी बाजार उपस्थिति स्थापित की।"
      },
      {
        title: "140+ सदस्यीय क्षेत्रीय बिक्री नेतृत्व",
        category: "कार्यकारी प्रबंधन",
        institution: "कोटक महिंद्रा बैंक - मुंबई",
        achievement: "मैंने मुंबई क्षेत्र के लिए रिकॉर्ड कासा अधिग्रहण प्रदान करने वाले 120 सहायक अधिग्रहण प्रबंधकों और 21 बिक्री प्रबंधकों का निर्देशन किया।",
        impact: "लेनदेन की मात्रा में कई गुना विस्तार दर्ज किया।"
      },
      {
        title: "सरकारी एवं संस्थागत विस्तार",
        category: "संस्थागत बैंकिंग",
        institution: "इंडसइंड बैंक - गुजरात",
        achievement: "मैंने वडोदरा, राजकोट, सूरत, वापी और वलसाड सहित 5 प्रमुख जिलों में जीबीजी व्यवसाय वृद्धि का नेतृत्व किया।",
        impact: "प्रमुख सार्वजनिक क्षेत्र के खातों के लिए प्राथमिक बैंकिंग स्थिति हासिल की।"
      },
      {
        title: "कॉर्पोरेट ऋण एवं तनावग्रस्त परिसंपत्ति समाधान",
        category: "सलाहकार एवं पुनर्गठन",
        institution: "सलाहकार जनादेश",
        achievement: "मैंने प्रमोटर ऋण पुनर्गठन, ओटीएस निपटान और बैंक योग्य टीईवी रिपोर्ट प्रस्तुत करने के लिए शुरू से अंत तक परामर्श प्रदान किया।",
        impact: "ऋणदाता अनुपालन हासिल करते हुए ग्राहक के मताधिकार मूल्य की रक्षा की।"
      }
    ]
  }
};
