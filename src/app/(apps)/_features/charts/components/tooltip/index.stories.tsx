import { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";
import { ToolTip } from "@/app/(apps)/_features/charts/components/tooltip";
import { mockTooltipData } from "@/tests/mocks/charts/tooltip";

import { selectViewport } from "@/tests/storybook";

export default {
  component: ToolTip,
  title: "apps/charts/tooltip",
  tags: ["autodocs"],
  args: {
    label: "2024",
    type: "total",
    payload: mockTooltipData,
  },
  parameters: {
    a11y: {
      config: {
        rules: [{ id: "scrollable-region-focusable", enabled: false }],
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          maxHeight: "200px",
          overflowY: "auto",
          pointerEvents: "auto",
          backgroundColor: "var(--background)",
          left: "-10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.15)",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ToolTip>;

type Story = StoryObj<typeof ToolTip>;

export const Default: Story = {
  args: {
    payload: mockTooltipData,
    label: "2024",
    type: "total",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tooltip = canvas.getByRole("tooltip");
    expect(tooltip).toBeInTheDocument();
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

export const BigData: Story = {
  args: {
    payload: Array.from({ length: 1000 }, (_, i) => ({
      name: `${i}`,
      stroke: `hsl(${(i * 360) % 360}deg, 60%, 60%)`,
      strokeWidth: 1,
      dataKey: "value",
      color: `hsl(${(i * 360) % 360}deg, 60%, 60%)`,
      value: 5420480,
      payload: {
        year: 1980,
        value: 5420480,
      },
      hide: false,
    })),
  },
};

export const Total: Story = {
  args: {
    type: "total",
  },
};

export const Young: Story = {
  args: {
    type: "young",
  },
};

export const Elderly: Story = {
  args: {
    type: "elderly",
  },
};

export const Productive: Story = {
  args: {
    type: "productive",
  },
};
