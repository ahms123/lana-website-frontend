export const siteConfig = {
  name: "LANA",
  tagline: "Play. Earn. Claim.",
  description:
    "A gaming rewards app for tasks, invites, claims, and wallet-ready progression — built for the next wave of players.",
  links: {
    apk: "https://drive.google.com/uc?export=download&id=1NrWh1TZLtaeugBV6g0CeU374XTHh86Cv",
    playStore: "#download",
    appStore: "#download",
    telegram: "#",
    twitter: "#",
  },
  legal: {
    entityName: "LANA",
    supportEmail: "support@lana.app",
    effectiveDate: "July 21, 2026",
    lastUpdated: "July 21, 2026",
  },
} as const;

export const navLinks = [
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#roadmap", label: "Roadmap" },
  { href: "#faq", label: "FAQ" },
  { href: siteConfig.links.apk, label: "Download APK" },
] as const;

export const stats = [
  { value: "Live", label: "Daily claims" },
  { value: "Tasks", label: "Mission board" },
  { value: "Frens", label: "Invite rewards" },
  { value: "Earn", label: "Action loops" },
  { value: "Wallet", label: "Progress bind" },
] as const;

export const features = [
  {
    title: "Daily Claim",
    body: "Claim rewards on a clear cooldown with live countdowns — stay in the loop without guesswork.",
    accent: "cyan" as const,
  },
  {
    title: "Mission Tasks",
    body: "Complete focused tasks, unlock progression, and stack rewards as you move through the board.",
    accent: "green" as const,
  },
  {
    title: "Frens Network",
    body: "Invite friends, climb the ranks, and grow your circle with transparent referral momentum.",
    accent: "magenta" as const,
  },
  {
    title: "Earn Actions",
    body: "Run earn loops designed for repeat play — track status, finish actions, and cash in progress.",
    accent: "orange" as const,
  },
  {
    title: "Wallet Ready",
    body: "Connect your identity path and keep rewards tied to your account as the ecosystem expands.",
    accent: "cyan" as const,
  },
  {
    title: "Secure Sessions",
    body: "Protected auth flows with modal clarity and full-screen loaders so every action feels intentional.",
    accent: "green" as const,
  },
] as const;

export const steps = [
  {
    step: "01",
    title: "Create your account",
    body: "Sign up securely and land in your home dashboard with claim status ready.",
  },
  {
    step: "02",
    title: "Complete tasks & earn",
    body: "Hit the mission board, run earn actions, and invite frens to accelerate rewards.",
  },
  {
    step: "03",
    title: "Claim and grow",
    body: "Pull daily claims, watch cooldowns, and keep your score climbing over time.",
  },
] as const;

export const roadmap = [
  {
    phase: "Phase 01",
    title: "Foundation",
    body: "Core app live: auth, home claim loop, tasks surface, and settings identity.",
    status: "Live" as const,
  },
  {
    phase: "Phase 02",
    title: "Growth loops",
    body: "Frens ranking, earn actions, and tighter reward feedback across every screen.",
    status: "Now" as const,
  },
  {
    phase: "Phase 03",
    title: "Wallet expansion",
    body: "Deeper bind flows, richer progress sync, and smoother claim-to-wallet paths.",
    status: "Next" as const,
  },
  {
    phase: "Phase 04",
    title: "Ecosystem scale",
    body: "Broader partnerships, store distribution, and community-led growth campaigns.",
    status: "Soon" as const,
  },
] as const;

export const faqs = [
  {
    q: "What is LANA?",
    a: "LANA is a mobile gaming rewards app where you complete tasks, invite friends, run earn actions, and claim rewards on a clear schedule.",
  },
  {
    q: "How do daily claims work?",
    a: "When a claim window is open, tap Claim on Home. After a successful claim, a cooldown timer starts until the next window.",
  },
  {
    q: "Do I need a wallet to start?",
    a: "No. You can create an account and start playing immediately. Wallet binding is available as you progress.",
  },
  {
    q: "How do Frens rewards work?",
    a: "Share your invite link, grow your network, and climb ranking as friends join and participate in the ecosystem.",
  },
  {
    q: "Where can I download the app?",
    a: "Download the Android APK from the Download section or the Get the app button in the header.",
  },
] as const;
