import { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";
import PopulationCharts from "@/app/(apps)/_features/charts/components";
import {
  mockPopulationData,
  mockSelectedPopulationData,
} from "@/app/(apps)/_features/charts/components/mocks";

export default {
  component: PopulationCharts,
  title: "apps/populations/charts",
  tags: ["autdocs"],
  args: {
    data: mockPopulationData,
    selectedPrefecture: mockSelectedPopulationData,
  },
} satisfies Meta<typeof PopulationCharts>;

type Story = StoryObj<typeof PopulationCharts>;

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const chart = await canvas.findByRole("region");

    const line = chart.querySelector(".recharts-line") as HTMLElement;
    expect(line).toBeInTheDocument();
  },
};

export const Sp: Story = {
  parameters: {
    viewport: { defaultViewport: "sp" },
  },
};

export const Sm: Story = {
  parameters: {
    viewport: { defaultViewport: "sm" },
  },
};

export const Md: Story = {
  parameters: {
    viewport: { defaultViewport: "md" },
  },
};

export const Lg: Story = {
  parameters: {
    viewport: { defaultViewport: "lg" },
  },
};

export const Xl: Story = {
  parameters: {
    viewport: { defaultViewport: "xl" },
  },
};

export const Xxl: Story = {
  args: {
    data: mockPopulationData,
    selectedPrefecture: mockSelectedPopulationData,
  },
  parameters: {
    viewport: { defaultViewport: "xxl" },
  },
};
