import { Meta, StoryObj } from "@storybook/react";
import { ChartLoader } from "@/app/(apps)/_features/charts/components/loader";

export default {
  component: ChartLoader,
  title: "apps/populations/charts/loader",
  tags: ["autdocs"],
} satisfies Meta<typeof ChartLoader>;

type Story = StoryObj<typeof ChartLoader>;

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
