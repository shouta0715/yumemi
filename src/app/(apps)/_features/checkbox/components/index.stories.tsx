import { Meta, StoryObj } from "@storybook/react";

import { expect, userEvent, within } from "@storybook/test";
import { PrefectureCheckbox } from "@/app/(apps)/_features/checkbox/components";

export default {
  component: PrefectureCheckbox,
  title: "apps/prefectures/checkbox",
  tags: ["autdocs"],
} satisfies Meta<typeof PrefectureCheckbox>;

type Story = StoryObj<typeof PrefectureCheckbox>;

export const Default: Story = {
  args: {
    prefecture: {
      prefCode: 13,
      prefName: "東京都",
    },
  },
};

export const Checked: Story = {
  parameters: {
    nextjs: {
      navigation: {
        pathname: "/",
        query: {
          prefCode: "13",
        },
      },
    },
  },

  args: {
    prefecture: {
      prefCode: 13,
      prefName: "東京都",
    },
  },

  play: async ({ canvasElement, parameters }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");

    expect(checkbox).toBeChecked();

    await userEvent.click(checkbox);

    await expect(parameters.nextjs.navigation.push).toBeCalledTimes(1);

    expect(checkbox).not.toBeChecked();
  },
};

export const NotChecked: Story = {
  args: {
    prefecture: {
      prefCode: 13,
      prefName: "東京都",
    },
  },

  play: async ({ canvasElement, parameters }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();

    await userEvent.click(checkbox);

    await expect(parameters.nextjs.navigation.push).toHaveBeenCalledWith(
      "/?prefCode=13"
    );

    expect(checkbox).toBeChecked();
  },
};
