import React from "react";
import {
  NameType,
  Payload,
} from "recharts/types/component/DefaultTooltipContent";

import styles from "./index.module.scss";

type ToolTipProps = {
  payload: Payload<number, NameType>[];
  label: string;
};

export function ToolTip({ payload, label }: ToolTipProps) {
  const sortedPayload = payload.sort((a, b) => {
    if (!a.value) return 1;
    if (!b.value) return -1;

    return b.value - a.value;
  });

  return (
    <div className={styles.tooltip} role="tooltip">
      <p className={styles.tooltip__label}>{label} 年の人口</p>
      <ul className={styles.tooltip__content}>
        {sortedPayload.map((entry) => {
          return (
            <li key={entry.name} className={styles.tooltip__item}>
              <span
                className={styles.tooltip__dot}
                style={{
                  backgroundColor: entry.stroke,
                }}
              />
              {entry.name}: {entry.value?.toLocaleString()} 人
            </li>
          );
        })}
      </ul>
    </div>
  );
}
