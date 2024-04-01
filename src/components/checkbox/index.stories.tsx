import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@/components/checkbox";

export default {
  component: Checkbox,
  title: "Components/checkbox",
  tags: ["autdocs"],
} satisfies Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const CheckedAndDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },
};
