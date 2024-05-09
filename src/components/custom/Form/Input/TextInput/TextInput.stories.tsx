// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import TextInput from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Form/Input/TextInput",

  args: {},
  component: TextInput,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Input here ...",
  },
};
