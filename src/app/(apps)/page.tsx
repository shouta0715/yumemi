import { Suspense } from "react";
import { ChartLoader } from "@/app/(apps)/_features/charts/components/loader";
import { Populations } from "@/app/(apps)/_features/populations/components";
import { EmptyCharts } from "@/app/(apps)/_features/populations/components/empty";
import { getQueryLabelType } from "@/app/(apps)/_features/populations/utils";
import { fetchPrefectures } from "@/app/(apps)/_features/prefectures/api";
import { Prefectures } from "@/app/(apps)/_features/prefectures/components";
import { getPrefCodesFromSearchParams } from "@/app/(apps)/_features/prefectures/utils";
import { SearchParams } from "@/libs/types/next";

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { result: prefectures } = await fetchPrefectures();

  const selectedPrefCodes = getPrefCodesFromSearchParams(searchParams);

  return (
    <div>
      <Prefectures prefectures={prefectures} searchParams={searchParams} />
      <div>
        {selectedPrefCodes.length === 0 ? (
          <EmptyCharts />
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
