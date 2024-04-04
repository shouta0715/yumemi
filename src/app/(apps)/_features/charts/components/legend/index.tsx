import React from "react";
import { Payload } from "recharts/types/component/DefaultLegendContent";
import styles from "./index.module.scss";

type LegendProps = {
  payload: Payload[];
};

export function Legend({ payload }: LegendProps) {
  return (
    <ul aria-label="Legend" className={styles.legend}>
      {payload.map((entry) => {
        const { color, value } = entry;

        return (
          <li key={value} className={styles.legend__item}>
            <span
              className={styles.legend__dot}
              style={{
                backgroundColor: color,
              }}
            />
            <span className={styles.legend__label}>{value}</span>
          </li>
        );
      })}
    </ul>
  );
}
