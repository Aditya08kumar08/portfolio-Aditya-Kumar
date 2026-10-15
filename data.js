/* ============================================================
   EDIT HERE: paste your Google Drive / GitHub links.
   Format:  project_id: [["Button text","https://link"], ...]
   Leave a project as [] and it shows a greyed "Link coming soon".
   ============================================================ */
const LINKS = {
  resume_pdf: "https://drive.google.com/file/d/1ZS9dqhl6RWel6JhCZdTmb-7lc-W-j0eM/view?usp=drive_link",            // your UPDATED resume: paste the Google Drive share link here
  email: "mailto:adityakumar0212@gmail.com",                 // e.g. "mailto:you@example.com"
  linkedin: "https://www.linkedin.com/in/aditya-kumar-367688316",              // your LinkedIn URL

  mis:[["Read the report (PDF)","https://drive.google.com/file/d/1me0GcyKYgjdpsqQahpHWo1XCEFEDb7j9/view?usp=drive_link"],["Open the workbook","https://docs.google.com/spreadsheets/d/1td_s4X60Q27o0OA3OV0NArnRFIeuTvBH/edit?usp=drive_link&ouid=109741840185861321303&rtpof=true&sd=true"]], 
   cltv: [["Open the workbook", "https://docs.google.com/spreadsheets/d/1u4S26_BPHElUGdxvHgZunPyvostJmN6v/edit?usp=drive_link&ouid=109741840185861321303&rtpof=true&sd=true"]],
     freshcut:[["View one-pager only (1 page)","https://drive.google.com/file/d/1y3YDIHStji_QVdGOihegWs-Y799ys0B5/view?usp=drive_link"],["One-pager and process note (PDF)","https://drive.google.com/file/d/1uW9B0FQXm-ut9Sn6JgzYKPAoF06xC_sA/view?usp=drive_link"]],
  nile:[["View campaign (PDF)","https://drive.google.com/file/d/1KAgmqbJ7TuL3tO0DxGuNNGal2A3PlUSC/view?usp=drive_link"]],
  resume_site:[["Live site","https://aditya08kumar08.github.io/resume-website-mid-term-project/"]], 
   cafe_site:[["Live site","https://aditya08kumar08.github.io/cafe-website/"]],
  impulsive:[["Read the research deck (PDF)","https://drive.google.com/file/d/12XGaCkVWuuOnrITLev-9fHCquayJwiry/view?usp=drive_link"]],
  medireach:[["Read the project report (PDF)","https://drive.google.com/file/d/1GmNxdvuXc2ye7hKRsUP-U1UKLzoARTUz/view?usp=drive_link"],["Open the financial model (Excel)","https://docs.google.com/spreadsheets/d/1X-jZjiqsWn7L0S6wzU5--pM0IvJMX0hz/edit?usp=drive_link&ouid=109741840185861321303&rtpof=true&sd=true"]],
   greenrego:[["Read the full report (PDF)","https://drive.google.com/file/d/1FfS4ehK4vjcuIQ_Hm-fGc0ARt-IVRCF4/view?usp=drive_link"]],
   freshcut_npd:[["Read the NPD deck (PDF)","https://drive.google.com/file/d/11axb05yklWentjX5jgRN25m2kRa71UA6/view?usp=drive_link"],["Open the website","https://aditya08kumar08.github.io/fresh-cut/"]],
ibm: [["Read the report (PDF)","https://drive.google.com/file/d/1envVJGBtu8X0WdY4lUOgmsz5LwctNuIO/view?usp=drive_link"]],
  pharmeasy:[["View canvas (PDF)","https://drive.google.com/file/d/1kNNnFCPyM6CTCxWhZlJEFq7NuwzMGgm1/view?usp=drive_link"]],
   nagpur_sme: [["View presentation (PDF)", "https://drive.google.com/file/d/1T8JhOdn61h9U_MTX9xGV6rfRc4Mvjq7I/view?usp=drive_link"]],
bhoomi:[["View SWOT (PDF)","https://drive.google.com/file/d/1fj2hYDg7xHdGEFp-9rsnGNl_U2TG1VTy/view?usp=drive_link"]],
   freshcut_site: [["Live site", "https://aditya08kumar08.github.io/fresh-cut/"], ["Repository", "https://github.com/Aditya08kumar08/fresh-cut"], ["Read process note (PDF)", "https://drive.google.com/file/d/1P7UwsfCWPIXC_JvxlTRP631xdwVXjmD1/view?usp=drive_link"]],
  groundwater:[["Read the report (PDF)","https://drive.google.com/file/d/1tX_GcCPaKWjZnS_mr2oT1yq3sf4YJ3bj/view?usp=drive_link"]],
humanize:[["Dashboard screenshots (PDF)","DRIVE_LINK"],["Final report","DRIVE_LINK"],["Analysis & recommendations","DRIVE_LINK"],["Methodology","DRIVE_LINK"]]
};

/* To mark a line as "still to fill", start it with "TODO:"
   THEMES: t:"One theme"  or  t:["Theme A","Theme B"]  (a project can sit in many themes,
   but it is still ONE project, so totals never double count).
   OPTIONAL per project: img:"assets/pic.jpg", alt:"description", tools:"Canva, Figma" */
const P = [
{id:"mis",t:"Data and Analytics",n:"MIS and Digital Marketing Analysis (FY 2018-19)",
 p:"A showroom-led business wanted to know where growth and profit were leaking: order execution, digital marketing or the sales funnel.",
 d:"Completed the missing formulas across order booking, funnel and MIS sheets in Excel, grouped months into quarters, and analysed order-to-revenue conversion, digital marketing efficiency and order value. Wrote a report with recommendations.",
 r:"Order-to-revenue conversion rose from 64% in Q2 to 91% in Q4. Only 19.3% of showroom meetings became orders. Cost per lead climbed from about Rs 555 to Rs 810, and the year ended with a net contribution loss of about Rs 151 lakh."},
 
   {
    id: "cltv",
    t: ["Data and Analytics", "Business Strategy"],
    n: "Customer Lifetime Value (CLTV) Analysis & Modeling",
    p: "How can businesses accurately measure long-term customer value, retention rates, and acquisition efficiency to optimize marketing spend?",
    d: "Built an advanced Customer Lifetime Value (CLTV) model and financial workbook in Excel. Implemented formulas for churn rate, retention rate, average order value, purchase frequency, and discount rates to project customer profitability over multi-year lifecycles.",
    r: "Modelled customer value segmentation, enabling data-driven decisions on maximum allowable customer acquisition costs (CAC) and retention strategies."
  },
   {
    id:"ibm",
    t:["Business Strategy","Research Writing","Sustainability"],
    n:"Inclusive Business Model: Livelihood & Financial Support Study",
    p:"How can inclusive business models address the deep-rooted financial insecurity and livelihood challenges faced by low-income informal sector workers in India?",
    d:"Conducted primary research and detailed interviews across Bihar, Jharkhand, and West Bengal, examining informal workers' income streams, financial habits, and vulnerabilities. Designed a proposal for a Community Livelihood & Financial Support Centre offering vocational training, digital banking literacy, microfinance, and welfare scheme access.",
    r:"Mapped critical household patterns (average monthly incomes of ₹7,000–₹9,800, heavy reliance on informal credit)[cite: 10, 12] and structured an actionable inclusive business framework to enhance economic resilience and financial independence."
  },
   {
    id: "freshcut_site",
    t: ["Web Development", "Design and Documentation"],
    n: "Fresh Cut: Sustainable Ayurvedic Skincare Brand Website",
    p: "How can a sustainable Ayurvedic skincare brand translate its business concept, market research, and visual identity into an immersive, desktop-first digital brand experience?",
    d: "Developed a storytelling-driven website ('Sanskriti Se Sundarta Tak') for an eco-friendly Ayurvedic skincare brand[cite: 34]. Designed an information architecture and user journey spanning problem identification, market opportunity, brand solution, target audience, competitive advantage, and sustainability vision[cite: 34]. Implemented using modern web technologies with a nature-inspired color palette (deep green, beige, cream, and soft brown) and custom data visualization elements[cite: 35, 36].",
    r: "Delivered a fully responsive, live website hosted on GitHub Pages that bridges cultural heritage with modern sustainable commerce[cite: 34, 36]."
  },
   {
    id: "nagpur_sme",
    t: ["Sustainability", "Business Strategy"],
    n: "Sustainability Measures and ESG Strategy for a Puffed Rice Manufacturing SME",
    p: "How can a resource-constrained puffed rice manufacturing micro-enterprise in Nagpur address supply chain inefficiencies, pest risks, worker heat stress, and plastic waste?",
    d: "Conducted an ESG audit of a puffed rice manufacturing SME sourcing grain from West Bengal[cite: 14, 15, 16]. Analyzed five core operational challenges—poor inventory tracking, pest infestations, long-distance diesel transport, extreme worker heat stress, and excessive plastic packaging[cite: 20, 22, 24, 26, 28]—and designed practical, low-cost interventions including stock registers, airtight containers, expanded electric loaders, shop-floor ventilation upgrades, and biodegradable packaging alternatives[cite: 21, 23, 25, 27, 29, 30].",
    r: "Demonstrated that small, practical operational changes can significantly reduce waste, lower carbon footprints, improve worker safety and morale, and build long-term economic resilience for small enterprises[cite: 31, 32]."
  },
 {id:"nile",t:"Digital Marketing",n:"Nile Apparels Social Media Campaign (Phobics launch)",
  p:"Plan a social media launch for a clothing brand. Note: Nile Apparels is a fictional brand used for this class project.",
  d:"Designed the campaign and created Instagram creatives.",
  r:"Set a goal of at least 10% sales growth in the month after launch. Planned a three-phase rollout (2-week pre-launch, launch week with a YouTube premiere, post-launch retargeting) and tracked it with reach, engagement, conversion and retention KPIs."},
 {id:"freshcut",t:["Design and Documentation","Entrepreneurship"],n:"Fresh Cut: One-Page Brand Pitch and Process Note (Term 5)",
  img:"fresh-cut-onepager.jpg",alt:"Fresh Cut one-page pitch for a sustainable Ayurvedic skincare brand",
  tools:"Canva, Figma",
  p:"Turn a startup idea, a sustainable Ayurvedic skincare brand, into a one-page pitch that works in a 2-second glance.",
  d:"Defined the brief and audience, built an olive, beige, brown and gold identity, and laid the page out top to bottom: problem, solution, audience, revenue streams, growth plan. Cut a dense first draft down with more whitespace and icons, then wrote a process note covering each step.",
  r:"A finished one-page pitch plus a 4-page process note. The pitch splits the audience 55% young adults, 30% teenagers and 15% adults 40+, and links the brand to UN SDGs 3 and 13."},
 {id:"resume_site",t:"Web Development",n:"Resume Website",
  p:"Present my resume as a live, mobile-friendly website.",
  d:"Built with HTML, CSS and JavaScript and hosted on GitHub Pages.",
  r:"A live site anyone can open with a link."},
    
 {id:"cafe_site",t:"Web Development",n:"FUKUSU Cafe Website",
  p:"Give a café a simple online presence.",
  d:"Built with HTML, CSS and JavaScript and hosted on GitHub Pages.",
  r:"A live site anyone can open with a link."},
{id:"medireach",t:["Entrepreneurship","Business Strategy"],n:"MediReach AI: Startup Pitch and Financial Model (Term 5, Group Project)",
     img:"medireach-preview.jpg",alt:"Title slide of the MediReach AI startup pitch",
     tools:"Excel financial model (revenue, expenses, statements, investment analysis)",
     p:"Over 600 million Indians in rural and semi-urban areas have little access to doctors, medicines or explained lab reports. How can an AI-powered healthcare platform serve them?",
     d:"Worked in to build MediReach AI, a multilingual platform combining an AI symptom checker, teleconsultation, medicine delivery, lab report explanation and an offline mode. Contributed to the pitch deck and a five-sheet Excel model covering revenue projections, operating expenses, financial statements and investment analysis.",
     r:"Seed ask of Rs 50 lakhs. The projected revenue mix at Year 3 is 35% subscriptions, 25% pharmacy commission, 20% teleconsultation, 10% lab commission and 10% B2B partnerships. The model projects break-even in Year 2 and about Rs 2 Cr revenue in Year 3."},

  {id:"humanize",t:"Live Project and Analytics",n:"Media Intelligence and PR Relevance Dashboard (The Humanize Group)",
  p:"The Humanize Group pitched journalists from static contact lists. It could not see what each journalist writes about, how recently they published, or whether the record was reliable.",
  d:"Built a 7-page Power BI dashboard on a journalist sheet and an article sheet. It covers beat and angle analysis, one-click journalist profiles, relevance tiers and a data quality audit. Also wrote the research methodology and a user guide.",
  r:"114 journalists profiled across 19 beats and sorted into High Priority, Manual Review and Relationship Building tiers, with 113 of 114 records verified."},
 
{id:"impulsive",t:["Research Writing","Data and Analytics"],n:"Impulsive Food Ordering: A Behavioural Economics Experiment",
  img:"impulsive-food-preview.jpg",alt:"Title slide of the Impulsive Food Ordering research deck",
  tools:"Randomized experiment, online survey, hypothesis testing",
  p:"Does impulsivity linked to attention-related behaviour, along with cues like limited-time discounts, make people order food online more often?",
  d:"Ran a randomized experiment with 60 respondents split into a control group (neutral situation) and a treatment group (distracted while studying and shown a flash discount on a food delivery app). Collected data through an online survey, demographic profiling, a scenario-based ordering task and an impulsivity assessment, then tested two hypotheses.",
  r:"Both hypotheses were supported (p < 0.05): the treatment group chose to order food at a significantly higher rate, and people under urgency were less likely to delay, a sign of present bias. A balance table (all p > 0.05) showed the groups were comparable. Recommendation: platforms should add spending reminders or delay options."},

{id:"greenrego",t:["Entrepreneurship","Sustainability"],n:"Green Rego: Doorstep E-Waste Recycling Startup (Term 4, Entrepreneurial Hypothesis Testing)",
  img:"green-rego-cover.jpg",alt:"Cover page of the Green Rego e-waste recycling startup report",
  tools:"Lean Canvas, customer interviews, hypothesis testing, pitch deck (Gamma)",
  p:"Most people store old phones and laptops at home or throw them out with regular garbage, because they do not know where to recycle, find it inconvenient and do not trust recyclers. Could a doorstep pickup service with instant rewards fix this?",
  d:"Built a Lean Canvas for a doorstep e-waste collection startup, ran two rounds of customer interviews, and revised the canvas twice. Tested seven starting hypotheses against what customers said, wrote the final analysis and a personal reflection, scripted a pitch video and built an investor deck.",
  r:"Of seven initial hypotheses, three were validated, three were refined and one was rejected: environmental concern was not the main reason people recycle. Interviews pushed the model toward WhatsApp booking instead of an app, instant cash or UPI rewards instead of coupons, 24 to 48 hour pickup, certified recyclers with data-destruction assurance, and small offices as a higher-value segment than students."},
 {id:"pharmeasy",t:"Business Strategy",n:"PharmEasy Business Model Canvas",
  alt:"PharmEasy Business Model Canvas slide",
  tools:"Business Model Canvas (nine blocks)",
  p:"How an online pharmacy creates and captures value.",
  d:"Mapped all nine canvas blocks, from partners (pharmacies, labs, logistics) to the app-first channel and value proposition (home delivery, discounts, home lab tests).",
  r:"A one-slide canvas covering the full model. Revenue comes from commissions on medicine sales, retail margins on OTC and wellness products, diagnostic booking fees, premium memberships, and delivery charges and ads."},
{id:"groundwater",t:["Research Writing","Sustainability"],n:"Groundwater Depletion and Strategies for Sustainable Water Use",
  alt:"First page of the groundwater depletion research report",
  tools:"Secondary research, 3 peer-reviewed references",
  p:"Falling water tables from over-extraction, especially for irrigation in India, and what can be done about it.",
  d:"Wrote a 5-page research report with an abstract, introduction, causes, effects, strategies and a conclusion with future scope. Proposed the Smart Community Groundwater Recharge System (SCGRS), which combines rainwater-harvesting recharge pits, water-level sensors and a mobile app so communities can monitor groundwater.",
  r:"A structured research report citing three peer-reviewed sources. The SCGRS idea is aimed at schools, housing societies, government buildings and rural communities."},
{id:"bhoomi",t:["Business Strategy","Sustainability"],n:"SWOT Analysis: BHOOMI (AgriTech Platform)",
 alt:"SWOT infographic for an AgriTech sensor platform",
  tools:"SWOT framework, infographic design",
  p:"Assess an agri-advisory platform that combines sensor data with local crop calendars and soil profiles.",
  d:"Structured strengths (localised advice, resource savings, farmer confidence), weaknesses (sensor dependency, calibration, delayed ROI), opportunities (pay-per-use sensors, PMFBY and Soil Health Card alignment, advisory marketplace, white-labelling) and threats (data ownership conflicts, extreme weather, technology fatigue).",
  r:"A one-page SWOT infographic with four points each under Strengths and Opportunities and three each under Weaknesses and Threats."},
{id:"freshcut_npd",t:["Entrepreneurship","Sustainability"],n:"Fresh Cut: Upcycled Ayurvedic Skincare Launch Plan (New Product Development)",
  alt:"Cover of the Fresh Cut new product development deck",
  tools:"Gamma, market sizing, survey and focus-group feedback",
  p:"Natural skincare is often costly, and sustainable brands often compromise on results. Can food waste become affordable Ayurvedic skincare?",
  d:"Built a launch plan for Fresh Cut: market gap, four starter products, marketing mix, a four-stage testing plan and an 8-month roadmap.",
  r:"A Rs 1 Cr first-year target (20,000 units at Rs 500), priced from Rs 249 to Rs 699."}
];
