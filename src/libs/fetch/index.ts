import { HttpError, getErrorStatus } from "@/libs/errors";

type Options<P extends Record<string, string>> = {
  params?: P;
  headers?: HeadersInit;
  requestInit?: Omit<RequestInit, "headers" | "body" | "method">;
};

const createUrl = <P extends Record<string, string>>(
  path: string,
  params?: P
): string => {
  if (!params || Object.keys(params).length === 0) return path;

  const searchParams = new URLSearchParams(params);

  return `${path}?${searchParams.toString()}`;
};

export const get = async <T>(
  path: string,
  options?: Options<Record<string, string>>
): Promise<T> => {
  const url = createUrl(path, options?.params);

  const res = await fetch(url, {
    ...options?.requestInit,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  if (!res.ok) {
    const originMessage = await res.text().catch(() => null);

    const status = getErrorStatus(res.status);

    const error = new HttpError(status, originMessage);

    throw error;
  }

  return res.json();
};
