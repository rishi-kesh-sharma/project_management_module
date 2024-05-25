// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import GanttChart from "./GanttChart";

const meta: Meta<typeof GanttChart> = {
  title: "GanttChart",

  args: {},
  component: GanttChart,
  parameters: {
    layout: "top",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
