import React from "react";
import styles from "./index.module.scss";
import { Logo } from "@/components/logo";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          <Logo height={64} width={64} />
          <span>Poplus</span>
        </h1>
        <p className={styles.description}>
          選択した都道府県の人口をグラフで表示するサービス
        </p>
      </div>
    </header>
  );
}
