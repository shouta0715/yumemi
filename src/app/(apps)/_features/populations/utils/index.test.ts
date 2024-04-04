import { mockFetchSelectedPopulationResponse } from "@/app/(apps)/_features/populations/mocks";
import {
  getLabelType,
  parsePopulationResponse,
} from "@/app/(apps)/_features/populations/utils";

describe("apps/populations/utils", () => {
  describe("getLabelType", () => {
    test("type is total", () => {
      const result = getLabelType("total");
      expect(result).toEqual("総人口");
    });

    test("type is young", () => {
      const result = getLabelType("young");
      expect(result).toEqual("年少人口");
    });

    test("type is productive", () => {
      const result = getLabelType("productive");
      expect(result).toEqual("生産年齢人口");
    });

    test("type is elderly", () => {
      const result = getLabelType("elderly");
      expect(result).toEqual("老年人口");
    });

    test("type is undefined", () => {
      const result = getLabelType(undefined);
      expect(result).toEqual("総人口");
    });

    test("type is null", () => {
      const result = getLabelType(null);
      expect(result).toEqual("総人口");
    });

    test("type is array", () => {
      const result = getLabelType(["total"]);
      expect(result).toEqual("総人口");
    });
  });

  describe("parsePopulationResponse", () => {
    test("young data is empty object", () => {
      const result = parsePopulationResponse([], "young");
      expect(result).toEqual({});
    });

    test("productive data is empty object", () => {
      const result = parsePopulationResponse([], "productive");
      expect(result).toEqual({});
    });

    test("elderly data is empty object", () => {
      const result = parsePopulationResponse([], "elderly");
      expect(result).toEqual({});
    });

    test("total data is empty object", () => {
      const result = parsePopulationResponse([], "total");
      expect(result).toEqual({});
    });

    test("get total data", () => {
      const result = parsePopulationResponse(
        mockFetchSelectedPopulationResponse,
        "total"
      );

      const mockKeys = mockFetchSelectedPopulationResponse.map((item) =>
        Number(item.prefCode)
      );

      Object.keys(result).forEach((key) => {
        mockKeys.includes(Number(key));
      });

      const totalDataList = mockFetchSelectedPopulationResponse.map((item) =>
        item.contents.find((content) => content.label === "総人口")
      );

      Object.values(result).forEach((value) => {
        totalDataList.every((totalData) => {
          return value === totalData?.data;
        });
      });
    });

    test("get young data", () => {
      const result = parsePopulationResponse(
        mockFetchSelectedPopulationResponse,
        "young"
      );

      const mockKeys = mockFetchSelectedPopulationResponse.map((item) =>
        Number(item.prefCode)
      );

      Object.keys(result).forEach((key) => {
        mockKeys.includes(Number(key));
      });

      const youngDataList = mockFetchSelectedPopulationResponse.map((item) =>
        item.contents.find((content) => content.label === "年少人口")
      );

      Object.values(result).forEach((value) => {
        youngDataList.every((youngData) => {
          return value === youngData?.data;
        });
      });
    });

    test("get productive data", () => {
      const result = parsePopulationResponse(
        mockFetchSelectedPopulationResponse,
        "productive"
      );

      const mockKeys = mockFetchSelectedPopulationResponse.map((item) =>
        Number(item.prefCode)
      );

      Object.keys(result).forEach((key) => {
        mockKeys.includes(Number(key));
      });

      const productiveDataList = mockFetchSelectedPopulationResponse.map(
        (item) =>
          item.contents.find((content) => content.label === "生産年齢人口")
      );

      Object.values(result).forEach((value) => {
        productiveDataList.every((productiveData) => {
          return value === productiveData?.data;
        });
      });
    });

    test("get elderly data", () => {
      const result = parsePopulationResponse(
        mockFetchSelectedPopulationResponse,
        "elderly"
      );

      const mockKeys = mockFetchSelectedPopulationResponse.map((item) =>
        Number(item.prefCode)
      );

      Object.keys(result).forEach((key) => {
        mockKeys.includes(Number(key));
      });

      const elderlyDataList = mockFetchSelectedPopulationResponse.map((item) =>
        item.contents.find((content) => content.label === "老年人口")
      );

      Object.values(result).forEach((value) => {
        elderlyDataList.every((elderlyData) => {
          return value === elderlyData?.data;
        });
      });
    });

    test("if not find Data", () => {
      const result = parsePopulationResponse(
        [
          {
            contents: [
              {
                label: "総人口",
                data: [],
              },
            ],
            prefCode: "13",
          },
        ],
        "young"
      );

      expect(result).toEqual({});
    });
  });
});
