import { RESASBadResponse } from "@/libs/types/api/common";

export type Population = {
  year: number;
  value: number;
};

export type LabelType = "総人口" | "年少人口" | "生産年齢人口" | "老年人口";

export type PopulationResult = {
  boundaryYear: number;
  data: {
    label: LabelType;
    data: Population[];
  }[];
};

export type FetchPopulationResponse =
  | {
      message: string | null;
      result: PopulationResult;
    }
  | RESASBadResponse;
