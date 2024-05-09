// Sidebar.stories.tsx

import { StoryObj, Meta } from "@storybook/react";
import EmailInput from "./EmailInput";

const meta: Meta<typeof EmailInput> = {
  title: "Form/Input/EmailInput",

  args: {},
  component: EmailInput,
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
