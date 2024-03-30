// TODO: if create other test files, remove this file
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const user = userEvent.setup();

describe("Example test", () => {
  test("should pass", () => {
    expect(1 + 1).toBe(2);
  });
});

describe("Example Components test", () => {
  test("should render", () => {
    const { container } = render(<div>Example</div>);

    expect(container).toBeInTheDocument();
  });

  test("should click and render", async () => {
    const fn = vi.fn();
    const { getByRole } = render(
      <button onClick={fn} type="button">
        Example
      </button>
    );

    const button = getByRole("button");

    await user.click(button);

    expect(fn).toHaveBeenCalled();
  });
});
