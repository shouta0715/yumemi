import {
  FetchSelectedPopulationResponse,
  ViewPopulation,
} from "@/app/(apps)/_features/populations/types";
import { LabelType } from "@/libs/types/api/populations";

export const getLabelType = (
  type: string[] | undefined | string | null
): LabelType => {
  switch (type) {
    case "total":
      return "総人口";
    case "young":
      return "年少人口";
    case "productive":
      return "生産年齢人口";
    case "elderly":
      return "老年人口";
    default:
      return "総人口";
  }
};

export const parsePopulationResponse = (
  inputs: FetchSelectedPopulationResponse[],
  type: LabelType
): ViewPopulation => {
  const result: ViewPopulation = {};

  for (const { contents, prefCode } of inputs) {
    const filteredContent = contents.find((content) => content.label === type);

    if (!filteredContent) continue;

    result[prefCode] = filteredContent.data;
  }

  return result;
};
