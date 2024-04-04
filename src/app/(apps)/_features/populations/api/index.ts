import "server-only";
import { cache } from "react";
import { getEnv } from "@/libs/constant/env";
import { HttpError, getErrorStatus } from "@/libs/errors";
import { get } from "@/libs/fetch";
import { FetchPopulationResponse } from "@/libs/types/api/populations";

export const fetchPopulation = async (prefCode: string) => {
  const url = new URL(`${getEnv("URL")}/api/v1/population/composition/perYear`);

  url.searchParams.set("prefCode", String(prefCode));

  const response = await get<FetchPopulationResponse>(url.toString(), {
    headers: {
      "X-API-KEY": getEnv("KEY"),
    },
    requestInit: {
      cache: "force-cache",
    },
  });

  if ("statusCode" in response) {
    const status = getErrorStatus(Number(response.statusCode));
    const error = new HttpError(status, response.message);

    throw error;
  }

  return {
    ...response.result,
    prefCode,
  };
};

export const fetchSelectedPopulation = cache(async (prefCodes: string[]) => {
  return Promise.all(
    prefCodes.map(async (prefCode) => {
      const result = await fetchPopulation(prefCode);

      return {
        contents: result.data,
        prefCode,
      };
    })
  );
});
