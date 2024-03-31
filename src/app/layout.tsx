import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/styles/global/index.scss";

import styles from "./layout.module.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Poplus",
    template: "%s | Poplus",
  },
  description: "都道府県別の人口推移をグラフで表示します。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={clsx(inter.className, styles.root)}>{children}</body>
    </html>
  );
}
