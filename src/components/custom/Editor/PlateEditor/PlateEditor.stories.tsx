// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import PlateEditor from "./PlateEditor.jsx";
import RootLayout from "../../layout/RootLayout/RootLayout";

const meta: Meta<typeof PlateEditor> = {
  title: "Editor/PlateEditor",

  args: {},
  component: PlateEditor,
  parameters: {
    layout: "top",
  },
  decorators: (Story) => {
    return (
      <RootLayout>
        <div className="mx-[2rem] mt-[6rem] border ">
          <Story />
        </div>
      </RootLayout>
    );
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
