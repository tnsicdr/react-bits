import React from "react";
import type { Preview } from "@storybook/react";
import "../lib/styles/main.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="react-bits">
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
