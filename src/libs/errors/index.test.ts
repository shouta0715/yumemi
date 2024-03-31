import {
  BadRequestError,
  UnauthorizedError,
  throwHttpErrorFromStatus,
  ForbiddenError,
  NotFoundError,
  InternalServerError,
  handleApiError,
  TooManyRequestsError,
  HttpError,
  getErrorStatus,
} from "@/libs/errors";

describe("libs/errors", () => {
  describe("throwHttpErrorFromStatus", () => {
    test("if status is 400, throw BadRequestError", () => {
      expect(() => throwHttpErrorFromStatus(400)).toThrow(BadRequestError);
    });

    test("if status is 401, throw UnauthorizedError", () => {
      expect(() => throwHttpErrorFromStatus(401)).toThrow(UnauthorizedError);
    });

    test("if status is 403, throw ForbiddenError", () => {
      expect(() => throwHttpErrorFromStatus(403)).toThrow(ForbiddenError);
    });

    test("if status is 404, throw NotFoundError", () => {
      expect(() => throwHttpErrorFromStatus(404)).toThrow(NotFoundError);
    });

    test("if status is 429, throw TooManyRequestsError", () => {
      expect(() => throwHttpErrorFromStatus(429)).toThrow(TooManyRequestsError);
    });

    test("if status is 500, throw InternalServerError", () => {
      expect(() => throwHttpErrorFromStatus(500)).toThrow(InternalServerError);
    });

    test("if unknown status, throw InternalServerError", () => {
      expect(() => throwHttpErrorFromStatus(999)).toThrow(InternalServerError);
    });
  });

  describe("handleApiError", () => {
    test("if error is BadRequestError, return 400 status and Bad Request message", () => {
      const error = new BadRequestError();
      const response = handleApiError({ error });

      expect(response).toStrictEqual({
        message: "Bad Request",
        status: 400,
        originMessage: null,
      });
    });

    test("if error is UnauthorizedError, return 401 status and Unauthorized message", () => {
      const error = new UnauthorizedError();
      const response = handleApiError({ error });

      expect(response).toStrictEqual({
        message: "Unauthorized",
        status: 401,
        originMessage: null,
      });
    });

    test("if error is ForbiddenError, return 403 status and Forbidden message", () => {
      const error = new ForbiddenError();
      const response = handleApiError({ error });

      expect(response).toStrictEqual({
        message: "Forbidden",
        status: 403,
        originMessage: null,
      });
    });

    test("if error is NotFoundError, return 404 status and Not Found message", () => {
      const error = new NotFoundError();
      const response = handleApiError({ error });

      expect(response).toStrictEqual({
        message: "Not Found",
        status: 404,
        originMessage: null,
      });
    });

    test("if error is TooManyRequestsError, return 429 status and Too Many Requests message", () => {
      const error = new TooManyRequestsError();
      const response = handleApiError({ error });

      expect(response).toStrictEqual({
        message: "Too Many Requests",
        status: 429,
        originMessage: null,
      });
    });

    test("if error is InternalServerError, return 500 status and Internal Server Error message", () => {
      const error = new InternalServerError();
      const response = handleApiError({ error });

      expect(response).toStrictEqual({
        message: "Internal Server Error",
        status: 500,
        originMessage: null,
      });
    });

    test("if error is unknown, return 500 status and Internal Server Error message", () => {
      const error = new Error();
      const response = handleApiError({ error });

      expect(response).toStrictEqual({
        message: "Internal Server Error",
        status: 500,
      });
    });

    test("if has originMessage, return originMessage", () => {
      const error = new HttpError(400, "origin message");

      const response = handleApiError({ error });

      expect(response).toStrictEqual({
        message: "Bad Request",
        status: 400,
        originMessage: "origin message",
      });
    });
  });

  describe("getErrorStatus", () => {
    test("if status is 400, return 400", () => {
      expect(getErrorStatus(400)).toBe(400);
    });

    test("if status is 401, return 401", () => {
      expect(getErrorStatus(401)).toBe(401);
    });

    test("if status is 403, return 403", () => {
      expect(getErrorStatus(403)).toBe(403);
    });

    test("if status is 404, return 404", () => {
      expect(getErrorStatus(404)).toBe(404);
    });

    test("if status is 429, return 429", () => {
      expect(getErrorStatus(429)).toBe(429);
    });

    test("if status is 500, return 500", () => {
      expect(getErrorStatus(500)).toBe(500);
    });

    test("if status is unknown, return 500", () => {
      expect(getErrorStatus(999)).toBe(500);
    });
  });
});
