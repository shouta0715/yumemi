import { Meta, StoryObj } from "@storybook/react";
import { within, expect } from "@storybook/test";
import { ErrorPage } from "@/components/error";
import {
  BadRequestError,
  ForbiddenError,
  InternalServerError,
  NotFoundError,
  TooManyRequestsError,
  UnauthorizedError,
} from "@/libs/errors";

export default {
  component: ErrorPage,
  title: "components/error",
} satisfies Meta<typeof ErrorPage>;

type Story = StoryObj<typeof ErrorPage>;

export const Default: Story = {
  args: {},
};

export const SomethingWentWrong: Story = {
  args: {
    error: new Error("Something went wrong"),
  },
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const title = canvas.getByRole("heading", { name: "Something went wrong" });

    expect(title).toBeInTheDocument();
  },
};

export const BadRequest: Story = {
  args: {
    error: new BadRequestError(),
  },

  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const title = canvas.getByRole("heading", { name: "Bad Request" });

    expect(title).toBeInTheDocument();
  },
};

export const Unauthorized: Story = {
  args: {
    error: new UnauthorizedError(),
  },

  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const title = canvas.getByRole("heading", { name: "Authorization Error" });

    expect(title).toBeInTheDocument();
  },
};

export const Forbidden: Story = {
  args: {
    error: new ForbiddenError(),
  },
};

export const NotFound: Story = {
  args: {
    error: new NotFoundError(),
  },

  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const title = canvas.getByRole("heading", { name: "Not Found" });

    expect(title).toBeInTheDocument();
  },
};

export const TooManyRequests: Story = {
  args: {
    error: new TooManyRequestsError(),
  },

  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const title = canvas.getByRole("heading", { name: "Too Many Requests" });

    expect(title).toBeInTheDocument();
  },
};

export const InternalServer: Story = {
  args: {
    error: new InternalServerError(),
  },

  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const title = canvas.getByRole("heading", {
      name: "Internal Server Error",
    });

    expect(title).toBeInTheDocument();
  },
};
