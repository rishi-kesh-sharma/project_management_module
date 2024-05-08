// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import Sidebar from "./Sidebar";
import { sidebarItems } from "@/utils/constants/sidebar";

const meta: Meta<typeof Sidebar> = {
  title: "Sidebar",

  component: Sidebar,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  args: {
    type: "large",
    items: sidebarItems(),
    path: "/",
  },
};
export const Small: Story = {
  args: {
    // type: "small",
    items: sidebarItems(),
    path: "/",
  },
};
