import { Meta, StoryObj } from "@storybook/react";
import { EmptyCharts } from "@/app/(apps)/_features/populations/components/empty";

import { selectViewport } from "@/tests/storybook";

export default {
  component: EmptyCharts,
  title: "apps/populations/empty",
  tags: ["autodocs"],
} satisfies Meta<typeof EmptyCharts>;

type Story = StoryObj<typeof EmptyCharts>;

export const Default: Story = {};

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
