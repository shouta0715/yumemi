import { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";
import PopulationCharts from "@/app/(apps)/_features/charts/components";
import {
  mockPopulationData,
  mockSelectedPopulationData,
} from "@/app/(apps)/_features/charts/components/mocks";
import { selectViewport } from "@/tests/storybook";

export default {
  component: PopulationCharts,
  title: "apps/charts",
  tags: ["autodocs"],
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
    viewport: selectViewport("sp"),
  },
};

export const Sm: Story = {
  parameters: {
    viewport: selectViewport("sm"),
  },
};

export const Md: Story = {
  parameters: {
    viewport: selectViewport("md"),
  },
};

export const Lg: Story = {
  parameters: {
    viewport: selectViewport("lg"),
  },
};

export const Xl: Story = {
  parameters: {
    viewport: selectViewport("xl"),
  },
};

export const Xxl: Story = {
  parameters: {
    viewport: selectViewport("2xl"),
  },
};
