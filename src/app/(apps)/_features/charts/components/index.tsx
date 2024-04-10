/* eslint-disable react/no-unstable-nested-components */

"use client";

import React from "react";
import styles from "./index.module.scss";
import { Legend } from "@/app/(apps)/_features/charts/components/legend";
import { ToolTip } from "@/app/(apps)/_features/charts/components/tooltip";
import {
  QueryLabelType,
  ViewPopulation,
} from "@/app/(apps)/_features/populations/types";
import { getLabelType } from "@/app/(apps)/_features/populations/utils";
import {
  ChartGrid,
  ChartLegend,
  ChartLine,
  ChartTooltip,
  ChartXAxis,
  ChartYAxis,
  LineChart,
  ResponsiveChartContainer,
} from "@/components/ui/recharts";
import { Prefecture } from "@/libs/types/api/prefectures";

type PopulationListProps = {
  data: ViewPopulation;
  selectedPrefecture: Prefecture[];
  type: QueryLabelType;
};

function PopulationCharts({
  data,
  selectedPrefecture,
  type,
}: PopulationListProps) {
  return (
    <div>
      <ResponsiveChartContainer height={600} width="100%">
        <LineChart
          margin={{
            bottom: 20,
            right: 20,
            left: 20,
            top: 20,
          }}
        >
          <ChartGrid strokeDasharray="3 3" />
          <ChartXAxis
            allowDuplicatedCategory={false}
            className={styles.charts__xAxis}
            dataKey="year"
            domain={[1980, 2045]}
            label={{
              value: "年度",
              position: "right",
              dx: -20,
              dy: 20,
              fontSize: 13,
            }}
            tick={{
              fontSize: 14,
            }}
            tickCount={18}
            type="number"
          />
          <ChartYAxis
            className={styles.charts__yAxis}
            fontSize={14}
            label={{
              value: `${getLabelType(type)}`,
              position: "insideTopLeft",
              dy: -30,
              dx: -20,
              fontSize: 13,
            }}
            tickFormatter={(value: number) => value.toLocaleString()}
          />
          <ChartTooltip
            content={({ active, payload, label }) => {
              if (!active || !payload) return null;

              return <ToolTip label={label} payload={payload} type={type} />;
            }}
            formatter={(value: number) => {
              return `${value.toLocaleString()} 人`;
            }}
            labelFormatter={(label: number) => {
              return `${label} 年`;
            }}
            position={{ y: 20 }}
            wrapperStyle={{
              maxHeight: "200px",
              overflowY: "auto",
              pointerEvents: "auto",
              backgroundColor: "var(--background)",
              left: "-10px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
            }}
          />
          <ChartLegend
            content={({ payload }) => {
              if (!payload) return null;

              return <Legend payload={payload} />;
            }}
            verticalAlign="top"
          />
          {selectedPrefecture.map((prefecture) => {
            const population = data[prefecture.prefCode];

            return (
              <ChartLine
                key={prefecture.prefCode}
                activeDot={{
                  r: 6,
                }}
                data={population}
                dataKey="value"
                name={prefecture.prefName}
                stroke={`hsl(${(prefecture.prefCode * 19) % 360}deg, 60%, 60%)`}
                type="monotone"
              />
            );
          })}
        </LineChart>
      </ResponsiveChartContainer>
    </div>
  );
}

export default PopulationCharts;
