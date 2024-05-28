// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import Calendar from "./Calendar";

const meta: Meta<typeof Calendar> = {
  title: "Calendar",

  args: {},
  component: Calendar,
  parameters: {
    layout: "top",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
