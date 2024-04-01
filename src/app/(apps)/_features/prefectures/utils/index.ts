import { SearchParams } from "@/libs/types/next";

export const getPrefCodeFromSearchParam = (
  searchParams: SearchParams
): string[] => {
  const prefCodes = searchParams?.prefCodes;

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
