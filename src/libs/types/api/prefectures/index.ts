import { RESASBadResponse } from "@/libs/types/api/common";

export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type FetchPrefecturesResponse =
  | {
      message: string | null;
      result: Prefecture[];
    }
  | RESASBadResponse;
