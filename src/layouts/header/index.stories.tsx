import { Meta, StoryObj } from "@storybook/react";
import { Header } from "@/layouts/header";

export default {
  component: Header,
  title: "layouts/header",
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {},
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
  parameters: {
    viewport: { defaultViewport: "2xl" },
  },
};
