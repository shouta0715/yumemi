import { Meta, StoryObj } from "@storybook/react";
import { Regions } from "@/app/(apps)/_features/prefectures/components/regions";
import { mockPrefectures } from "@/app/(apps)/_features/prefectures/mocks";
import { selectViewport } from "@/tests/storybook";

export default {
  component: Regions,
  title: "apps/prefectures/regions",
  tags: ["autodocs"],
  args: {
    prefectures: mockPrefectures,
  },
} satisfies Meta<typeof Regions>;

type Story = StoryObj<typeof Regions>;

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

export const NonSelected: Story = {
  args: {
    selectedLength: 0,
  },
};
