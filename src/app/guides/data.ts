export type GuideStep = { title: string; body: string };
export type GuideFaq = { question: string; answer: string };

export type Guide = {
  slug: string;
  category: string;
  title: string;
  description: string;
  updated: string;
  intro: string;
  steps: GuideStep[];
  tips: string[];
  faqs: GuideFaq[];
};

// Add new guides here — the /guides index and sitemap.ts both read from
// this list, nothing else to keep in sync.
export const GUIDES: Guide[] = [
  {
    slug: "download-tiktok-video",
    category: "TikTok",
    title: "How to Download a TikTok Video by URL",
    description:
      "TikTok's app only lets you save a video if the creator allows it, and it burns in a watermark when it does. Here's how to save a public TikTok video as a clean MP4 from a browser instead.",
    updated: "August 12, 2026",
    intro:
      "TikTok's own \"save video\" option is creator-controlled and, when it's available, adds an on-screen watermark to the file. Because TikTok's public player fetches the video from a direct file URL, a browser-based downloader can pull that same file without going through the app at all — no install, no account.",
    steps: [
      {
        title: "Copy the video's share link",
        body: 'Open the TikTok video, tap "Share," then "Copy link." On desktop, right-click the video and copy the page URL from the address bar instead.',
      },
      {
        title: "Open a URL-to-MP4 downloader",
        body: "Any tool built for this works the same basic way: you paste a public video link, it looks up the available download formats, you pick one.",
      },
      {
        title: "Confirm you own the video, or have permission to use it",
        body: "A downloader that skips this step is a red flag — reputable ones require you to confirm rights before resolving or downloading anything.",
      },
      {
        title: "Pick a quality and download",
        body: "Choose a resolution from the list and download. The file saves as a standard MP4 you can open, edit, or re-upload anywhere.",
      },
    ],
    tips: [
      "Only public videos can be resolved this way — private accounts and region-locked videos won't work.",
      "TikTok periodically changes its API, which can briefly break resolution for new videos until a tool's extractor catches up.",
      "Slideshow posts (photos instead of video) generally aren't supported by URL-based downloaders — only video posts.",
    ],
    faqs: [
      {
        question: "Does this remove the TikTok watermark?",
        answer:
          "It depends on the tool and the specific video — most URL-based downloaders fetch the same source file TikTok's own player uses, which is often the version without the on-screen watermark, but this isn't guaranteed for every video.",
      },
      {
        question: "Do I need a TikTok account?",
        answer: "No — a public video link is all that's required, no account or app install needed.",
      },
      {
        question: "Is downloading TikTok videos legal?",
        answer:
          "Downloading a video you don't own or don't have permission to use can violate copyright law and TikTok's own terms of service, regardless of what tool you use. Only download videos you own or have explicit permission to use.",
      },
    ],
  },
  {
    slug: "download-youtube-video",
    category: "YouTube",
    title: "How to Download a YouTube Video by URL",
    description:
      "YouTube doesn't offer a native MP4 download outside of Premium's offline mode, which only works inside the app. Here's how to save a public video as a real file instead.",
    updated: "August 12, 2026",
    intro:
      "Outside of YouTube Premium's in-app offline mode, YouTube has no built-in way to save a video as a file you can keep. A URL-based downloader gets you a real MP4 in your choice of resolution — provided the video is public and you have the rights to use it.",
    steps: [
      {
        title: "Copy the video URL",
        body: "Copy the address bar URL on desktop, or tap \"Share\" then \"Copy link\" in the YouTube app.",
      },
      {
        title: "Open a URL-to-MP4 downloader",
        body: "Paste the link in — the tool looks up every resolution YouTube's own player offers for that specific video.",
      },
      {
        title: "Confirm you own the video, or have permission to use it",
        body: "A downloader that skips this step is a red flag — reputable ones require you to confirm rights before resolving or downloading anything.",
      },
      {
        title: "Pick a resolution and download",
        body: "Higher resolutions take longer to fetch and merge — a long video in 1080p can take a couple of minutes.",
      },
    ],
    tips: [
      "The available resolutions depend on what the video was originally uploaded in — you won't see options above its source quality.",
      "Age-restricted, private, and members-only videos can't be resolved this way — only fully public videos.",
      "Livestreams and Premieres that haven't finished airing generally aren't supported.",
    ],
    faqs: [
      {
        question: "What's the highest quality available?",
        answer: "Whatever YouTube's own player offers for that specific video, up to its original upload quality.",
      },
      {
        question: "Can I download just the audio?",
        answer: "That depends on the specific tool — not all URL-based downloaders support audio-only extraction.",
      },
      {
        question: "Is downloading YouTube videos legal?",
        answer:
          "It depends on the video and how you plan to use it. Downloading content you don't own or don't have permission to use can violate copyright law and YouTube's terms of service. Only download videos you own or have explicit permission to use.",
      },
    ],
  },
  {
    slug: "is-it-legal-to-download-social-videos",
    category: "Legal",
    title: "Is It Legal to Download Videos from YouTube, TikTok, or Instagram?",
    description:
      "A plain-language answer to the question every video downloader user has: what's actually allowed, what isn't, and where the real risk is.",
    updated: "August 12, 2026",
    intro:
      "Short answer: it depends entirely on whether you own the video or have permission to use it — not on which tool you use to download it. Every major platform's terms of service technically prohibit downloading content without authorization, but enforcement in practice targets what you do with the video afterward, not the act of saving a copy for personal reference.",
    steps: [
      {
        title: "You own the video",
        body: "If you filmed it, or it's your brand's own content that was posted by someone else (an editor, a repost account, a platform re-encode), downloading your own work back is unambiguously fine.",
      },
      {
        title: "You have explicit permission",
        body: "A creator sending you their video to re-edit, caption, or repost with credit — get that permission in writing (a DM confirming it is enough) before you download and reuse it.",
      },
      {
        title: "You're downloading for personal, private viewing",
        body: "Saving a video to watch offline later, without redistributing or reposting it, is the lowest-risk use case and rarely the target of any enforcement action — but it still technically falls outside most platforms' terms of service.",
      },
      {
        title: "You plan to repost, remix, or monetize someone else's video",
        body: "This is where real legal and platform risk lives — copyright claims, takedowns, and account strikes are enforced against redistribution, not private downloading.",
      },
    ],
    tips: [
      "\"Fair use\" is a legal defense you'd argue in court, not a rule that makes reposting automatically fine — don't rely on it as a shortcut.",
      "Platforms can and do issue copyright strikes based on automated matching, regardless of whether a human ever reviews the specific case.",
      "When in doubt, ask the creator. Most are receptive to a genuine credit-and-permission request, especially for non-commercial use.",
    ],
    faqs: [
      {
        question: "Can I get in legal trouble just for downloading a video?",
        answer:
          "For personal, non-redistributed use, real-world legal action against an individual downloader is extremely rare. The risk rises sharply once you repost, remix, or monetize someone else's content without permission.",
      },
      {
        question: "Does crediting the original creator make reposting okay?",
        answer:
          "Credit is good practice and some creators are fine with it, but it doesn't remove the legal requirement to have permission — credit isn't a substitute for a license.",
      },
      {
        question: "Is this different for content I made that someone else reposted?",
        answer:
          "No — if it's genuinely your content, you're free to download and use it regardless of who reposted it or where.",
      },
    ],
  },
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((guide) => guide.slug === slug);
}
