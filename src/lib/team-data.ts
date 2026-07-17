import jslImg from "@/assets/jsl.png.asset.json";
import lewiImg from "@/assets/lewi.jpg.asset.json";
import toastImg from "@/assets/toast.jpg.asset.json";
import rd23Img from "@/assets/rd23.png.asset.json";
import pibbleImg from "@/assets/pibble.jpg.asset.json";
import generousImg from "@/assets/generous.jpg.asset.json";

export type Player = {
  id: string;
  handle: string;
  name: string;
  role: string;
  flag: string;
  joined: string;
  image?: string;
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
  wins: 9,
  losses: 10,
  goalsFor: 229,
  goalsAgainst: 178,
};

export const roster: Player[] = [
  {
    id: "p1",
    handle: "JSL2010",
    name: "JSL.the.orange.J20",
    role: "4th/3rd press",
    flag: "🇬🇧",
    joined: "Aug, 2025",
    image: jslImg.url,
  },
  {
    id: "p2",
    handle: "Lewi",
    name: "Lewi1738",
    role: "1st/2nd press",
    flag: "🇬🇧",
    joined: "Sept, 2025",
    image: lewiImg.url,
  },
  {
    id: "p3",
    handle: "Toast",
    name: "BreadZzZ",
    role: "2nd press",
    flag: "🇩🇪",
    joined: "Jun, 2026",
    image: toastImg.url,
  },
  {
    id: "p4",
    handle: "RD23",
    name: "riley2011.105631",
    role: "1st/2nd press",
    flag: "🇬🇧",
    joined: "Jul, 2026",
    image: rd23Img.url,
  },
  {
    id: "p5",
    handle: "PIBBLE.Z",
    name: "DICTATOR_PIBBLE.Z",
    role: "3rd/4th press",
    flag: "🇬🇧",
    joined: "Jul, 2026",
    image: pibbleImg.url,
  },
  {
    id: "p6",
    handle: "Generous_VR",
    name: "Generous_chillin",
    role: "1st/2nd press",
    flag: "🇬🇧",
    joined: "Jul, 2026",
    image: generousImg.url,
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
    id: "rpz-esports",
    name: "RPZ Esports",
    tier: "platinum",
    description: "",
  },
];

export const recruitment = {
  title: "RECRUITMENT",
  body: "RPZ CELESTIAL is a organization based in EU that is partnered and working with Replitz Esports to become superior and to grow in the competitive VR space in the game Orion Drift, with a EU and now new NA roster, we look for well rounded players both from EU and NA!",
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
