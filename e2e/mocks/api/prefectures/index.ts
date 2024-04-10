import {
  RequestHandler,
  rest,
} from "next/experimental/testmode/playwright/msw";
import { getTestEnv } from "../../env";
import { FetchPrefecturesResponse } from "@/libs/types/api/prefectures";
import { mockPrefectures } from "@/tests/mocks/prefectures";

type MockPrefecturesHandlerParams = {
  status?: number;
  delay?: number;
  response?: FetchPrefecturesResponse;
};

const basicResponse = {
  message: null,
  result: mockPrefectures,
};

const errorResponse = {
  statusCode: 403,
  message: "Forbidden",
  description: "You don't have permission to access this resource.",
};

export const mockPrefecturesHandler: (
  params?: MockPrefecturesHandlerParams
) => RequestHandler = (params) => {
  return rest.get(`${getTestEnv("URL")}/api/v1/prefectures`, (_, res, ctx) => {
    const { status = 200, delay = 0, response = basicResponse } = params ?? {};

    if (status >= 503) {
      return res.networkError("Failed to connect");
    }

    const data = status >= 400 ? errorResponse : response;

    return res(
      ctx.status(status),
      ctx.delay(delay),
      ctx.json<FetchPrefecturesResponse>(data)
    );
  });
};
