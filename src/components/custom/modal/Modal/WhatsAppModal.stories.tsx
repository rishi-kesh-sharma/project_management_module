// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
// import { sidebarItems } from "@/utils/constants/sidebar";
import WhatsAppModal from "./WhatsAppModal";

const meta: Meta<typeof WhatsAppModal> = {
  title: "WhatsAppModal",

  component: WhatsAppModal,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
  //   args: {
  //     type: "large",
  //     // items: sidebarItems(),
  //     path: "/",
  //   },
};
export const Small: Story = {
  //   args: {
  //     // type: "small",
  //     // items: sidebarItems(),
  //     path: "/",
  //   },
};
