import { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";
import { Legend } from "@/app/(apps)/_features/charts/components/legend";
import { mockLegendData } from "@/app/(apps)/_features/charts/components/legend/mocks";

import { selectViewport } from "@/tests/storybook";

export default {
  component: Legend,
  title: "apps/charts/legend",
  tags: ["autodocs"],
} satisfies Meta<typeof Legend>;

type Story = StoryObj<typeof Legend>;

export const Default: Story = {
  args: {
    payload: mockLegendData,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const legend = canvas.getByRole("list");

    expect(legend).toBeInTheDocument();
  },
};

export const Sp: Story = {
  args: {
    payload: mockLegendData,
  },
  parameters: {
    viewport: selectViewport("sp"),
  },
};

export const Sm: Story = {
  args: {
    payload: mockLegendData,
  },
  parameters: {
    viewport: selectViewport("sm"),
  },
};

export const Md: Story = {
  args: {
    payload: mockLegendData,
  },
  parameters: selectViewport("md"),
};

export const Lg: Story = {
  args: {
    payload: mockLegendData,
  },
  parameters: {
    viewport: selectViewport("lg"),
  },
};

export const Xl: Story = {
  args: {
    payload: mockLegendData,
  },
  parameters: {
    viewport: selectViewport("xl"),
  },
};

export const Xxl: Story = {
  args: {
    payload: mockLegendData,
  },
  parameters: {
    viewport: selectViewport("2xl"),
  },
};

export const BigData: Story = {
  args: {
    payload: Array.from({ length: 100 }, (_, i) => ({
      inactive: false,
      dataKey: "value",
      type: "line",
      color: `hsl(${i % 360}deg, 60%, 60%)`,
      value: `県${i}`,
    })),
  },
};
