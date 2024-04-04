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
