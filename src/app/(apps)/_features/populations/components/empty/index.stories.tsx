import { Meta, StoryObj } from "@storybook/react";
import { EmptyCharts } from "@/app/(apps)/_features/populations/components/empty";

export default {
  component: EmptyCharts,
  title: "apps/populations/empty",
  tags: ["autdocs"],
} satisfies Meta<typeof EmptyCharts>;

type Story = StoryObj<typeof EmptyCharts>;

export const Default: Story = {};

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
  parameters: {
    viewport: { defaultViewport: "xxl" },
  },
};
