import { X } from "lucide-react";
import React, { useMemo } from "react";
import {
  NameType,
  Payload,
} from "recharts/types/component/DefaultTooltipContent";

import styles from "./index.module.scss";
import { QueryLabelType } from "@/app/(apps)/_features/populations/types";
import { getLabelType } from "@/app/(apps)/_features/populations/utils";

type ToolTipProps = {
  payload: Payload<number, NameType>[];
  label: string;
  type: QueryLabelType;
  setOpenedTooltip: (open: true | undefined) => void;
};

export function ToolTip({
  payload,
  label,
  type,
  setOpenedTooltip,
}: ToolTipProps) {
  const sortedPayload = useMemo(() => {
    payload.sort((a, b) => {
      if (!a.value) return 1;
      if (!b.value) return -1;

      return b.value - a.value;
    });

    return payload;
  }, [payload]);

  return (
    <div className={styles.tooltip} role="tooltip">
      <p className={styles.tooltip__label}>
        {label} 年の{getLabelType(type)}
        <button
          className={styles.tooltip__close}
          onClick={() => setOpenedTooltip(undefined)}
          type="button"
        >
          <X className={styles.tooltip__icon} />
          <span className={styles["sr-only"]}>ツールチップを閉じる</span>
        </button>
      </p>
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
