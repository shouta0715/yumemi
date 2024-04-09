import { HttpError } from "@/libs/errors";

export const errorMessages = {
  0: {
    title: "Something went wrong",
    message: "何か問題が発生しました。ページをリロードしてみてください。",
  },
  400: {
    title: "Bad Request",
    message:
      "申し訳ありません。予期せぬエラーが発生しました。再度お試しください。",
  },
  401: {
    title: "Authorization Error",
    message: "申し訳ありません。認証エラーが発生しました。再度お試しください。",
  },
  403: {
    title: "Forbidden",
    message: "申し訳ありません。アクセス権限がありません。再度お試しください。",
  },
  404: {
    title: "Not Found",
    message: "データが見つかりませんでした。",
  },
  429: {
    title: "Too Many Requests",
    message:
      "申し訳ありません。予期せぬエラーが発生しました。再度お試しください。",
  },
  500: {
    title: "Internal Server Error",
    message:
      "申し訳ありません。現在サーバエラーが発生しております。再度時間をおいてアクセスしてください.",
  },
};
export const getErrorCodeFromError = (
  error: unknown
): keyof typeof errorMessages => {
  if (error instanceof HttpError) {
    return error.status;
  }

  if (error instanceof Error) {
    const { message } = error;

    if (message === "Bad Request") return 400;
    if (message === "Unauthorized") return 401;
    if (message === "Forbidden") return 403;
    if (message === "Not Found") return 404;
    if (message === "Too Many Requests") return 429;
    if (message === "Internal Server Error") return 500;
  }

  return 0;
};
