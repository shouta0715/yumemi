import { Suspense } from "react";
import styles from "./page.module.scss";
import { ChartLoader } from "@/app/(apps)/_features/charts/components/loader";
import { Populations } from "@/app/(apps)/_features/populations/components";
import { getQueryLabelType } from "@/app/(apps)/_features/populations/utils";
import { fetchPrefectures } from "@/app/(apps)/_features/prefectures/api";
import { Prefectures } from "@/app/(apps)/_features/prefectures/components";
import { Regions } from "@/app/(apps)/_features/prefectures/components/regions";
import { getPrefCodesFromSearchParams } from "@/app/(apps)/_features/prefectures/utils";
import { TypeNavigation } from "@/app/(apps)/_features/type-navigation/components";
import { SearchParams } from "@/libs/types/next";

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { result: prefectures } = await fetchPrefectures();

  const selectedPrefCodes = getPrefCodesFromSearchParams(searchParams);

  return (
    <div className={styles.page}>
      <div className={styles.selectors}>
        <Prefectures
          prefectures={prefectures}
          selectedLength={selectedPrefCodes.length}
          type={getQueryLabelType(searchParams?.type)}
        />
        <div>
          <TypeNavigation
            selectedType={getQueryLabelType(searchParams?.type)}
          />
        </div>
      </div>

      <div>
        {selectedPrefCodes.length === 0 ? (
          <Regions prefectures={prefectures} selectedLength={0} />
        ) : (
          <Suspense fallback={<ChartLoader />}>
            <Populations
              allPrefectures={prefectures}
              selectedPrefCodes={selectedPrefCodes}
              type={getQueryLabelType(searchParams?.type)}
            />
          </Suspense>
        )}
      </div>
    </div>
  );
}
