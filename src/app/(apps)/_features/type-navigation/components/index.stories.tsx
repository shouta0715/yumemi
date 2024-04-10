import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, expect, screen, waitFor } from "@storybook/test";
import { TypeNavigation } from "@/app/(apps)/_features/type-navigation/components";

import { selectViewport } from "@/tests/storybook";

export default {
  component: TypeNavigation,
  title: "apps/type-navigation",
  tags: ["autodocs"],
  args: {
    selectedType: "total",
  },
} satisfies Meta<typeof TypeNavigation>;

type Story = StoryObj<typeof TypeNavigation>;

export const Default: Story = {
  args: {
    selectedType: "total",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);

    const popover = screen.getByRole("dialog");

    expect(popover).toBeInTheDocument();

    const items = screen.getAllByRole("link");

    expect(items).toHaveLength(4);

    const total = screen.getByRole("link", { name: "総人口" });

    expect(total).toHaveAttribute("aria-current", "page");

    const close = screen.getByRole("button", { name: "閉じる" });

    await userEvent.click(close);

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
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
    viewport: selectViewport("2xl"),
  },
};

export const Total: Story = {
  args: {
    selectedType: "total",
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);

    const popover = screen.getByRole("dialog");

    expect(popover).toBeInTheDocument();

    const items = screen.getAllByRole("link");

    expect(items).toHaveLength(4);

    const total = screen.getByRole("link", { name: "総人口" });

    expect(total).toHaveAttribute("aria-current", "page");
  },
};

export const Young: Story = {
  args: {
    selectedType: "young",
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);

    const popover = screen.getByRole("dialog");

    expect(popover).toBeInTheDocument();

    const items = screen.getAllByRole("link");

    expect(items).toHaveLength(4);

    const young = screen.getByRole("link", { name: "年少人口" });

    expect(young).toHaveAttribute("aria-current", "page");
  },
};

export const Productive: Story = {
  args: {
    selectedType: "productive",
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);

    const popover = screen.getByRole("dialog");

    expect(popover).toBeInTheDocument();

    const items = screen.getAllByRole("link");

    expect(items).toHaveLength(4);

    const productive = screen.getByRole("link", { name: "生産年齢人口" });

    expect(productive).toHaveAttribute("aria-current", "page");
  },
};

export const Elderly: Story = {
  args: {
    selectedType: "elderly",
  },

  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    await userEvent.click(button);

    const popover = screen.getByRole("dialog");

    expect(popover).toBeInTheDocument();

    const items = screen.getAllByRole("link");

    expect(items).toHaveLength(4);

    const elderly = screen.getByRole("link", { name: "老年人口" });

    expect(elderly).toHaveAttribute("aria-current", "page");
  },
};
