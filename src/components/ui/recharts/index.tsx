"use client";

import React from "react";
import {
  ResponsiveContainer,
  LineChart as RechartsLineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
  Legend,
} from "recharts";

const ResponsiveChartContainer = ResponsiveContainer;

const LineChart = React.forwardRef<
  React.ElementRef<typeof RechartsLineChart>,
  React.ComponentProps<typeof RechartsLineChart>
>((props, ref) => {
  return <RechartsLineChart {...props} ref={ref} />;
});

LineChart.displayName = "LineChart";

const ChartGrid = CartesianGrid;

const ChartXAxis = XAxis;

const ChartYAxis = YAxis;

const ChartTooltip = Tooltip;

const ChartLegend = Legend;

const ChartLine = Line;

export {
  ResponsiveChartContainer,
  LineChart,
  ChartXAxis,
  ChartYAxis,
  ChartGrid,
  ChartTooltip,
  ChartLegend,
  ChartLine,
};
