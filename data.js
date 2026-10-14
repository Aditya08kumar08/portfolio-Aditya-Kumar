/* ============================================================
   EDIT HERE: paste your Google Drive / GitHub links.
   Format:  project_id: [["Button text","https://link"], ...]
   Leave a project as [] and it shows a greyed "Link coming soon".
   ============================================================ */
const LINKS = {
  resume_pdf: "https://drive.google.com/file/d/1ZS9dqhl6RWel6JhCZdTmb-7lc-W-j0eM/view?usp=drive_link",            // your UPDATED resume: paste the Google Drive share link here
  email: "mailto:adityakumar0212@gmail.com",                 // e.g. "mailto:you@example.com"
  linkedin: "",              // your LinkedIn URL

  mis:[["Read the report (PDF)","https://drive.google.com/file/d/1me0GcyKYgjdpsqQahpHWo1XCEFEDb7j9/view?usp=drive_link"],["Open the workbook","https://docs.google.com/spreadsheets/d/1td_s4X60Q27o0OA3OV0NArnRFIeuTvBH/edit?usp=drive_link&ouid=109741840185861321303&rtpof=true&sd=true"]], cltv:[],
     freshcut:[["View one-pager only (1 page)","https://drive.google.com/file/d/1y3YDIHStji_QVdGOihegWs-Y799ys0B5/view?usp=drive_link"],["One-pager and process note (PDF)","https://drive.google.com/file/d/1uW9B0FQXm-ut9Sn6JgzYKPAoF06xC_sA/view?usp=drive_link"]],
  nile:[["View campaign (PDF)","https://drive.google.com/file/d/1KAgmqbJ7TuL3tO0DxGuNNGal2A3PlUSC/view?usp=drive_link"]],
  resume_site:[["Live site","https://aditya08kumar08.github.io/resume-website-mid-term-project/"]], cafe_site:[["Live site","https://aditya08kumar08.github.io/cafe-website/"]],
  printing:[], lemon:[],
  well:[], osm:[], climate:[], biogas:[], compost:[], sme:[],
  rs50:[],
  humanize:[],
  pharmeasy:[], bhoomi:[],
  groundwater:[], bacteria:[]
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
 {id:"cltv",t:"Data and Analytics",n:"Customer Lifetime Value (CLTV) Workbook",
  p:"How much is a customer worth over their lifetime?",
  d:"Built a CLTV model in Excel with formulas.",
  r:"TODO: add one headline number from the workbook."},
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
  r:"A live site anyone can open with a link."},,
 {id:"sme",t:["Sustainability","Business Strategy"],n:"Sustainability Measures for SMEs: Reflection Note",
  p:"What sustainability means for a small puffed rice (murmura) manufacturer in Nagpur, beyond environmental issues.",
  d:"Studied the unit through an owner interaction and observation of sourcing, transport, workforce and storage. Picked inventory planning as the most practical fix, using stock registers or spreadsheets.",
  r:"Reordering only at critically low stock drives rushed procurement and transport dependency. Women workers do most factory tasks, and labour stability improved after hiring more of them."},
 {id:"humanize",t:["Live Project and Analytics","Data and Analytics"],n:"Media Intelligence and PR Relevance Dashboard (Humanize Group Live Project, Term 6)",
  p:"The Humanize Group pitched journalists from static contact lists, with no view of narrative angle, recency or data quality.",
  d:"Built a 7-page Power BI dashboard over a journalist master sheet and an article sheet. Wrote the research methodology (6-month active-status rule), a user guide and a final analysis with recommendations.",
  r:"114 journalists and 125 articles profiled. 71.9% (82) were active in the last 180 days, 18 were Tier-1 outreach targets, and database completeness scored 84.2%."},
 {id:"pharmeasy",t:"Business Strategy",n:"PharmEasy Business Model Canvas",
  p:"How an online pharmacy creates and captures value.",
  d:"Mapped all nine canvas blocks, from partners (pharmacies, labs, logistics) to the app-first channel and value proposition (home delivery, discounts, home lab tests).",
  r:"A 3-page canvas covering the full model."},
 {id:"bhoomi",t:"Business Strategy",n:"SWOT Analysis: BHOOMI",
  p:"Assess an agri-advisory platform that combines sensor data with local crop and soil profiles.",
  d:"Structured strengths, weaknesses, opportunities and threats, such as sensor dependency, delayed farmer ROI, pay-per-use pricing and data ownership conflicts.",
  r:"A 2-page SWOT with specific, actionable points under each heading."},
 {id:"groundwater",t:["Research Writing","Sustainability"],n:"Groundwater Depletion and Sustainable Water Use",
  p:"Falling water tables from over-extraction, especially for irrigation in India.",
  d:"Wrote a 5-page report on causes, consequences and strategies, including an idea combining smart technology, rainwater harvesting and community participation.",
  r:"A structured report with abstract, introduction and sub-topic discussion."}
];
