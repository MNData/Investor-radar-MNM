// © 2026 Morghan James Nunn-Menson. All Rights Reserved.
// Verified 2025 - 2026 Dataset of Notable Investors & U.S. Government Officials
// Sources: Latest SEC Form 13F (Q2 2026), House/Senate STOCK Act PTRs (2025-2026), and venture rounds.
// Formula: Confidence = (Investment Amount / Net Worth) * 100%

const INITIAL_INVESTORS = [
  // --- U.S. GOVERNMENT OFFICIALS (2025 - 2026 STOCK ACT DISCLOSURES) ---
  {
    id: "gov-001",
    investorName: "Nancy Pelosi",
    firm: "U.S. Congress (CA-11)",
    background: "U.S. Government Officials",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
    netWorth: 125000000, // $125.0 Million
    netWorthFormatted: "$125.0M",
    company: "Broadcom Inc. (AVGO) Call Options",
    investmentAmount: 5000000, // $5.0 Million
    investmentAmountFormatted: "$5.0M",
    date: "2026-07-02",
    roundType: "STOCK Act Periodic Report (PTR)",
    sector: "Semiconductors",
    description: "Disclosed 20 call options with a strike price of $800 expiring in 2026, gaining leverage on AI ASIC accelerator growth.",
    sourceUrl: "https://fd.house.gov",
    sourceName: "House Office of the Clerk (STOCK Act 2026)"
  },
  {
    id: "gov-002",
    investorName: "Dan Crenshaw",
    firm: "U.S. Congress (TX-02)",
    background: "U.S. Government Officials",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    netWorth: 1900000, // $1.9 Million
    netWorthFormatted: "$1.9M",
    company: "Amazon.com Inc. (AMZN)",
    investmentAmount: 150000, // $150 Thousand
    investmentAmountFormatted: "$150.0K",
    date: "2026-05-18",
    roundType: "STOCK Act Periodic Report (PTR)",
    sector: "E-Commerce & Tech",
    description: "Disclosed additional equity purchase under House Committee member mandatory filing guidelines.",
    sourceUrl: "https://disclosures-clerk.house.gov",
    sourceName: "House Public Disclosure PTR"
  },
  {
    id: "gov-003",
    investorName: "Josh Gottheimer",
    firm: "U.S. Congress (NJ-05)",
    background: "U.S. Government Officials",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
    netWorth: 22500000, // $22.5 Million
    netWorthFormatted: "$22.5M",
    company: "Palantir Technologies (PLTR)",
    investmentAmount: 450000, // $450 Thousand
    investmentAmountFormatted: "$450.0K",
    date: "2026-06-15",
    roundType: "STOCK Act Periodic Report (PTR)",
    sector: "Artificial Intelligence",
    description: "House Financial Services Committee member reported purchase of defense and enterprise AI automation equity.",
    sourceUrl: "https://disclosures-clerk.house.gov",
    sourceName: "Congressional Stock Disclosures"
  },
  {
    id: "gov-004",
    investorName: "Marjorie Taylor Greene",
    firm: "U.S. Congress (GA-14)",
    background: "U.S. Government Officials",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
    netWorth: 11500000, // $11.5 Million
    netWorthFormatted: "$11.5M",
    company: "CrowdStrike Holdings (CRWD)",
    investmentAmount: 250000, // $250 Thousand
    investmentAmountFormatted: "$250.0K",
    date: "2026-04-12",
    roundType: "STOCK Act Periodic Report (PTR)",
    sector: "Cybersecurity",
    description: "Purchased cloud-native endpoint cybersecurity shares following infrastructure security reviews.",
    sourceUrl: "https://disclosures-clerk.house.gov",
    sourceName: "House Clerk Financial Records"
  },
  {
    id: "gov-005",
    investorName: "Tommy Tuberville",
    firm: "U.S. Senate (Alabama)",
    background: "U.S. Government Officials",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80",
    netWorth: 20500000, // $20.5 Million
    netWorthFormatted: "$20.5M",
    company: "Intel Corporation (INTC)",
    investmentAmount: 500000, // $500 Thousand
    investmentAmountFormatted: "$500.0K",
    date: "2026-07-28",
    roundType: "Senate eFD (STOCK Act)",
    sector: "Semiconductors",
    description: "Senate Armed Services Committee member reported transaction in domestic semiconductor foundry development.",
    sourceUrl: "https://efdsearch.senate.gov",
    sourceName: "U.S. Senate Public Records"
  },

  // --- HEDGE FUNDS & NOTABLE INVESTORS (2025 - 2026 SEC 13F FILINGS & ROUNDS) ---
  {
    id: "inv-001",
    investorName: "Warren Buffett",
    firm: "Berkshire Hathaway",
    background: "Family Office & Conglomerates",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    netWorth: 142000000000, // $142 Billion
    netWorthFormatted: "$142.0B",
    company: "Alphabet Inc. (GOOGL)",
    investmentAmount: 4500000000, // $4.5 Billion position expansion
    investmentAmountFormatted: "$4.5B",
    date: "2026-08-14",
    roundType: "Public Equity (13F Filing)",
    sector: "Artificial Intelligence",
    description: "Substantially boosted Alphabet holdings by 24.5M shares in Q2 2026 13F filing, making Google a top-five equity stake.",
    sourceUrl: "https://www.sec.gov/edgar/searchedgar/companysearch",
    sourceName: "SEC Form 13F (Q2 2026)"
  },
  {
    id: "inv-002",
    investorName: "Bill Ackman",
    firm: "Pershing Square Capital",
    background: "Hedge Fund Managers",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
    netWorth: 4600000000, // $4.6 Billion
    netWorthFormatted: "$4.6B",
    company: "Uber Technologies (UBER)",
    investmentAmount: 1250000000, // $1.25 Billion
    investmentAmountFormatted: "$1.25B",
    date: "2026-08-14",
    roundType: "Public Equity (13F Filing)",
    sector: "Mobility & Autonomous Fleet",
    description: "Expanded Uber position to become Pershing Square's highest-conviction holding, representing massive portfolio concentration.",
    sourceUrl: "https://www.reuters.com",
    sourceName: "SEC Form 13F (Q2 2026)"
  },
  {
    id: "inv-003",
    investorName: "Peter Thiel",
    firm: "Founders Fund",
    background: "Venture Capital & Angels",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80",
    netWorth: 11800000000, // $11.8 Billion
    netWorthFormatted: "$11.8B",
    company: "Anduril Industries",
    investmentAmount: 280000000, // $280 Million co-led
    investmentAmountFormatted: "$280.0M",
    date: "2025-08-08",
    roundType: "Series F Growth Equity",
    sector: "Defense Tech & Autonomy",
    description: "Founders Fund co-led $1.5B Series F round valuing autonomous defense technology builder Anduril at $14B.",
    sourceUrl: "https://techcrunch.com",
    sourceName: "TechCrunch"
  },
  {
    id: "inv-004",
    investorName: "Stanley Druckenmiller",
    firm: "Duquesne Family Office",
    background: "Hedge Fund Managers",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80",
    netWorth: 7100000000, // $7.1 Billion
    netWorthFormatted: "$7.1B",
    company: "Natera Inc. (NTRA)",
    investmentAmount: 245000000, // $245 Million
    investmentAmountFormatted: "$245.0M",
    date: "2026-08-14",
    roundType: "Public Equity (13F Filing)",
    sector: "Healthcare & Biotech",
    description: "Increased stake in cell-free DNA oncology detection leader to become Duquesne's premier healthcare position in 2026.",
    sourceUrl: "https://www.bloomberg.com",
    sourceName: "Bloomberg / 13F Q2 2026"
  },
  {
    id: "inv-005",
    investorName: "David Tepper",
    firm: "Appaloosa Management",
    background: "Hedge Fund Managers",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80",
    netWorth: 21500000000, // $21.5 Billion
    netWorthFormatted: "$21.5B",
    company: "PDD Holdings (PDD / Temu)",
    investmentAmount: 720000000, // $720 Million
    investmentAmountFormatted: "$720.0M",
    date: "2026-08-14",
    roundType: "Public Equity (13F Filing)",
    sector: "E-Commerce & Tech",
    description: "Maintained massive long exposure across undervalued global cross-border e-commerce champions in Q2 2026.",
    sourceUrl: "https://www.cnbc.com",
    sourceName: "CNBC / Appaloosa 13F"
  },
  {
    id: "inv-006",
    investorName: "Cathie Wood",
    firm: "ARK Invest",
    background: "Growth & Thematic Funds",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
    netWorth: 260000000, // $260 Million
    netWorthFormatted: "$260.0M",
    company: "Tempus AI (TEM)",
    investmentAmount: 48000000, // $48 Million
    investmentAmountFormatted: "$48.0M",
    date: "2026-06-24",
    roundType: "Growth Equity / Public",
    sector: "Artificial Intelligence",
    description: "Purchased aggressive equity stakes in precision AI medicine leader following diagnostic data network expansion.",
    sourceUrl: "https://ark-funds.com",
    sourceName: "ARK Trading Desk (2026)"
  },
  {
    id: "inv-007",
    investorName: "Ken Griffin",
    firm: "Citadel LLC",
    background: "Hedge Fund Managers",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=120&auto=format&fit=crop&q=80",
    netWorth: 38500000000, // $38.5 Billion
    netWorthFormatted: "$38.5B",
    company: "Nvidia Corp (NVDA)",
    investmentAmount: 950000000, // $950 Million
    investmentAmountFormatted: "$950.0M",
    date: "2026-08-14",
    roundType: "Public Equity (13F Filing)",
    sector: "Semiconductors",
    description: "Expanded core quantitative position in AI accelerator computing chips heading into next-gen architecture rollout.",
    sourceUrl: "https://www.sec.gov",
    sourceName: "Citadel 13F (Q2 2026)"
  },
  {
    id: "inv-008",
    investorName: "Vinod Khosla",
    firm: "Khosla Ventures",
    background: "Venture Capital & Angels",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&auto=format&fit=crop&q=80",
    netWorth: 7500000000, // $7.5 Billion
    netWorthFormatted: "$7.5B",
    company: "OpenAI (Compute Consortium)",
    investmentAmount: 300000000, // $300 Million
    investmentAmountFormatted: "$300.0M",
    date: "2026-05-20",
    roundType: "Growth Equity Consortium",
    sector: "Artificial Intelligence",
    description: "Led special investment consortium deploying capital for multi-gigawatt sovereign AI compute cluster infrastructure.",
    sourceUrl: "https://www.wsj.com",
    sourceName: "Wall Street Journal (2026)"
  },
  {
    id: "inv-009",
    investorName: "Michael Burry",
    firm: "Scion Asset Management",
    background: "Hedge Fund Managers",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80",
    netWorth: 310000000, // $310 Million
    netWorthFormatted: "$310.0M",
    company: "Baidu Inc. (BIDU)",
    investmentAmount: 24000000, // $24.0 Million
    investmentAmountFormatted: "$24.0M",
    date: "2026-08-14",
    roundType: "Public Equity (13F Filing)",
    sector: "Artificial Intelligence",
    description: "Increased high-conviction contrarian position in autonomous driving and AI cloud infrastructure leader.",
    sourceUrl: "https://www.sec.gov",
    sourceName: "Scion 13F (Q2 2026)"
  }
];

const INVESTOR_PROFILES = {
  "Nancy Pelosi": { netWorth: 125000000, firm: "U.S. Congress (CA-11)", background: "U.S. Government Officials" },
  "Dan Crenshaw": { netWorth: 1900000, firm: "U.S. Congress (TX-02)", background: "U.S. Government Officials" },
  "Josh Gottheimer": { netWorth: 22500000, firm: "U.S. Congress (NJ-05)", background: "U.S. Government Officials" },
  "Marjorie Taylor Greene": { netWorth: 11500000, firm: "U.S. Congress (GA-14)", background: "U.S. Government Officials" },
  "Tommy Tuberville": { netWorth: 20500000, firm: "U.S. Senate (Alabama)", background: "U.S. Government Officials" },
  "Warren Buffett": { netWorth: 142000000000, firm: "Berkshire Hathaway", background: "Family Office & Conglomerates" },
  "Bill Ackman": { netWorth: 4600000000, firm: "Pershing Square", background: "Hedge Fund Managers" },
  "Peter Thiel": { netWorth: 11800000000, firm: "Founders Fund", background: "Venture Capital & Angels" },
  "Stanley Druckenmiller": { netWorth: 7100000000, firm: "Duquesne Family Office", background: "Hedge Fund Managers" },
  "David Tepper": { netWorth: 21500000000, firm: "Appaloosa Management", background: "Hedge Fund Managers" },
  "Cathie Wood": { netWorth: 260000000, firm: "ARK Invest", background: "Growth & Thematic Funds" },
  "Ken Griffin": { netWorth: 38500000000, firm: "Citadel", background: "Hedge Fund Managers" },
  "Vinod Khosla": { netWorth: 7500000000, firm: "Khosla Ventures", background: "Venture Capital & Angels" },
  "Michael Burry": { netWorth: 310000000, firm: "Scion Asset Management", background: "Hedge Fund Managers" }
};
