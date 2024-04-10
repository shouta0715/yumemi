import clsx from "clsx";
import { Inter } from "next/font/google";

import "@/styles/global/index.scss";

import styles from "./layout.module.scss";
import { basicMetadata } from "@/libs/meta";

const inter = Inter({ subsets: ["latin"] });

export const metadata = basicMetadata;

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
