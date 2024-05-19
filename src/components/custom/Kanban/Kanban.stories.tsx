// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import { KanbanBoard } from "./KanbanBoard";

const meta: Meta<typeof KanbanBoard> = {
  title: "KanbanBoard",

  args: {},
  component: KanbanBoard,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
