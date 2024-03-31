import { Meta, StoryObj } from "@storybook/react";
import { Logo } from "@/components/logo";

export default {
  component: Logo,
  title: "components/logo",
  args: {
    width: 64,
    height: 64,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Logo>;

type Story = StoryObj<typeof Logo>;

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
