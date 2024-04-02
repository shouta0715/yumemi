export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type RESASBadResponse = {
  statusCode: number;
  message: string | null;
  description: string | null;
};

export type FetchPrefecturesResponse =
  | {
      message: string | null;
      result: Prefecture[];
    }
  | RESASBadResponse;
