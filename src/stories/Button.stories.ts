// Button.stories.tsx

import { StoryObj } from "@storybook/react";
import Button from "./Button";
const handleOnClick = () => {
  alert("Clicked");
};

const meta = {
  title: "Button",
  component: Button,
  argTypes: {
    category: {
      control: {
        type: "select",
        options: ["large", "medium", "small"],
      },
    },
    type: {
      control: {
        type: "select",
        options: ["primary", "secondary"],
      },
    },
    variation: {
      control: {
        type: "select",
        options: ["default", "hover", "icon", "disabled", "disabled-icon"],
      },
    },
    text: { control: "text" },
    icon: { control: null },
    disabled: { control: "boolean" },
    onClick: { handleOnClick },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    category: "medium",
    type: "primary",
    variation: "default",
    text: "Default Button",
    disabled: false,
  },
};

export const Hover: Story = {
  args: {
    category: "medium",
    type: "primary",
    variation: "hover",
    text: "Hover Button",
    disabled: false,
  },
};

export const Icon: Story = {
  args: {
    category: "medium",
    type: "primary",
    variation: "icon",
    text: "Button",
    icon: "",
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    category: "medium",
    type: "primary",
    variation: "disabled",
    text: "Disabled Button",
    disabled: true,
  },
};

export const DisabledIcon: Story = {
  args: {
    category: "medium",
    type: "primary",
    variation: "disabled-icon",
    text: "Disabled Icon Button",
    icon: "",
    disabled: true,
  },
};
