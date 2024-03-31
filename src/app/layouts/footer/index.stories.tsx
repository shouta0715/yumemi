import { Meta, StoryObj } from "@storybook/react";
import { Footer } from "@/app/layouts/footer";

export default {
  title: "layouts/footer",
  component: Footer,
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {},
};

export const Sp: Story = {
  parameters: {
    viewport: {
      defaultViewport: "sp",
    },
  },
};

export const Sm: Story = {
  parameters: {
    viewport: {
      defaultViewport: "sm",
    },
  },
};

export const Md: Story = {
  parameters: {
    viewport: {
      defaultViewport: "md",
    },
  },
};

export const Lg: Story = {
  parameters: {
    viewport: {
      defaultViewport: "lg",
    },
  },
};

export const Xl: Story = {
  parameters: {
    viewport: {
      defaultViewport: "xl",
    },
  },
};

export const Xxl: Story = {
  parameters: {
    viewport: {
      defaultViewport: "xxl",
    },
  },
};
