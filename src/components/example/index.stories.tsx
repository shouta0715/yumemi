// TODO: if create other test files, remove this file
import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect, fn, waitFor } from "@storybook/test";
import { Example } from "@/components/example";

export default {
  component: Example,
  title: "Components/Example",
} satisfies Meta<typeof Example>;

type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    children: "Example",
    onClick: fn(),
  },
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole("button"));

    await step("Click the button", async () => {
      await userEvent.click(canvas.getByRole("button"));
    });

    await waitFor(() => expect(args.onClick).toHaveBeenCalled());
  },
};
