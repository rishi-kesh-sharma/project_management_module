// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import Combobox from "./Combobox";
import {
  CalendarIcon,
  EnvelopeClosedIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";
import { IComboboxProps } from "@/@types";

const comboboxData: IComboboxProps = {
  defaultText: "Search items here...",
  emptyText: "No results found",
  placeholder: "Search here...",
  comboboxGroups: [
    {
      heading: "Suggestions",
      comboboxItems: [
        {
          icon: <CalendarIcon className="mr-2 h-4 w-4" />,
          label: "Calendar",
          value: "calendar",
        },
        {
          icon: <FaceIcon className="mr-2 h-4 w-4" />,
          label: "Search Emoji",
          value: "search-emoji",
        },
        {
          icon: <RocketIcon className="mr-2 h-4 w-4" />,
          label: "Launch",
          value: "launch",
        },
      ],
    },
    {
      heading: "Settings",
      comboboxItems: [
        {
          icon: <PersonIcon className="mr-2 h-4 w-4" />,
          label: "Profile",
          value: "profile",
        },
        {
          icon: <EnvelopeClosedIcon className="mr-2 h-4 w-4" />,
          label: "Mail",
          value: "mail",
        },
        {
          icon: <GearIcon className="mr-2 h-4 w-4" />,
          label: "Settings",
          value: "settings",
        },
      ],
    },
  ],
};

const meta: Meta<typeof Combobox> = {
  title: "Combobox",

  args: {
    comboboxData: comboboxData,
  },
  component: Combobox,
  parameters: {
    layout: "top",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
