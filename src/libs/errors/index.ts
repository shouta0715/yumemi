export const errors = {
  400: { message: "Bad Request" },
  401: { message: "Unauthorized" },
  403: { message: "Forbidden" },
  404: { message: "Not Found" },
  429: { message: "Too Many Requests" },
  500: { message: "Internal Server Error" },
} as const;

export type ErrorType = keyof typeof errors;
export type Errors = typeof errors;
export type ErrorsMessage = {
  [T in ErrorType]: Errors[T]["message"];
}[ErrorType];

export type Error = {
  status: ErrorType;
  message: ErrorsMessage;
};

export class HttpError extends Error {
  message: ErrorsMessage;

  originMessage: string | null;

  constructor(
    public status: ErrorType,
    originMessage?: string | null
  ) {
    super(errors[status].message);
    this.message = errors[status].message;
    this.status = status;
    this.originMessage = originMessage || null;
  }

  throwMessage() {
    return {
      message: this.message,
      status: this.status,
      originMessage: this.originMessage,
    };
  }
}

export class BadRequestError extends HttpError {
  constructor() {
    super(400);
  }
}

export class UnauthorizedError extends HttpError {
  constructor() {
    super(401);
  }
}

export class ForbiddenError extends HttpError {
  constructor() {
    super(403);
  }
}

export class NotFoundError extends HttpError {
  constructor() {
    super(404);
  }
}

export class TooManyRequestsError extends HttpError {
  constructor() {
    super(429);
  }
}

export class InternalServerError extends HttpError {
  constructor() {
    super(500);
  }
}

export const getErrorStatus = (status: number): ErrorType => {
  switch (status) {
    case 400:
      return 400;
    case 401:
      return 401;
    case 403:
      return 403;
    case 404:
      return 404;
    case 429:
      return 429;
    case 500:
      return 500;
    default:
      return 500;
  }
};

export const throwHttpErrorFromStatus = (status: ErrorType | number): never => {
  switch (status) {
    case 400:
      throw new BadRequestError();
    case 401:
      throw new UnauthorizedError();
    case 403:
      throw new ForbiddenError();
    case 404:
      throw new NotFoundError();
    case 429:
      throw new TooManyRequestsError();
    case 500:
      throw new InternalServerError();
    default:
      throw new InternalServerError();
  }
};

export const handleApiError = ({ error }: { error: unknown }) => {
  if (error instanceof BadRequestError) {
    const status = 400;
    const { message } = errors[status];

    return { message, status, originMessage: error.originMessage };
  }

  if (error instanceof UnauthorizedError) {
    const status = 401;
    const { message } = errors[status];

    return { message, status, originMessage: error.originMessage };
  }

  if (error instanceof ForbiddenError) {
    const status = 403;
    const { message } = errors[status];

    return { message, status, originMessage: error.originMessage };
  }

  if (error instanceof NotFoundError) {
    const status = 404;
    const { message } = errors[status];

    return { message, status, originMessage: error.originMessage };
  }

  if (error instanceof TooManyRequestsError) {
    const status = 429;
    const { message } = errors[status];

    return { message, status, originMessage: error.originMessage };
  }

  if (error instanceof HttpError) {
    const { status, message } = error.throwMessage();

    return { message, status, originMessage: error.originMessage };
  }

  const status = 500;

  const { message } = errors[status];

  return { message, status };
};
