import { Meta, StoryObj } from "@storybook/react";
import { within, expect, userEvent, screen } from "@storybook/test";
import { Prefectures } from "@/app/(apps)/_features/prefectures/components";
import { mockPrefectures } from "@/app/(apps)/_features/prefectures/mocks";

import { selectViewport } from "@/tests/storybook";

export default {
  component: Prefectures,
  title: "apps/prefectures",
  tags: ["autodocs"],
  args: {
    prefectures: mockPrefectures,
  },
} satisfies Meta<typeof Prefectures>;

type Story = StoryObj<typeof Prefectures>;

export const Default: Story = {
  args: {},
  play: async ({ canvasElement, parameters }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole("button", { name: "都道府県の選択" });

    await userEvent.click(button);

    const popover = screen.getByRole("dialog");

    expect(popover).toBeInTheDocument();

    const checkboxes = screen.getAllByRole("checkbox");

    expect(checkboxes).toHaveLength(47);

    checkboxes.forEach((checkbox) => {
      expect(checkbox).not.toBeChecked();
    });

    const clickHandlers = checkboxes.map(async (checkbox) => {
      return userEvent.click(checkbox);
    });

    await Promise.all(clickHandlers);

    expect(checkboxes).toHaveLength(47);

    checkboxes.forEach((checkbox) => {
      expect(checkbox).toBeChecked();
    });

    await expect(parameters.nextjs.navigation.push).toBeCalledTimes(47);
  },
};

export const Sp: Story = {
  parameters: {
    viewport: selectViewport("sp"),
  },
};

export const Sm: Story = {
  parameters: {
    viewport: selectViewport("sm"),
  },
};

export const Md: Story = {
  parameters: {
    viewport: selectViewport("md"),
  },
};

export const Lg: Story = {
  parameters: {
    viewport: selectViewport("lg"),
  },
};

export const Xl: Story = {
  parameters: {
    viewport: selectViewport("xl"),
  },
};

export const Xxl: Story = {
  parameters: {
    viewport: { defaultViewport: "2xl" },
  },
};

export const WithSearchParam: Story = {
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

  play: async ({ canvasElement, parameters }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole("button", { name: "都道府県の選択" });

    await userEvent.click(button);

    const popover = screen.getByRole("dialog");

    expect(popover).toBeInTheDocument();

    const checkbox = screen.getByRole("checkbox", { name: "東京都" });

    expect(checkbox).toBeChecked();

    await userEvent.click(checkbox);

    await expect(parameters.nextjs.navigation.push).toBeCalledTimes(1);

    expect(checkbox).not.toBeChecked();
  },
};

export const NonSelected: Story = {
  args: {
    selectedLength: 0,
  },
};
