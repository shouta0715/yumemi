import dynamic from "next/dynamic";
import React from "react";

import { ChartLoader } from "@/app/(apps)/_features/charts/components/loader";
import { fetchSelectedPopulation } from "@/app/(apps)/_features/populations/api";
import { QueryLabelType } from "@/app/(apps)/_features/populations/types";
import { parsePopulationResponse } from "@/app/(apps)/_features/populations/utils";
import { getSelectedPrefectures } from "@/app/(apps)/_features/prefectures/utils";
import { Prefecture } from "@/libs/types/api/prefectures";

type PopulationListProps = {
  allPrefectures: Prefecture[];
  selectedPrefCodes: string[];
  type: QueryLabelType;
};

const DynamicPopulationCharts = dynamic(
  () => import("@/app/(apps)/_features/charts/components").then((mod) => mod),
  {
    loading: () => <ChartLoader />,
    ssr: false,
  }
);

export async function Populations({
  selectedPrefCodes,
  allPrefectures,
  type,
}: PopulationListProps) {
  const data = await fetchSelectedPopulation(selectedPrefCodes);

  const selectedPrefecture = getSelectedPrefectures(
    allPrefectures,
    selectedPrefCodes
  );

  return (
    <div>
      <DynamicPopulationCharts
        data={parsePopulationResponse(data, type)}
        selectedPrefecture={selectedPrefecture}
      />
    </div>
  );
}
