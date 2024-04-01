import { getPrefCodeFromSearchParam } from "@/app/(apps)/_features/prefectures/utils";

describe("apps/prefectures/utils", () => {
  describe("getPrefCodeFromSearchParam", () => {
    test("searchParams.prefCodes is string", () => {
      const searchParams = { prefCodes: "13" };
      const result = getPrefCodeFromSearchParam(searchParams);
      expect(result).toEqual(["13"]);
    });

    test("if number string over 47, return empty array", () => {
      const searchParams = { prefCodes: "48" };
      const result = getPrefCodeFromSearchParam(searchParams);
      expect(result).toEqual([]);
    });

    test("if number string under 1, return empty array", () => {
      const searchParams = { prefCodes: "0" };
      const result = getPrefCodeFromSearchParam(searchParams);
      expect(result).toEqual([]);
    });

    test("if not number string, return empty array", () => {
      const searchParams = { prefCodes: "a" };
      const result = getPrefCodeFromSearchParam(searchParams);
      expect(result).toEqual([]);
    });

    test("searchParams.prefCodes is array", () => {
      const searchParams = { prefCodes: ["13"] };
      const result = getPrefCodeFromSearchParam(searchParams);
      expect(result).toEqual(["13"]);
    });

    test("searchParams.prefCodes is undefined", () => {
      const searchParams = { prefCodes: undefined };
      const result = getPrefCodeFromSearchParam(searchParams);
      expect(result).toEqual([]);
    });

    test("if include number string over 47, return removed over 47", () => {
      const searchParams = { prefCodes: ["13", "48"] };
      const result = getPrefCodeFromSearchParam(searchParams);
      expect(result).toEqual(["13"]);
    });

    test("if include not number string, return removed not number", () => {
      const searchParams = { prefCodes: ["13", "a"] };
      const result = getPrefCodeFromSearchParam(searchParams);
      expect(result).toEqual(["13"]);
    });

    test("if include number string under 1, return removed under 1", () => {
      const searchParams = { prefCodes: ["13", "0", "-10"] };

      const result = getPrefCodeFromSearchParam(searchParams);

      expect(result).toEqual(["13"]);
    });

    test("if not prefCodes, return empty array", () => {
      const searchParams = { prefCodes: [] };
      const result = getPrefCodeFromSearchParam(searchParams);
      expect(result).toEqual([]);

      const searchParams2 = {};

      const result2 = getPrefCodeFromSearchParam(searchParams2);

      expect(result2).toEqual([]);
    });
  });
});
