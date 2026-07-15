export type Player = {
  id: string;
  handle: string;
  name: string;
  role: string;
  flag: string;
  joined: string;
  stats: {
    matches: number;
    wins: number;
    mvps: number;
  };
};

export type Match = {
  id: string;
  date: string;
  time: string;
  opponent: string;
  tournament: string;
  status: "upcoming" | "won" | "lost" | "draw";
  score?: string;
};

export type Partner = {
  id: string;
  name: string;
  tier: "platinum" | "gold" | "silver";
  description: string;
};

export const teamStats = {
  founded: "2023",
  region: "Europe",
  matchesPlayed: 142,
  winRate: 68,
  tournamentWins: 7,
  currentRank: "#3",
};

export const roster: Player[] = [
  {
    id: "p1",
    handle: "JSL2010",
    name: "JSL.the.orange.J20",
    role: "4th/3rd press",
    flag: "🇬🇧",
    joined: "Aug, 2025",
    stats: { matches: 0, wins: 0, mvps: 0 },
  },
  {
    id: "p2",
    handle: "Lewi",
    name: "Lewi1738",
    role: "1st/2nd press",
    flag: "🇬🇧",
    joined: "Sept, 2025",
    stats: { matches: 0, wins: 0, mvps: 0 },
  },
  {
    id: "p3",
    handle: "Toast",
    name: "BreadZzZ",
    role: "2nd press",
    flag: "🇩🇪",
    joined: "Jun, 2026",
    stats: { matches: 0, wins: 0, mvps: 0 },
  },
  {
    id: "p4",
    handle: "RD23",
    name: "riley2011.105631",
    role: "1st/2nd press",
    flag: "🇬🇧",
    joined: "Jul, 2026",
    stats: { matches: 0, wins: 0, mvps: 0 },
  },
  {
    id: "p5",
    handle: "PIBBLE.Z",
    name: "DICTATOR_PIBBLE.Z",
    role: "3rd/4th press",
    flag: "🇬🇧",
    joined: "Jul, 2026",
    stats: { matches: 0, wins: 0, mvps: 0 },
  },
  {
    id: "p6",
    handle: "Generous_VR",
    name: "Generous_chillin",
    role: "1st/2nd press",
    flag: "🇬🇧",
    joined: "Jul, 2026",
    stats: { matches: 0, wins: 0, mvps: 0 },
  },
];

export const matches: Match[] = [
  {
    id: "m1",
    date: "2026-07-22",
    time: "20:00 CEST",
    opponent: "Nebula Syndicate",
    tournament: "Orion Drift Pro League S4",
    status: "upcoming",
  },
  {
    id: "m2",
    date: "2026-07-29",
    time: "19:30 CEST",
    opponent: "Starforge Vanguard",
    tournament: "Orion Drift Pro League S4",
    status: "upcoming",
  },
  {
    id: "m3",
    date: "2026-08-05",
    time: "21:00 CEST",
    opponent: "Void Walkers",
    tournament: "Celestial Cup Qualifier",
    status: "upcoming",
  },
  {
    id: "m4",
    date: "2026-07-10",
    time: "18:45 CEST",
    opponent: "Aurora Gaming",
    tournament: "Orion Drift Pro League S4",
    status: "won",
    score: "3-1",
  },
  {
    id: "m5",
    date: "2026-07-03",
    time: "20:15 CEST",
    opponent: "Lunar eSports",
    tournament: "Orion Drift Pro League S4",
    status: "lost",
    score: "2-3",
  },
  {
    id: "m6",
    date: "2026-06-28",
    time: "19:00 CEST",
    opponent: "Cosmic Rift",
    tournament: "Celestial Cup Qualifier",
    status: "won",
    score: "3-0",
  },
];

export const partners: Partner[] = [
  {
    id: "s1",
    name: "NovaVR",
    tier: "platinum",
    description: "Official VR hardware partner powering our training rigs.",
  },
  {
    id: "s2",
    name: "Stellar Energy",
    tier: "gold",
    description: "Keeping the squad charged through every late-night scrim.",
  },
  {
    id: "s3",
    name: "Orion Gear",
    tier: "gold",
    description: "Premium peripherals designed for zero-gravity precision.",
  },
  {
    id: "s4",
    name: "HyperStream",
    tier: "silver",
    description: "Low-latency streaming for every match and watch party.",
  },
];

export const recruitment = {
  title: "Join the Constellation",
  body: "We are looking for dedicated VR pilots and support staff who want to compete at the highest level of Orion Drift. If you have the reflexes, the discipline, and the team-first mindset, we want to hear from you.",
  roles: [
    {
      title: "Competitive Pilot",
      requirements: [
        "Ranked top 500 in Orion Drift ranked ladder",
        "Available for evening scrims (CEST)",
        "Willing to review VODs and accept coaching",
      ],
    },
    {
      title: "Analyst / Coach",
      requirements: [
        "Strong understanding of Orion Drift meta and maps",
        "Experience breaking down match VODs",
        "Comfortable working remotely with the roster",
      ],
    },
  ],
  contact: "recruit@rpzcelestial.gg",
};

export const socials = [
  { name: "X / Twitter", url: "https://x.com/rpzcelestial", handle: "@rpzcelestial" },
  { name: "Twitch", url: "https://twitch.tv/rpzcelestial", handle: "twitch.tv/rpzcelestial" },
  { name: "YouTube", url: "https://youtube.com/@rpzcelestial", handle: "@rpzcelestial" },
  { name: "Discord", url: "https://discord.gg/rpzcelestial", handle: "discord.gg/rpzcelestial" },
];
