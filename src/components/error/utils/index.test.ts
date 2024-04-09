import { getErrorCodeFromError } from "@/components/error/utils";
import {
  BadRequestError,
  ForbiddenError,
  HttpError,
  InternalServerError,
  NotFoundError,
  TooManyRequestsError,
  UnauthorizedError,
} from "@/libs/errors";

describe("src/components/error/utils", () => {
  describe("getErrorCodeFromError", () => {
    test("if error is not an instance of Error, return 0", () => {
      const error = {};

      const result = getErrorCodeFromError(error);

      expect(result).toBe(0);
    });

    test("if error is an instance of HttpError, return error.status", () => {
      expect(getErrorCodeFromError(new HttpError(400))).toBe(400);
      expect(getErrorCodeFromError(new HttpError(401))).toBe(401);
      expect(getErrorCodeFromError(new HttpError(403))).toBe(403);
      expect(getErrorCodeFromError(new HttpError(404))).toBe(404);
      expect(getErrorCodeFromError(new HttpError(429))).toBe(429);
      expect(getErrorCodeFromError(new HttpError(500))).toBe(500);

      expect(getErrorCodeFromError(new BadRequestError())).toBe(400);
      expect(getErrorCodeFromError(new UnauthorizedError())).toBe(401);
      expect(getErrorCodeFromError(new ForbiddenError())).toBe(403);
      expect(getErrorCodeFromError(new NotFoundError())).toBe(404);
      expect(getErrorCodeFromError(new TooManyRequestsError())).toBe(429);
      expect(getErrorCodeFromError(new InternalServerError())).toBe(500);
    });

    test("if error.message is 'Bad Request', return 400", () => {
      const error = new Error("Bad Request");

      const result = getErrorCodeFromError(error);

      expect(result).toBe(400);
    });

    test("if error.message is 'Unauthorized', return 401", () => {
      const error = new Error("Unauthorized");

      const result = getErrorCodeFromError(error);

      expect(result).toBe(401);
    });

    test("if error.message is 'Forbidden', return 403", () => {
      const error = new Error("Forbidden");

      const result = getErrorCodeFromError(error);

      expect(result).toBe(403);
    });

    test("if error.message is 'Not Found', return 404", () => {
      const error = new Error("Not Found");

      const result = getErrorCodeFromError(error);

      expect(result).toBe(404);
    });

    test("if error.message is 'Too Many Requests', return 429", () => {
      const error = new Error("Too Many Requests");

      const result = getErrorCodeFromError(error);

      expect(result).toBe(429);
    });

    test("if error.message is 'Internal Server Error', return 500", () => {
      const error = new Error("Internal Server Error");

      const result = getErrorCodeFromError(error);

      expect(result).toBe(500);
    });

    test("if error.message is not matched, return 0", () => {
      const error = new Error("Something went wrong");

      const result = getErrorCodeFromError(error);

      expect(result).toBe(0);
    });
  });
});
