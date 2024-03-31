import React from "react";
import styles from "./index.module.scss";
import { Footer } from "@/app/layouts/footer";
import { Header } from "@/app/layouts/header";

export function AppLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <main className={styles.content}>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
