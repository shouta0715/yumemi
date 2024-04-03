import { Population, PopulationResult } from "@/libs/types/api/populations";

export type ViewPopulation = {
  [prefCode: string]: Population[];
};

export type FetchSelectedPopulationResponse = {
  contents: PopulationResult["data"];
  prefCode: string;
};
