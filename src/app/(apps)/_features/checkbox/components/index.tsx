"use client";

import React, { memo } from "react";
import styles from "./index.module.scss";
import { usePrefecture } from "@/app/(apps)/_features/checkbox/hooks";
import { Checkbox } from "@/components/checkbox";
import { Loader } from "@/components/loader";

type PrefectureCheckboxProps = {
  prefecture: {
    prefCode: number;
    prefName: string;
  };
};

export const PrefectureCheckbox = memo(
  ({ prefecture: { prefCode, prefName } }: PrefectureCheckboxProps) => {
    const { handleCheckboxChange, checked, isPending } = usePrefecture({
      prefCode,
    });

    return (
      <label className={styles.prefecture} htmlFor={`prefecture-${prefCode}`}>
        {isPending ? (
          <Loader height={16} width={16} />
        ) : (
          <Checkbox
            checked={checked}
            id={`prefecture-${prefCode}`}
            onChange={handleCheckboxChange}
            value={prefCode}
          />
        )}

        {prefName}
      </label>
    );
  }
);

PrefectureCheckbox.displayName = "PrefectureCheckbox";
