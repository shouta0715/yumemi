import {
  RequestHandler,
  rest,
} from "next/experimental/testmode/playwright/msw";
import { getTestEnv } from "../../env";
import {
  FetchPopulationResponse,
  PopulationResult,
} from "@/libs/types/api/populations";
import { mockPopulation } from "@/tests/mocks/populations";

type MockPopulationParams = {
  status?: number;
  delay?: number;
};

const errorResponse = {
  statusCode: 403,
  message: "Forbidden",
  description: "You don't have permission to access this resource.",
};

const generateMockResponse = (): FetchPopulationResponse => {
  const result: PopulationResult = {
    boundaryYear: 2020,
    data: [
      {
        label: "総人口",
        data: mockPopulation,
      },
      {
        label: "年少人口",
        data: mockPopulation,
      },
      {
        label: "生産年齢人口",
        data: mockPopulation,
      },
      {
        label: "老年人口",
        data: mockPopulation,
      },
    ],
  };

  return { message: "Success", result };
};

export const mockPopulationHandler: (
  params?: MockPopulationParams
) => RequestHandler = (params) => {
  return rest.get(
    `${getTestEnv("URL")}/api/v1/population/composition/perYear`,
    (_, res, ctx) => {
      const { status = 200, delay = 0 } = params ?? {};

      if (status >= 503) {
        return res.networkError("Failed to connect");
      }

      const data = status >= 400 ? errorResponse : generateMockResponse();

      return res(
        ctx.status(status),
        ctx.delay(delay),
        ctx.json<FetchPopulationResponse>(data)
      );
    }
  );
};
