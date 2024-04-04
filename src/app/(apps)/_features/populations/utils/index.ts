import {
  FetchSelectedPopulationResponse,
  QueryLabelType,
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

export const getQueryLabelType = (
  type: string[] | undefined | string | null
): QueryLabelType => {
  switch (type) {
    case "total":
      return "total";
    case "young":
      return "young";
    case "productive":
      return "productive";
    case "elderly":
      return "elderly";
    default:
      return "total";
  }
};

export const parsePopulationResponse = (
  inputs: FetchSelectedPopulationResponse[],
  type: QueryLabelType
): ViewPopulation => {
  const result: ViewPopulation = {};

  for (const { contents, prefCode } of inputs) {
    const filteredContent = contents.find(
      (content) => content.label === getLabelType(type)
    );

    if (!filteredContent) continue;

    result[prefCode] = filteredContent.data;
  }

  return result;
};
