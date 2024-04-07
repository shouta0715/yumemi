import clsx from "clsx";
import Link from "next/link";
import React from "react";
import styles from "./index.module.scss";
import { QueryLabelType } from "@/app/(apps)/_features/populations/types";
import { getAllPrefecturesParams } from "@/app/(apps)/_features/prefectures/utils";
import { Prefecture } from "@/libs/types/api/prefectures";

type PrefecturesProps = {
  prefectures: Prefecture[];
  type: QueryLabelType;
};

export function BatchTogglePrefectures({
  prefectures,
  type,
}: PrefecturesProps) {
  return (
    <div className={styles["batch-toggle"]}>
      <Link
        className={clsx(
          styles["batch-toggle__reset"],
          styles["batch-toggle__item"]
        )}
        href={`/?type=${type}`}
      >
        リセット
      </Link>
      <Link
        className={clsx(
          styles["batch-toggle__all"],
          styles["batch-toggle__item"]
        )}
        href={`/?${getAllPrefecturesParams(prefectures)}&type=${type}`}
      >
        すべて選択
      </Link>
    </div>
  );
}
