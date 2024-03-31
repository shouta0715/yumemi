import { Meta, StoryObj } from "@storybook/react";
import { AppLayout } from "@/app/layouts";

export default {
  component: AppLayout,
  title: "layouts/app-layout",
  tags: ["autodocs"],
  args: {
    children:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero laboriosam dolorum, officiis quam perferendis voluptas magnam dolores, recusandae repellendus quos eos placeat, quae consectetur voluptates ipsam? Hic repellendus at veniam?",
  },
} satisfies Meta<typeof AppLayout>;

type Story = StoryObj<typeof AppLayout>;

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
    viewport: { defaultViewport: "2xl" },
  },
};
