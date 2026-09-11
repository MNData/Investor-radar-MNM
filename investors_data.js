// Initial Dataset of Notable Investors, Their Recent Investments, and Net Worths
// Formula for Confidence/Conviction Ratio: (Investment Amount / Net Worth) * 100%

const INITIAL_INVESTORS = [
  {
    id: "inv-001",
    investorName: "Warren Buffett",
    firm: "Berkshire Hathaway",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    netWorth: 138000000000, // $138 Billion
    netWorthFormatted: "$138.0B",
    company: "Occidental Petroleum (OXY)",
    investmentAmount: 584000000, // $584 Million additional purchase
    investmentAmountFormatted: "$584.0M",
    date: "2024-06-17",
    roundType: "Public Equity (Form 4)",
    sector: "Energy",
    description: "Acquired additional 2.95 million shares, increasing Berkshire's holding to nearly 29% of the oil producer.",
    sourceUrl: "https://www.sec.gov/edgar/searchedgar/companysearch",
    sourceName: "SEC Form 4 Filing"
  },
  {
    id: "inv-002",
    investorName: "Bill Ackman",
    firm: "Pershing Square Capital",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80",
    netWorth: 4300000000, // $4.3 Billion
    netWorthFormatted: "$4.3B",
    company: "Nike Inc. (NKE)",
    investmentAmount: 229000000, // $229 Million
    investmentAmountFormatted: "$229.0M",
    date: "2024-08-14",
    roundType: "Public Equity (13F)",
    sector: "Consumer Goods",
    description: "Disclosed a new position of roughly 3.04 million shares in Nike as turnaround thesis plays out.",
    sourceUrl: "https://www.reuters.com",
    sourceName: "Reuters / SEC 13F"
  },
  {
    id: "inv-003",
    investorName: "Peter Thiel",
    firm: "Founders Fund",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&auto=format&fit=crop&q=80",
    netWorth: 11200000000, // $11.2 Billion
    netWorthFormatted: "$11.2B",
    company: "Cognition AI (Devin)",
    investmentAmount: 175000000, // $175 Million round led
    investmentAmountFormatted: "$175.0M",
    date: "2024-04-24",
    roundType: "Series A Extension",
    sector: "Artificial Intelligence",
    description: "Founders Fund led the $175M financing round valuing autonomous software engineer creator Cognition at $2B.",
    sourceUrl: "https://techcrunch.com",
    sourceName: "TechCrunch"
  },
  {
    id: "inv-004",
    investorName: "Stanley Druckenmiller",
    firm: "Duquesne Family Office",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=120&auto=format&fit=crop&q=80",
    netWorth: 6900000000, // $6.9 Billion
    netWorthFormatted: "$6.9B",
    company: "Coherent Corp (COHR)",
    investmentAmount: 185000000, // $185 Million
    investmentAmountFormatted: "$185.0M",
    date: "2024-05-15",
    roundType: "Public Equity (13F)",
    sector: "Semiconductors & Optical",
    description: "Significantly boosted stake in optical materials and laser provider critical to AI data center infrastructure.",
    sourceUrl: "https://www.bloomberg.com",
    sourceName: "Bloomberg / 13F"
  },
  {
    id: "inv-005",
    investorName: "Marc Andreessen",
    firm: "Andreessen Horowitz (a16z)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    netWorth: 1900000000, // $1.9 Billion
    netWorthFormatted: "$1.9B",
    company: "Mistral AI",
    investmentAmount: 120000000, // $120 Million led/co-led
    investmentAmountFormatted: "$120.0M",
    date: "2024-06-11",
    roundType: "Series B",
    sector: "Artificial Intelligence",
    description: "Participated heavily in Mistral AI's €600M Series B round, valuing the European open-weights model pioneer at $6B.",
    sourceUrl: "https://www.ft.com",
    sourceName: "Financial Times"
  },
  {
    id: "inv-006",
    investorName: "David Tepper",
    firm: "Appaloosa Management",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&auto=format&fit=crop&q=80",
    netWorth: 21000000000, // $21.0 Billion
    netWorthFormatted: "$21.0B",
    company: "Alibaba Group (BABA)",
    investmentAmount: 650000000, // $650 Million position
    investmentAmountFormatted: "$650.0M",
    date: "2024-05-16",
    roundType: "Public Equity (13F)",
    sector: "E-Commerce & Tech",
    description: "Aggressively increased Alibaba position to become Appaloosa's single largest holding, representing high conviction in China tech undervaluation.",
    sourceUrl: "https://www.cnbc.com",
    sourceName: "CNBC"
  },
  {
    id: "inv-007",
    investorName: "Cathie Wood",
    firm: "ARK Invest",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
    netWorth: 250000000, // $250 Million
    netWorthFormatted: "$250.0M",
    company: "Tesla Inc. (TSLA)",
    investmentAmount: 32000000, // $32 Million buy on dip
    investmentAmountFormatted: "$32.0M",
    date: "2024-07-25",
    roundType: "Public Equity (ARK Daily)",
    sector: "Automotive & Robotics",
    description: "Purchased over 150,000 shares across ARKK and ARKQ following post-earnings pullback.",
    sourceUrl: "https://ark-funds.com",
    sourceName: "ARK Trading Desk"
  },
  {
    id: "inv-008",
    investorName: "Ken Griffin",
    firm: "Citadel LLC",
    avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=120&auto=format&fit=crop&q=80",
    netWorth: 37500000000, // $37.5 Billion
    netWorthFormatted: "$37.5B",
    company: "Broadcom Inc. (AVGO)",
    investmentAmount: 480000000, // $480 Million
    investmentAmountFormatted: "$480.0M",
    date: "2024-08-14",
    roundType: "Public Equity (13F)",
    sector: "Semiconductors",
    description: "Expanded stake significantly heading into custom AI accelerator ASIC design cycle.",
    sourceUrl: "https://www.sec.gov",
    sourceName: "Citadel 13F"
  },
  {
    id: "inv-009",
    investorName: "Vinod Khosla",
    firm: "Khosla Ventures",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=120&auto=format&fit=crop&q=80",
    netWorth: 7200000000, // $7.2 Billion
    netWorthFormatted: "$7.2B",
    company: "OpenAI",
    investmentAmount: 250000000, // $250 Million committed / special vehicle
    investmentAmountFormatted: "$250.0M",
    date: "2024-09-05",
    roundType: "Late Stage Private",
    sector: "Artificial Intelligence",
    description: "Continued commitment to OpenAI funding round valuing the research laboratory at $150B.",
    sourceUrl: "https://www.wsj.com",
    sourceName: "Wall Street Journal"
  },
  {
    id: "inv-010",
    investorName: "Michael Burry",
    firm: "Scion Asset Management",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=120&auto=format&fit=crop&q=80",
    netWorth: 300000000, // $300 Million
    netWorthFormatted: "$300.0M",
    company: "Baidu Inc. (BIDU)",
    investmentAmount: 18500000, // $18.5 Million
    investmentAmountFormatted: "$18.5M",
    date: "2024-08-14",
    roundType: "Public Equity (13F)",
    sector: "Chinese Tech & AI",
    description: "Added 75,000 shares to his concentrated contrarian position in Chinese technology champions.",
    sourceUrl: "https://www.sec.gov",
    sourceName: "Scion 13F Filing"
  },
  {
    id: "inv-011",
    investorName: "Masayoshi Son",
    firm: "SoftBank Vision Fund",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80",
    netWorth: 24500000000, // $24.5 Billion
    netWorthFormatted: "$24.5B",
    company: "Graphcore / SoftBank Robotics AI",
    investmentAmount: 600000000, // $600 Million
    investmentAmountFormatted: "$600.0M",
    date: "2024-07-12",
    roundType: "Strategic Acquisition",
    sector: "Semiconductors & Robotics",
    description: "Acquired UK chipmaker Graphcore to bolster SoftBank's comprehensive Next-Gen Artificial Superintelligence (ASI) initiative.",
    sourceUrl: "https://www.reuters.com",
    sourceName: "Reuters"
  },
  {
    id: "inv-012",
    investorName: "Chamath Palihapitiya",
    firm: "Social Capital",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=120&auto=format&fit=crop&q=80",
    netWorth: 1200000000, // $1.2 Billion
    netWorthFormatted: "$1.2B",
    company: "Groq (LPU AI Accelerators)",
    investmentAmount: 70000000, // $70 Million
    investmentAmountFormatted: "$70.0M",
    date: "2024-08-05",
    roundType: "Series D",
    sector: "AI Hardware",
    description: "Co-invested in Groq's $640M round led by BlackRock to scale ultrafast inference computing chips.",
    sourceUrl: "https://www.bloomberg.com",
    sourceName: "Bloomberg"
  }
];

// Reference directory of known notable investors and estimated net worths
const INVESTOR_PROFILES = {
  "Warren Buffett": { netWorth: 138000000000, firm: "Berkshire Hathaway", style: "Deep Value & Public Equity" },
  "Bill Ackman": { netWorth: 4300000000, firm: "Pershing Square", style: "Activist Public Equity" },
  "Peter Thiel": { netWorth: 11200000000, firm: "Founders Fund", style: "Venture Capital & Frontier Tech" },
  "Stanley Druckenmiller": { netWorth: 6900000000, firm: "Duquesne Family Office", style: "Macro & Public Equity" },
  "Marc Andreessen": { netWorth: 1900000000, firm: "a16z", style: "Venture Capital & Crypto" },
  "David Tepper": { netWorth: 21000000000, firm: "Appaloosa Management", style: "Distressed Debt & Macro" },
  "Cathie Wood": { netWorth: 250000000, firm: "ARK Invest", style: "Disruptive Innovation & Growth" },
  "Ken Griffin": { netWorth: 37500000000, firm: "Citadel", style: "Multi-Strategy Quant & Macro" },
  "Vinod Khosla": { netWorth: 7200000000, firm: "Khosla Ventures", style: "Deep Tech & Healthcare" },
  "Michael Burry": { netWorth: 300000000, firm: "Scion Asset Management", style: "Deep Value Contrarian" },
  "Masayoshi Son": { netWorth: 24500000000, firm: "SoftBank Group", style: "AI & Tech Mega-Rounds" },
  "Chamath Palihapitiya": { netWorth: 1200000000, firm: "Social Capital", style: "Frontier Tech & Climate" },
  "Ray Dalio": { netWorth: 15400000000, firm: "Bridgewater Associates", style: "Global Macro" },
  "Paul Graham": { netWorth: 600000000, firm: "Y Combinator", style: "Early Stage Seed" },
  "Howard Marks": { netWorth: 2200000000, firm: "Oaktree Capital", style: "Distressed Debt & Credit" },
  "Nelson Peltz": { netWorth: 1600000000, firm: "Trian Fund Management", style: "Activist Value" },
  "Carl Icahn": { netWorth: 5500000000, firm: "Icahn Enterprises", style: "Activist Equities" },
  "Garry Tan": { netWorth: 350000000, firm: "Y Combinator", style: "Early Stage Startups" },
  "Daniel Loeb": { netWorth: 3300000000, firm: "Third Point", style: "Event-Driven & Activist" },
  "Steve Cohen": { netWorth: 19800000000, firm: "Point72 Asset Management", style: "Long/Short Equity" }
};
