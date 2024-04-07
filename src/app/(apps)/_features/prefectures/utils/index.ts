import { Prefecture } from "@/libs/types/api/prefectures";
import { SearchParams } from "@/libs/types/next";

export const getPrefCodesFromSearchParams = (
  searchParams: SearchParams
): string[] => {
  const prefCodes = searchParams?.prefCode;

  if (!prefCodes) return [];

  if (typeof prefCodes === "string") {
    const number = Number(prefCodes);

    if (number <= 47 && number >= 1) {
      return [prefCodes];
    }

    return [];
  }

  return prefCodes.filter((prefCode) => {
    const number = Number(prefCode);

    return number <= 47 && number >= 1;
  });
};

export const getSelectedPrefectures = (
  allPrefectures: Prefecture[],
  selectedPrefCodes: string[]
): Prefecture[] => {
  return allPrefectures.filter((prefecture) => {
    return selectedPrefCodes.includes(prefecture.prefCode.toString());
  });
};

export const splitPrefecturesToRegions = (
  prefectures: Prefecture[]
): { label: string; prefectures: Prefecture[] }[] => {
  const regions = [
    { label: "北海道・東北", start: 1, end: 7 },
    { label: "関東", start: 8, end: 14 },
    { label: "中部", start: 15, end: 23 },
    { label: "近畿", start: 24, end: 30 },
    { label: "中国", start: 31, end: 35 },
    { label: "四国", start: 36, end: 39 },
    { label: "九州・沖縄", start: 40, end: 47 },
  ];
  const result: { label: string; prefectures: Prefecture[] }[] = [];

  for (const { label, start, end } of regions) {
    const targetPrefectures = prefectures.filter((prefecture) => {
      return prefecture.prefCode >= start && prefecture.prefCode <= end;
    });

    result.push({ label, prefectures: targetPrefectures });
  }

  return result;
};

export const getAllPrefecturesParams = (prefectures: Prefecture[]): string => {
  return prefectures
    .map((prefecture) => `prefCode=${prefecture.prefCode}`)
    .join("&");
};
