import { Metadata } from "next";

export const basicMetadata: Metadata = {
  metadataBase: new URL("https://yumemi.vercel.app/"),
  generator: "倉橋 渉太",
  applicationName: "Poplus",
  referrer: "no-referrer",
  authors: [
    {
      name: "倉橋 渉太",
      url: "https://www.kurahashi.me/",
    },
  ],
  creator: "倉橋 渉太",
  publisher: "倉橋 渉太",
  keywords: [
    "ゆめみ",
    "Yumemi",
    "ゆめみコーディングテスト",
    "Poplus",
    "人口",
    "都道府県",
    "グラフ",
  ],
  title: {
    default: "Poplus",
    template: "Poplus | %s",
  },

  description: "都道府県の人口をグラフで表示するアプリケーションです。",
  openGraph: {
    title: "Poplus",
    description: "都道府県の人口をグラフで表示するアプリケーションです。",
    siteName: "Poplus",
    url: "https://yumemi.vercel.app/",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Poplus",
    description: "都道府県の人口をグラフで表示するアプリケーションです。",
    creator: "@shoutapu0715",
  },
};
