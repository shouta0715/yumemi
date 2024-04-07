import { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import { BatchTogglePrefectures } from "@/app/(apps)/_features/prefectures/components/batch-toggle";
import { mockPrefectures } from "@/app/(apps)/_features/prefectures/mocks";

export default {
  component: BatchTogglePrefectures,
  title: "apps/prefectures/batch-toggle",
} satisfies Meta<typeof BatchTogglePrefectures>;

type Story = StoryObj<typeof BatchTogglePrefectures>;

export const Default: Story = {
  args: {
    prefectures: mockPrefectures,
    type: "total",
  },

  play: async ({ canvasElement, parameters }) => {
    const canvas = within(canvasElement);

    const resetButton = canvas.getByRole("link", { name: "リセット" });

    await userEvent.click(resetButton);

    expect(parameters.nextjs.navigation.push).toHaveBeenCalled();

    const allButton = canvas.getByRole("link", { name: "すべて選択" });

    await userEvent.click(allButton);

    expect(parameters.nextjs.navigation.push).toHaveBeenCalled();
  },
};
