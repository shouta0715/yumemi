import { mockFontHandlers } from "./google-fonts";
import { mockPopulationHandler } from "./populations";
import { mockPrefecturesHandler } from "./prefectures";

export const mockSuccessAPIHandlers = [
  ...mockFontHandlers(),
  mockPrefecturesHandler(),
  mockPopulationHandler(),
];
