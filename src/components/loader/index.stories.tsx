import { Meta, StoryObj } from "@storybook/react";
import { Loader } from "@/components/loader";

export default {
  component: Loader,
  title: "Components/loader",
  tags: ["autdocs"],
} satisfies Meta<typeof Loader>;

type Story = StoryObj<typeof Loader>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    width: 16,
    height: 16,
  },
};
export const Medium: Story = {
  args: {
    width: 32,
    height: 32,
  },
};

export const Large: Story = {
  args: {
    width: 64,
    height: 64,
  },
};

export const ExtraLarge: Story = {
  args: {
    width: 128,
    height: 128,
  },
};
