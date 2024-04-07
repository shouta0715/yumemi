import fs from "fs";
import path from "path";
import {
  RequestHandler,
  ResponseResolver,
  rest,
} from "next/experimental/testmode/playwright/msw";

const passthroughHandler: ResponseResolver = (req) => req.passthrough();

export const mockFontHandlers: () => RequestHandler[] = () => {
  const fontFilePath = path.resolve(__dirname, "./font.css");

  const font = fs.readFileSync(fontFilePath, "utf-8");

  return [
    rest.get("https://fonts.googleapis.com/css2", (_, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.set("Content-Type", "text/css"),
        ctx.text(font)
      );
    }),
    rest.get("https://fonts.gstatic.com/*", passthroughHandler),
  ];
};
