// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import Sheet from "./Sheet";

const meta: Meta<typeof Sheet> = {
  title: "Sheet",

  args: {},
  component: Sheet,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
