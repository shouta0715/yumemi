import { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";
import { Legend } from "@/app/(apps)/_features/charts/components/legend";
import { mockLegendData } from "@/app/(apps)/_features/charts/components/legend/mocks";

export default {
  component: Legend,
  title: "apps/populations/charts/legend",
  tags: ["autdocs"],
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
    viewport: { defaultViewport: "sp" },
  },
};

export const Sm: Story = {
  args: {
    payload: mockLegendData,
  },
  parameters: {
    viewport: { defaultViewport: "sm" },
  },
};

export const Md: Story = {
  args: {
    payload: mockLegendData,
  },
  parameters: {
    viewport: { defaultViewport: "md" },
  },
};

export const Lg: Story = {
  args: {
    payload: mockLegendData,
  },
  parameters: {
    viewport: { defaultViewport: "lg" },
  },
};

export const Xl: Story = {
  args: {
    payload: mockLegendData,
  },
  parameters: {
    viewport: { defaultViewport: "xl" },
  },
};

export const Xxl: Story = {
  args: {
    payload: mockLegendData,
  },
  parameters: {
    viewport: { defaultViewport: "xxl" },
  },
};

export const BigData: Story = {
  args: {
    payload: Array.from({ length: 100 }, (_, i) => ({
      inactive: false,
      dataKey: "value",
      type: "line",
      color: `hsl(${(i * 360) % 360}deg, 60%, 60%)`,
      value: `県${i}`,
    })),
  },
};
