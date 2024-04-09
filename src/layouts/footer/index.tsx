import React from "react";

import styles from "./index.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          <a
            className={styles.source}
            href="https://resas.go.jp/#/13/13101"
            rel="noopener noreferrer"
            target="_blank"
          >
            「出典：RESAS（地域経済分析システム）」
          </a>
        </p>
        <p className={styles.text}>
          Created by{" "}
          <a
            className={styles.link}
            href="https://twitter.com/shoutapu0715"
            rel="noopener noreferrer"
            target="_blank"
          >
            shouta
          </a>
        </p>
      </div>
    </footer>
  );
}
