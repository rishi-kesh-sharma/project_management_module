// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
// import { userInfo } from "@/utils/constants";
import Tabs from "./Tabs";

const meta: Meta<typeof Tabs> = {
  title: "Tabs",

  args: {
    // user: userInfo,
    triggers: [
      { id: "view-profile", label: "View Profile" }

    ],
    contents: [
      { id: "view-profile", element: <div>hello</div> }
    ]
  },
  component: Tabs,
  parameters: {
    layout: "top",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
