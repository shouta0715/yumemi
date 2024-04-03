import { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";
import { ToolTip } from "@/app/(apps)/_features/charts/components/tooltip";
import { mockTooltipData } from "@/app/(apps)/_features/charts/components/tooltip/mocks";

export default {
  component: ToolTip,
  title: "apps/populations/charts/tooltip",
  tags: ["autdocs"],
  args: {
    label: "2024",
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
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const tooltip = canvas.getByRole("tooltip");
    expect(tooltip).toBeInTheDocument();
  },
};

export const Sp: Story = {
  args: {
    payload: mockTooltipData,
  },
  parameters: {
    viewport: { defaultViewport: "sp" },
  },
};

export const Sm: Story = {
  args: {
    payload: mockTooltipData,
  },
  parameters: {
    viewport: { defaultViewport: "sm" },
  },
};

export const Md: Story = {
  args: {
    payload: mockTooltipData,
  },
  parameters: {
    viewport: { defaultViewport: "md" },
  },
};

export const Lg: Story = {
  args: {
    payload: mockTooltipData,
  },
  parameters: {
    viewport: { defaultViewport: "lg" },
  },
};

export const Xl: Story = {
  args: {
    payload: mockTooltipData,
  },
  parameters: {
    viewport: { defaultViewport: "xl" },
  },
};

export const Xxl: Story = {
  args: {
    payload: mockTooltipData,
  },
  parameters: {
    viewport: { defaultViewport: "xxl" },
  },
};

export const BigData: Story = {
  args: {
    payload: Array.from({ length: 1000 }, (_, i) => ({
      name: `${i}`,
      stroke: `hsl(${(i * Math.random() * 360) % 360}deg, 60%, 60%)`,
      strokeWidth: 1,
      dataKey: "value",
      color: `hsl(${(i * Math.random() * 360) % 360}deg, 60%, 60%)`,
      value: 5420480,
      payload: {
        year: 1980,
        value: 5420480,
      },
      hide: false,
    })),
  },
};
