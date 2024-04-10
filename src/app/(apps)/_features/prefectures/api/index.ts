import "server-only";
import { getEnv } from "@/libs/constant/env";
import { HttpError, getErrorStatus } from "@/libs/errors";
import { get } from "@/libs/fetch";
import { FetchPrefecturesResponse } from "@/libs/types/api/prefectures";

export const fetchPrefectures = async () => {
  const response = await get<FetchPrefecturesResponse>(
    `${getEnv("URL")}/api/v1/prefectures`,
    {
      headers: {
        "X-API-KEY": getEnv("KEY"),
      },
      requestInit: {
        cache: "force-cache",
      },
    }
  );

  if ("statusCode" in response) {
    const status = getErrorStatus(Number(response.statusCode));
    const error = new HttpError(status, response.message);

    throw error;
  }

  return response;
};
