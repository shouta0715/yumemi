import { mockPrefectures } from "@/app/(apps)/_features/prefectures/mocks";
import {
  getAllPrefecturesParams,
  getPrefCodesFromSearchParams,
  getSelectedPrefectures,
  splitPrefecturesToRegions,
} from "@/app/(apps)/_features/prefectures/utils";

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

  describe("getSelectedPrefectures", () => {
    test("return selected prefectures", () => {
      const allPrefectures = [
        { prefCode: 13, prefName: "東京都" },
        { prefCode: 14, prefName: "神奈川県" },
      ];
      const selectedPrefCodes = ["13"];

      const result = getSelectedPrefectures(allPrefectures, selectedPrefCodes);

      expect(result).toEqual([{ prefCode: 13, prefName: "東京都" }]);
    });

    test("return empty array if not selected", () => {
      const allPrefectures = [
        { prefCode: 13, prefName: "東京都" },
        { prefCode: 14, prefName: "神奈川県" },
      ];
      const selectedPrefCodes = ["15"];

      const result = getSelectedPrefectures(allPrefectures, selectedPrefCodes);

      expect(result).toEqual([]);
    });
  });

  describe("splitPrefecturesToRegions", () => {
    test("return prefectures split by region", () => {
      const result = splitPrefecturesToRegions(mockPrefectures);

      expect(result).toStrictEqual([
        {
          label: "北海道・東北",
          prefectures: [
            { prefCode: 1, prefName: "北海道" },
            { prefCode: 2, prefName: "青森県" },
            { prefCode: 3, prefName: "岩手県" },
            { prefCode: 4, prefName: "宮城県" },
            { prefCode: 5, prefName: "秋田県" },
            { prefCode: 6, prefName: "山形県" },
            { prefCode: 7, prefName: "福島県" },
          ],
        },
        {
          label: "関東",
          prefectures: [
            { prefCode: 8, prefName: "茨城県" },
            { prefCode: 9, prefName: "栃木県" },
            { prefCode: 10, prefName: "群馬県" },
            { prefCode: 11, prefName: "埼玉県" },
            { prefCode: 12, prefName: "千葉県" },
            { prefCode: 13, prefName: "東京都" },
            { prefCode: 14, prefName: "神奈川県" },
          ],
        },
        {
          label: "中部",
          prefectures: [
            { prefCode: 15, prefName: "新潟県" },
            { prefCode: 16, prefName: "富山県" },
            { prefCode: 17, prefName: "石川県" },
            { prefCode: 18, prefName: "福井県" },
            { prefCode: 19, prefName: "山梨県" },
            { prefCode: 20, prefName: "長野県" },
            { prefCode: 21, prefName: "岐阜県" },
            { prefCode: 22, prefName: "静岡県" },
            {
              prefCode: 23,
              prefName: "愛知県",
            },
          ],
        },
        {
          label: "近畿",
          prefectures: [
            { prefCode: 24, prefName: "三重県" },
            { prefCode: 25, prefName: "滋賀県" },
            { prefCode: 26, prefName: "京都府" },
            { prefCode: 27, prefName: "大阪府" },
            { prefCode: 28, prefName: "兵庫県" },
            { prefCode: 29, prefName: "奈良県" },
            { prefCode: 30, prefName: "和歌山県" },
          ],
        },
        {
          label: "中国",
          prefectures: [
            { prefCode: 31, prefName: "鳥取県" },
            { prefCode: 32, prefName: "島根県" },
            { prefCode: 33, prefName: "岡山県" },
            { prefCode: 34, prefName: "広島県" },
            { prefCode: 35, prefName: "山口県" },
          ],
        },
        {
          label: "四国",
          prefectures: [
            { prefCode: 36, prefName: "徳島県" },
            { prefCode: 37, prefName: "香川県" },
            { prefCode: 38, prefName: "愛媛県" },
            { prefCode: 39, prefName: "高知県" },
          ],
        },
        {
          label: "九州・沖縄",
          prefectures: [
            { prefCode: 40, prefName: "福岡県" },
            { prefCode: 41, prefName: "佐賀県" },
            { prefCode: 42, prefName: "長崎県" },
            { prefCode: 43, prefName: "熊本県" },
            { prefCode: 44, prefName: "大分県" },
            { prefCode: 45, prefName: "宮崎県" },
            { prefCode: 46, prefName: "鹿児島県" },
            { prefCode: 47, prefName: "沖縄県" },
          ],
        },
      ]);
    });
  });

  describe("getAllPrefecturesParams", () => {
    test("return query string", () => {
      const prefectures = [
        { prefCode: 13, prefName: "東京都" },
        { prefCode: 14, prefName: "神奈川県" },
      ];

      const result = getAllPrefecturesParams(prefectures);

      expect(result).toBe("prefCode=13&prefCode=14");
    });

    test("allPrefectures", () => {
      const result = getAllPrefecturesParams(mockPrefectures);

      expect(result).toBe(
        "prefCode=1&prefCode=2&prefCode=3&prefCode=4&prefCode=5&prefCode=6&prefCode=7&prefCode=8&prefCode=9&prefCode=10&prefCode=11&prefCode=12&prefCode=13&prefCode=14&prefCode=15&prefCode=16&prefCode=17&prefCode=18&prefCode=19&prefCode=20&prefCode=21&prefCode=22&prefCode=23&prefCode=24&prefCode=25&prefCode=26&prefCode=27&prefCode=28&prefCode=29&prefCode=30&prefCode=31&prefCode=32&prefCode=33&prefCode=34&prefCode=35&prefCode=36&prefCode=37&prefCode=38&prefCode=39&prefCode=40&prefCode=41&prefCode=42&prefCode=43&prefCode=44&prefCode=45&prefCode=46&prefCode=47"
      );
    });
  });
});
