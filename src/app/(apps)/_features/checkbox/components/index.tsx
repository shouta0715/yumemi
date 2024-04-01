"use client";

import React from "react";
import styles from "./index.module.scss";
import { usePrefecture } from "@/app/(apps)/_features/checkbox/hooks";
import { Checkbox } from "@/components/checkbox";
import { Loader } from "@/components/loader";

type PrefectureCheckboxProps = {
  prefecture: {
    prefCode: number;
    prefName: string;
  };
  defaultPrefCodes: string[];
};

export function PrefectureCheckbox({
  prefecture: { prefCode, prefName },
  defaultPrefCodes,
}: PrefectureCheckboxProps) {
  const { handleCheckboxChange, defaultChecked, isPending } = usePrefecture({
    defaultPrefCodes,
    prefCode,
  });

  return (
    <label className={styles.prefecture} htmlFor={`prefecture-${prefCode}`}>
      {isPending ? (
        <Loader height={16} width={16} />
      ) : (
        <Checkbox
          defaultChecked={defaultChecked}
          id={`prefecture-${prefCode}`}
          onChange={handleCheckboxChange}
          value={prefCode}
        />
      )}

      {prefName}
    </label>
  );
}
