import { Meta, StoryObj } from "@storybook/react";
import NotFound from "@/app/not-found";

export default {
  title: "layouts/not-found",
  component: NotFound,
  tags: ["autodocs"],
} satisfies Meta<typeof NotFound>;

type Story = StoryObj<typeof NotFound>;

export const Default: Story = {
  args: {},
};
