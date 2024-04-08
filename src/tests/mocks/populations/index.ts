import { FetchSelectedPopulationResponse } from "@/app/(apps)/_features/populations/types";
import { Population } from "@/libs/types/api/populations";

const mockPopulation: Population[] = [
  {
    year: 1960,
    value: 100,
  },
  {
    year: 1970,
    value: 200,
  },
  {
    year: 1980,
    value: 300,
  },
  {
    year: 1990,
    value: 400,
  },
  {
    year: 2000,
    value: 500,
  },
  {
    year: 2010,
    value: 600,
  },
  {
    year: 2020,
    value: 700,
  },
  {
    year: 2030,
    value: 800,
  },
  {
    year: 2040,
    value: 900,
  },
  {
    year: 2050,
    value: 1000,
  },
];

export const mockFetchSelectedPopulationResponse: FetchSelectedPopulationResponse[] =
  [
    {
      contents: [
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
      prefCode: "13",
    },
    {
      contents: [
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
      prefCode: "46",
    },
    {
      contents: [
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
      prefCode: "27",
    },
  ];
