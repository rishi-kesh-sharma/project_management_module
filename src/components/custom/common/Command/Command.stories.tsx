// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import Command, { ICommandProps } from "./Command";

import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

// command data
const commandData: ICommandProps = {
  shortcut: "⌘j",
  placeholder: "Type a command or search...",
  emptyText: "No results found",
  commandGroups: [
    {
      heading: "Suggestions",
      commandItems: [
        {
          icon: <CalendarIcon className="mr-2 h-4 w-4" />,
          text: "Calendar",
        },
        {
          icon: <FaceIcon className="mr-2 h-4 w-4" />,
          text: "Search Emoji",
        },
        { icon: <RocketIcon className="mr-2 h-4 w-4" />, text: "Launch" },
      ],
    },
    {
      heading: "Settings",
      commandItems: [
        {
          icon: <PersonIcon className="mr-2 h-4 w-4" />,
          text: "Profile",
          shortcut: "⌘P",
        },
        {
          icon: <EnvelopeClosedIcon className="mr-2 h-4 w-4" />,
          text: "Mail",
          shortcut: "⌘B",
        },
        {
          icon: <GearIcon className="mr-2 h-4 w-4" />,
          text: "Settings",
          shortcut: "⌘S",
        },
      ],
    },
  ],
};

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
