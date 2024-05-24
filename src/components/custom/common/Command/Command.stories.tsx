// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import Command from "./Command";
import { commandData } from "@/utils/constants";

// command data

const meta: Meta<typeof Command> = {
  title: "Command",

  args: {
    commandData: commandData,
  },
  component: Command,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
