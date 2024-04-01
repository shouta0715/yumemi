import React from "react";
import styles from "./index.module.scss";
import { PrefectureCheckbox } from "@/app/(apps)/_features/checkbox/components";

import { getPrefCodeFromSearchParam } from "@/app/(apps)/_features/prefectures/utils";
import { Prefecture } from "@/libs/types/api/prefectures";
import { SearchParams } from "@/libs/types/next";

type PrefecturesProps = {
  prefectures: Prefecture[];
  searchParams: SearchParams;
};

export function Prefectures({ prefectures, searchParams }: PrefecturesProps) {
  return (
    <div>
      <h2 className={styles.prefectures__title}>都道府県の人口を表示します</h2>
      <p className={styles.prefectures__description}>
        表示する都道府県を選択してください（複数選択可）
      </p>
      <ul className={styles.prefectures}>
        {prefectures.map((prefecture) => (
          <li key={prefecture.prefCode}>
            <PrefectureCheckbox
              defaultPrefCodes={getPrefCodeFromSearchParam(searchParams)}
              prefecture={prefecture}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
