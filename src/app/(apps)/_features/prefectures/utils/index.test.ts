import { getPrefCodesFromSearchParams } from "@/app/(apps)/_features/prefectures/utils";

describe("apps/prefectures/utils", () => {
  describe("getPrefCodesFromSearchParams", () => {
    test("searchParams.prefCode is string", () => {
      const searchParams = { prefCode: "13" };
      const result = getPrefCodesFromSearchParams(searchParams);
      expect(result).toEqual(["13"]);
    });

    test("if number string over 47, return empty array", () => {
      const searchParams = { prefCode: "48" };
      const result = getPrefCodesFromSearchParams(searchParams);
      expect(result).toEqual([]);
    });

    test("if number string under 1, return empty array", () => {
      const searchParams = { prefCode: "0" };
      const result = getPrefCodesFromSearchParams(searchParams);
      expect(result).toEqual([]);
    });

    test("if not number string, return empty array", () => {
      const searchParams = { prefCode: "a" };
      const result = getPrefCodesFromSearchParams(searchParams);
      expect(result).toEqual([]);
    });

    test("searchParams.prefCode is array", () => {
      const searchParams = { prefCode: ["13"] };
      const result = getPrefCodesFromSearchParams(searchParams);
      expect(result).toEqual(["13"]);
    });

    test("searchParams.prefCode is undefined", () => {
      const searchParams = { prefCode: undefined };
      const result = getPrefCodesFromSearchParams(searchParams);
      expect(result).toEqual([]);
    });

    test("if include number string over 47, return removed over 47", () => {
      const searchParams = { prefCode: ["13", "48"] };
      const result = getPrefCodesFromSearchParams(searchParams);
      expect(result).toEqual(["13"]);
    });

    test("if include not number string, return removed not number", () => {
      const searchParams = { prefCode: ["13", "a"] };
      const result = getPrefCodesFromSearchParams(searchParams);
      expect(result).toEqual(["13"]);
    });

    test("if include number string under 1, return removed under 1", () => {
      const searchParams = { prefCode: ["13", "0", "-10"] };

      const result = getPrefCodesFromSearchParams(searchParams);

      expect(result).toEqual(["13"]);
    });

    test("if not prefCode, return empty array", () => {
      const searchParams = { prefCode: [] };
      const result = getPrefCodesFromSearchParams(searchParams);
      expect(result).toEqual([]);

      const searchParams2 = {};

      const result2 = getPrefCodesFromSearchParams(searchParams2);

      expect(result2).toEqual([]);
    });
  });
});
