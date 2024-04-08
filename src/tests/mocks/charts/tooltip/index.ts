import {
  NameType,
  Payload,
} from "recharts/types/component/DefaultTooltipContent";

export const mockTooltipData: Payload<number, NameType>[] = [
  {
    name: "埼玉県",
    stroke: "hsl(209deg, 60%, 60%)",
    strokeWidth: 1,
    dataKey: "value",
    color: "hsl(209deg, 60%, 60%)",
    value: 5420480,
    payload: {
      year: 1980,
      value: 5420480,
    },
    hide: false,
  },
  {
    name: "青森県",
    stroke: "hsl(38deg, 60%, 60%)",
    strokeWidth: 1,
    dataKey: "value",
    color: "hsl(38deg, 60%, 60%)",
    value: 1523907,
    payload: {
      year: 1980,
      value: 1523907,
    },
    hide: false,
  },
  {
    name: "岩手県",
    stroke: "hsl(57deg, 60%, 60%)",
    strokeWidth: 1,

    dataKey: "value",
    color: "hsl(57deg, 60%, 60%)",
    value: 1421927,
    payload: {
      year: 1980,
      value: 1421927,
    },
    hide: false,
  },
  {
    name: "大分県",
    stroke: "hsl(116deg, 60%, 60%)",
    strokeWidth: 1,
    dataKey: "value",
    color: "hsl(116deg, 60%, 60%)",
    value: 1228913,
    payload: {
      year: 1980,
      value: 1228913,
    },
    hide: false,
  },
];
