import { Meta, StoryObj } from "@storybook/react";
import { ChartLoader } from "@/app/(apps)/_features/charts/components/loader";
import { selectViewport } from "@/tests/storybook";

export default {
  component: ChartLoader,
  title: "apps/charts/loader",
  tags: ["autodocs"],
} satisfies Meta<typeof ChartLoader>;

type Story = StoryObj<typeof ChartLoader>;

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
