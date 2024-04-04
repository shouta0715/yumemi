import { Meta, StoryObj } from "@storybook/react";
import { within, expect, userEvent } from "@storybook/test";
import { Prefectures } from "@/app/(apps)/_features/prefectures/components";
import { mockPrefectures } from "@/app/(apps)/_features/prefectures/mocks";

export default {
  component: Prefectures,
  title: "apps/prefectures/prefectures",
  tags: ["autdocs"],
  args: {
    prefectures: mockPrefectures,
  },
} satisfies Meta<typeof Prefectures>;

type Story = StoryObj<typeof Prefectures>;

export const Default: Story = {
  args: {},
  parameters: {
    viewport: { defaultViewport: "md" },
  },

  play: async ({ canvasElement, parameters }) => {
    const canvas = within(canvasElement);

    const checkboxes = canvas.getAllByRole("checkbox");

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
    const checkbox = canvas.getByRole("checkbox", { name: "東京都" });

    expect(checkbox).toBeChecked();

    await userEvent.click(checkbox);

    await expect(parameters.nextjs.navigation.push).toBeCalledTimes(1);

    expect(checkbox).not.toBeChecked();
  },
};
