import React from "react";
import styles from "./index.module.scss";

export function ChartLoader() {
  return (
    <div aria-label="Loading" className={styles.loader} role="status">
      <div aria-busy="true" className={styles.loader__inner} />
    </div>
  );
}
