import type { Preview, StoryObj } from "@storybook/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import "../src/index.css";
// import "!style-loader!css-loader!postcss-loader!tailwindcss/tailwind.css";
const ReactRoutingWrapper = (Story: any) => {
  return (
    <BrowserRouter>
      <Story />
    </BrowserRouter>
  );
};
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [ReactRoutingWrapper],
};

export default preview;
