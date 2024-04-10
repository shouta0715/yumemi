import { act, renderHook } from "@testing-library/react";

import mockRouter from "next-router-mock";
import { usePrefecture } from "@/app/(apps)/_features/checkbox/hooks";

const setup = (prefCode = 1) => {
  const hooks = renderHook(() => usePrefecture({ prefCode }));

  const changeEvent = {
    target: {
      value: prefCode.toString(),
      checked: false,
    },
  } as React.ChangeEvent<HTMLInputElement>;

  return {
    ...hooks,
    changeEvent,
  };
};
describe("apps/checkbox/hooks", () => {
  test("if query prefCode is included in searchParams, checked is true", () => {
    // Arrange
    mockRouter.push({
      pathname: "/",
      query: { prefCode: "1" },
    });
    const { result } = setup();

    expect(result.current.checked).toBe(true);
  });

  test("if query prefCode is not included in searchParams, checked is false", () => {
    // Arrange
    mockRouter.push({
      pathname: "/",
      query: {},
    });
    const { result } = setup();

    expect(result.current.checked).toBe(false);
  });

  test("if checked is false, query prefCode is removed from searchParams", () => {
    mockRouter.push({
      pathname: "/",
      query: { prefCode: "1" },
    });
    const { result, changeEvent } = setup();

    changeEvent.target.checked = false;
    changeEvent.target.value = "1";

    act(() => {
      result.current.handleCheckboxChange(changeEvent);
    });

    expect(result.current.checked).toBe(false);
    expect(mockRouter).toMatchObject({
      pathname: "/",
      query: {},
    });
    expect(mockRouter.query.prefCode).toBe(undefined);
  });

  test("if checked is true, query prefCode is added to searchParams", () => {
    mockRouter.push({
      pathname: "/",
      query: {},
    });
    const { result, changeEvent } = setup();

    changeEvent.target.checked = true;
    changeEvent.target.value = "1";

    act(() => {
      result.current.handleCheckboxChange(changeEvent);
    });

    expect(result.current.checked).toBe(true);

    expect(mockRouter).toMatchObject({
      pathname: "/",
      query: { prefCode: "1" },
    });
    expect(mockRouter.query.prefCode).toBe("1");
  });

  test("if query type is included in searchParams, type is not removed from searchParams", () => {
    mockRouter.push({
      pathname: "/",
      query: { type: "total", prefCode: "1" },
    });
    const { result, changeEvent } = setup();

    changeEvent.target.checked = false;
    changeEvent.target.value = "1";

    act(() => {
      result.current.handleCheckboxChange(changeEvent);
    });

    expect(mockRouter.query.type).toBe("total");

    expect(mockRouter).toMatchObject({
      pathname: "/",
      query: { type: "total" },
    });
  });
});
