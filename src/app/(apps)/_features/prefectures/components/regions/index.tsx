import React from "react";
import styles from "./index.module.scss";
import { PrefectureCheckbox } from "@/app/(apps)/_features/checkbox/components";
import { splitPrefecturesToRegions } from "@/app/(apps)/_features/prefectures/utils";
import { Prefecture } from "@/libs/types/api/prefectures";

type RegionsProps = {
  prefectures: Prefecture[];
  selectedLength: number;
};

export function Regions({ prefectures, selectedLength }: RegionsProps) {
  const regions = splitPrefecturesToRegions(prefectures);

  return (
    <>
      <p className={styles.regions__description}>
        表示する都道府県を選択してください。複数選択可能です。
        {selectedLength === 0 && (
          <span className={styles.regions__description__note}>
            都道府県を選択すると、人口グラフが表示されます。
          </span>
        )}
      </p>
      <ul className={styles.regions}>
        {regions.map((region) => (
          <li key={region.label}>
            <h3 className={styles.regions__title}>{region.label}</h3>
            <ul className={styles.prefectures}>
              {region.prefectures.map((prefecture) => (
                <li key={prefecture.prefCode}>
                  <PrefectureCheckbox prefecture={prefecture} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
