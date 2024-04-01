export type Prefecture = {
  prefCode: number;
  prefName: string;
};

export type RESASBaseResponse = {
  statusCode: number;
  message: string | null;
  description: string | null;
};

export type FetchPrefecturesResponse =
  | {
      message: string | null;
      result: Prefecture[];
    }
  | RESASBaseResponse;
