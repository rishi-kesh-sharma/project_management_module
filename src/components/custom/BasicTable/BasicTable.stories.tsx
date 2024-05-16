// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import BasicTable from "./BasicTable";
import { basicTableData } from "@/utils/constants";

const meta: Meta<typeof BasicTable> = {
  title: "BasicTable",

  args: {
    // user: userInfo,
    ...basicTableData,
  },
  component: BasicTable,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
