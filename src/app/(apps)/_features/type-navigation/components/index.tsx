"use client";

import clsx from "clsx";
import { CheckIcon, ChevronDown, XIcon } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import styles from "./index.module.scss";
import { QueryLabelType } from "@/app/(apps)/_features/populations/types";

import { getLabelType } from "@/app/(apps)/_features/populations/utils";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LabelType } from "@/libs/types/api/populations";

type TypeNavigationProps = {
  selectedType: QueryLabelType;
};

const typeOptions: {
  value: QueryLabelType;
  label: LabelType;
}[] = [
  { value: "total", label: "総人口" },
  { value: "young", label: "年少人口" },
  { value: "productive", label: "生産年齢人口" },
  { value: "elderly", label: "老年人口" },
];

export function TypeNavigation({ selectedType }: TypeNavigationProps) {
  const [open, setOpen] = useState(false);
  const searchParams = useSearchParams();

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <span>
        <span className={styles.popover__label}>表示する人口データの選択</span>
      </span>
      <PopoverTrigger asChild className={styles.popover__trigger}>
        <button
          aria-expanded={open}
          aria-haspopup="dialog"
          onClick={() => setOpen(!open)}
          type="button"
        >
          {getLabelType(selectedType)}
          <ChevronDown className={styles.popover__trigger__icon} />
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className={styles.popover__content}>
        <p className={styles.popover__item__label}>
          表示する人口データの選択
          <PopoverClose className={styles.popover__close}>
            <XIcon
              aria-label="閉じる"
              className={styles.popover__close__icon}
            />
          </PopoverClose>
        </p>
        <nav>
          {typeOptions.map((option) => (
            <Link
              key={option.value}
              aria-current={selectedType === option.value ? "page" : undefined}
              aria-label={option.label}
              aria-selected={selectedType === option.value}
              className={clsx(
                styles.popover__item,
                selectedType === option.value && styles["popover__item--active"]
              )}
              href={{
                pathname: "/",
                query: {
                  prefCode: searchParams.getAll("prefCode"),
                  type: option.value,
                },
              }}
              onClick={() => setOpen(false)}
            >
              {option.label}
              {selectedType === option.value && (
                <CheckIcon className={styles.popover__item__icon} />
              )}
            </Link>
          ))}
        </nav>
      </PopoverContent>
    </Popover>
  );
}
