import "@testing-library/jest-dom";
import mockRouter from "next-router-mock";
import React from "react";

vi.mock("next/navigation", async () => {
  const actual = await vi.importActual("next/navigation");

  return {
    ...actual,
    usePathname: () => {
      return mockRouter.pathname;
    },
    useRouter: vi.fn().mockReturnValue(mockRouter),
    useSearchParams: () => {
      const { query } = mockRouter;

      return new URLSearchParams(
        Object.entries(query).map(([key, value]) => [key, String(value)])
      );
    },
  };
});

beforeEach(() => {
  mockRouter.setCurrentUrl("/");
});

global.React = React;
