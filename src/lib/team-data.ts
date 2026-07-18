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
  region: "EU" | "NA";
};

export type Match = {
  id: string;
  date: string;
  time: string;
  opponent: string;
  tournament: string;
  status: "upcoming" | "won" | "lost" | "draw";
  score?: string;
  games?: string[];
};

export type Partner = {
  id: string;
  name: string;
  tier: "platinum" | "gold" | "silver";
  description: string;
};

export const teamStats = {
  founded: "2025",
  region: "Europe",
  matchesPlayed: 20,
  winRate: 50,
  tournamentWins: 0,
  currentRank: "#51",
  wins: 10,
  losses: 10,
  goalsFor: 241,
  goalsAgainst: 188,
};

export const goalDifferential = teamStats.goalsFor - teamStats.goalsAgainst;

export const roster: Player[] = [
  {
    id: "p1",
    handle: "JSL2010",
    name: "JSL.the.orange.J20",
    role: "4th/3rd press",
    flag: "🇬🇧",
    joined: "Aug, 2025",
    image: jslImg.url,
    region: "EU",
  },
  {
    id: "p2",
    handle: "Lewi",
    name: "Lewi1738",
    role: "1st/2nd press",
    flag: "🇬🇧",
    joined: "Sept, 2025",
    image: lewiImg.url,
    region: "EU",
  },
  {
    id: "p3",
    handle: "Toast",
    name: "BreadZzZ",
    role: "2nd press",
    flag: "🇩🇪",
    joined: "Jun, 2026",
    image: toastImg.url,
    region: "EU",
  },
  {
    id: "p4",
    handle: "RD23",
    name: "riley2011.105631",
    role: "1st/2nd press",
    flag: "🇬🇧",
    joined: "Jul, 2026",
    image: rd23Img.url,
    region: "EU",
  },
  {
    id: "p5",
    handle: "PIBBLE.Z",
    name: "DICTATOR_PIBBLE.Z",
    role: "3rd/4th press",
    flag: "🇬🇧",
    joined: "Jul, 2026",
    image: pibbleImg.url,
    region: "EU",
  },
  {
    id: "p6",
    handle: "Generous_VR",
    name: "Generous_chillin",
    role: "1st/2nd press",
    flag: "🇬🇧",
    joined: "Jul, 2026",
    image: generousImg.url,
    region: "EU",
  },
  {
    id: "p7",
    handle: "TheSmallWhiteShark",
    name: "Hope.409709",
    role: "2nd/3rd press",
    flag: "🇺🇸",
    joined: "Jul, 2026",
    region: "NA",
  },
  {
    id: "p8",
    handle: "Bob34!!",
    name: "Bob34",
    role: "4th/3rd press",
    flag: "🇺🇸",
    joined: "Jul, 2026",
    region: "NA",
  },
  {
    id: "p9",
    handle: "Year2k",
    name: "Year2k",
    role: "1st press",
    flag: "🇺🇸",
    joined: "Jul, 2026",
    region: "NA",
  },
  {
    id: "p10",
    handle: "Hello",
    name: "mmuko",
    role: "1st/2nd press",
    flag: "🇺🇸",
    joined: "Jul, 2026",
    region: "NA",
  },
  {
    id: "p11",
    handle: "Npc_dark",
    name: "Npc_dark",
    role: "1st/2nd press",
    flag: "🇺🇸",
    joined: "Jul, 2026",
    region: "NA",
  },
  {
    id: "p12",
    handle: "poptart",
    name: "poptart",
    role: "3rd press",
    flag: "🇺🇸",
    joined: "Jul, 2026",
    region: "NA",
  },
];

export const matches: Match[] = [
  {
    id: "m1",
    date: "17-07-2026",
    time: "Best Of 5",
    opponent: "RCX-ELITE",
    tournament: "ODC SEASON 1",
    status: "won",
    score: "3-1",
  },
  {
    id: "m2",
    date: "13-7-2026",
    time: "Best Of 5",
    opponent: "Velocity eu",
    tournament: "ODC SEASON 1",
    status: "won",
    score: "3-1",
  },
  {
    id: "m3",
    date: "11-7-2026",
    time: "Best Of 5",
    opponent: "Trailblazerz",
    tournament: "ODC SEASON 1",
    status: "lost",
    score: "1-3",
  },
  {
    id: "m4",
    date: "9-7-2026",
    time: "Best Of 5",
    opponent: "WWonkas",
    tournament: "ODC SEASON 1",
    status: "lost",
    score: "0-3",
  },
  {
    id: "m5",
    date: "5-7-2026",
    time: "Best Of 5",
    opponent: "Team Black Flash",
    tournament: "ODC SEASON 1",
    status: "won",
    score: "3-0",
  },
  {
    id: "m6",
    date: "29-6-2026",
    time: "Best Of 5",
    opponent: "Blizz EU",
    tournament: "ODC SEASON 1",
    status: "won",
    score: "3-0",
  },
  {
    id: "m7",
    date: "26-6-2026",
    time: "Best Of 5",
    opponent: "Revenge",
    tournament: "ODC SEASON 1",
    status: "lost",
    score: "0-3",
  },
  {
    id: "m8",
    date: "24-6-2026",
    time: "Best Of 5",
    opponent: "NYTRIX",
    tournament: "ODC SEASON 1",
    status: "lost",
    score: "0-3",
  },
  {
    id: "m9",
    date: "20-6-2026",
    time: "Best Of 5",
    opponent: "Rainfall",
    tournament: "ODC SEASON 1",
    status: "lost",
    score: "0-3",
  },
  {
    id: "m10",
    date: "18-6-2026",
    time: "Best Of 5",
    opponent: "HEX",
    tournament: "ODC SEASON 1",
    status: "won",
    score: "3-0",
  },
  {
    id: "m11",
    date: "14-6-2026",
    time: "Best Of 5",
    opponent: "FaceFace",
    tournament: "ODC SEASON 1",
    status: "won",
    score: "3-0",
  },
  {
    id: "m12",
    date: "13-6-2026",
    time: "Best Of 5",
    opponent: "CIA",
    tournament: "ODC SEASON 1",
    status: "won",
    score: "3-0",
  },
  {
    id: "m13",
    date: "5-6-2026",
    time: "Best Of 5",
    opponent: "Crimson",
    tournament: "ODC SEASON 1",
    status: "lost",
    score: "0-3",
  },
  {
    id: "m14",
    date: "1-6-2026",
    time: "Best Of 5",
    opponent: "STORM",
    tournament: "ODC SEASON 1",
    status: "lost",
    score: "0-3",
  },
  {
    id: "m15",
    date: "31-5-2026",
    time: "Best Of 5",
    opponent: "Eye EU",
    tournament: "ODC SEASON 1",
    status: "won",
    score: "3-0",
  },
  {
    id: "m16",
    date: "26-5-2026",
    time: "Best Of 5",
    opponent: "Velocity eu",
    tournament: "ODC SEASON 1",
    status: "lost",
    score: "2-3",
  },
  {
    id: "m17",
    date: "22-5-2026",
    time: "Best Of 5",
    opponent: "OMNI-RCX",
    tournament: "ODC SEASON 1",
    status: "won",
    score: "3-2",
  },
  {
    id: "m18",
    date: "18-5-2026",
    time: "Best Of 5",
    opponent: "RCX-ELITE",
    tournament: "ODC SEASON 1",
    status: "lost",
    score: "1-3",
  },
  {
    id: "m19",
    date: "17-5-2026",
    time: "Best Of 5",
    opponent: "Vanguard",
    tournament: "ODC SEASON 1",
    status: "won",
    score: "3-0",
  },
  {
    id: "m20",
    date: "12-5-2026",
    time: "Best Of 5",
    opponent: "Thundaa",
    tournament: "ODC SEASON 1",
    status: "lost",
    score: "0-3",
  },
];

export const recruitment = {
  title: "RECRUITMENT",
  body: "RPZ CELESTIAL is a organization based in EU that is partnered and working with Replitz Esports to become superior and to grow in the competitive VR space in the game Orion Drift, with a EU and now new NA roster, we look for well rounded players both from EU and NA!",
  requirements: [
    "13+",
    "Respectful",
    "Mature",
    "Skilled",
    "Good positioning",
    "Good passing",
    "Strong game sense",
    "Communication",
    "Awareness",
    "EU or NA",
  ],
  contact: "recruit@rpzcelestial.gg",
};

export const socials = [
  { name: "X / Twitter", url: "https://x.com/rpzcelestial", handle: "@rpzcelestial" },
  { name: "Twitch", url: "https://twitch.tv/rpzcelestial", handle: "twitch.tv/rpzcelestial" },
  { name: "YouTube", url: "https://youtube.com/@rpzcelestial", handle: "@rpzcelestial" },
  { name: "Discord", url: "https://discord.gg/9Y6KYU49uH", handle: "discord.gg/9Y6KYU49uH" },
];
