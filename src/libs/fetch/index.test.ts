import { HttpError } from "@/libs/errors";
import { get } from "@/libs/fetch";

const exampleUrl = "https://example.com";
const commonHeaders = {
  "Content-Type": "application/json",
};

describe("libs/fetch", () => {
  describe("get", () => {
    const spyFetch = vi.spyOn(global, "fetch").mockImplementation(async () => {
      const res = new Response(
        JSON.stringify({
          key: "value",
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      return res;
    });

    afterEach(() => {
      spyFetch.mockClear();
    });

    test("should call fetch with correct url", async () => {
      const params = { key: "value" };
      const options = { params };

      await get(exampleUrl, options);

      expect(spyFetch).toBeCalledWith(`${exampleUrl}?key=value`, {
        method: "GET",
        headers: commonHeaders,
      });
    });

    test("should call fetch with correct headers", async () => {
      const headers = {
        "X-API-KEY": "api key",
      };

      const options = { headers };

      await get(exampleUrl, options);

      expect(spyFetch).toBeCalledWith(exampleUrl, {
        method: "GET",
        headers: {
          ...commonHeaders,
          ...headers,
        },
      });
    });

    test("should call fetch with correct requestInit", async () => {
      const requestInit: RequestInit = {
        mode: "cors",
      };

      const options = { requestInit };

      await get(exampleUrl, options);

      expect(spyFetch).toBeCalledWith(exampleUrl, {
        method: "GET",
        headers: commonHeaders,
        ...requestInit,
      });
    });

    test("should return response json", async () => {
      const response = await get(exampleUrl);

      expect(response).toStrictEqual({ key: "value" });
    });

    test("should throw HttpError if response is not ok", async () => {
      const errorFetch = vi
        .spyOn(global, "fetch")
        .mockImplementation(async () => {
          const res = new Response("error message", {
            status: 400,
            headers: {
              "Content-Type": "text/plain",
            },
          });

          return res;
        });

      const expectError = new HttpError(400, "error message");

      await expect(get(exampleUrl)).rejects.toThrow(expectError);

      errorFetch.mockClear();
    });
  });
});
