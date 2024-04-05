import { ChevronDown } from "lucide-react";
import React from "react";
import styles from "./index.module.scss";

import { Regions } from "@/app/(apps)/_features/prefectures/components/regions";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Prefecture } from "@/libs/types/api/prefectures";

type PrefecturesProps = {
  prefectures: Prefecture[];
  selectedLength: number;
};

export function Prefectures({ prefectures, selectedLength }: PrefecturesProps) {
  return (
    <div>
      <p className={styles.popover__label}>都道府県を選択してください。</p>
      <Popover>
        <PopoverTrigger className={styles.popover__trigger}>
          都道府県の選択 {selectedLength > 0 && `(${selectedLength})`}
          <ChevronDown className={styles.popover__trigger__icon} />
        </PopoverTrigger>
        <PopoverContent align="start" className={styles.popover__content}>
          <Regions prefectures={prefectures} selectedLength={selectedLength} />
        </PopoverContent>
      </Popover>
    </div>
  );
}
