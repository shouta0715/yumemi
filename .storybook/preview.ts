import { BpStory } from "./../src/tests/storybook";
import type { Preview } from "@storybook/react";
import "../src/styles/global/index.scss";

const preview: Preview = {
  parameters: {
    ...BpStory.parameters,
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
