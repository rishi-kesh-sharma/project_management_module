import { StoryObj } from "@storybook/react";
import Label from "./Label";

const meta = {
  title: "Label",
  component: Label,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["input", "select", "search-start", "search-end"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Input: Story = {
  args: {
    type: "input",
    common: {
      input: "input",
      label: "Label",
      defaultValue: "",
      placeholder: "Placeholder",
      showImportant: false,
    },
  },
};

export const Select: Story = {
  args: {
    type: "select",
    common: {
      input: "input",
      label: "Label",
      defaultValue: "",
      placeholder: "Placeholder",
      showImportant: false,
    },

    options: [
      { value: "1", label: "One" },
      { value: "2", label: "Two" },
      { value: "3", label: "Three" },
      { value: "4", label: "Four" },
      { value: "5", label: "Five" },
      { value: "6", label: "Six" },
    ],
  },
};

export const SearchStart: Story = {
  args: {
    type: "search-start",
    common: {
      input: "input",
      label: "Label",
      defaultValue: "",
      placeholder: "Placeholder",
      showImportant: false,
    },
  },
};

export const SearchEnd: Story = {
  args: {
    type: "search-end",
    common: {
      input: "input",
      label: "Label",
      defaultValue: "",
      placeholder: "Placeholder",
      showImportant: false,
    },
  },
};
