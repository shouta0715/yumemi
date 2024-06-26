import { ChevronDown, X } from "lucide-react";
import React from "react";
import styles from "./index.module.scss";

import { QueryLabelType } from "@/app/(apps)/_features/populations/types";
import { BatchTogglePrefectures } from "@/app/(apps)/_features/prefectures/components/batch-toggle";
import { Regions } from "@/app/(apps)/_features/prefectures/components/regions";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Prefecture } from "@/libs/types/api/prefectures";

type PrefecturesProps = {
  prefectures: Prefecture[];
  selectedLength: number;
  type: QueryLabelType;
};

export function Prefectures({
  prefectures,
  selectedLength,
  type,
}: PrefecturesProps) {
  return (
    <div>
      <p className={styles.popover__label}>都道府県を選択してください。</p>
      <Popover>
        <PopoverTrigger className={styles.popover__trigger}>
          都道府県の選択 {selectedLength > 0 && `(${selectedLength})`}
          <ChevronDown className={styles.popover__trigger__icon} />
        </PopoverTrigger>
        <PopoverContent align="start" className={styles.popover__content}>
          <PopoverClose className={styles.popover__close}>
            <X aria-label="閉じる" className={styles.popover__close__icon} />
          </PopoverClose>
          <Regions prefectures={prefectures} selectedLength={selectedLength} />
          <div className={styles.popover__toggle__container}>
            <BatchTogglePrefectures prefectures={prefectures} type={type} />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
