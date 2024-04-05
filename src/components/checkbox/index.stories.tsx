import { Meta, StoryObj } from "@storybook/react";
import { within, expect, userEvent } from "@storybook/test";
import { Checkbox } from "@/components/checkbox";

export default {
  component: Checkbox,
  title: "Components/checkbox",
  tags: ["autodocs"],
  parameters: {
    a11y: {
      config: {
        rules: [{ id: "label", enabled: false }],
      },
    },
  },
} satisfies Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const checkbox = canvas.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);

    expect(checkbox).toBeChecked();

    await userEvent.click(checkbox);

    expect(checkbox).not.toBeChecked();
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const checkbox = canvas.getByRole("checkbox");

    expect(checkbox).toBeChecked();
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const checkbox = canvas.getByRole("checkbox");

    expect(checkbox).toBeDisabled();
  },
};

export const CheckedAndDisabled: Story = {
  args: {
    checked: true,
    disabled: true,
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const checkbox = canvas.getByRole("checkbox");

    expect(checkbox).toBeChecked();
    expect(checkbox).toBeDisabled();
  },
};
