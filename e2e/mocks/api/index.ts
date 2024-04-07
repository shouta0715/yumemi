import { mockFontHandlers } from "./google-fonts";
import { mockPrefecturesHandler } from "./prefectures";

export const mockSuccessAPIHandlers = [
  ...mockFontHandlers(),
  mockPrefecturesHandler(),
];
