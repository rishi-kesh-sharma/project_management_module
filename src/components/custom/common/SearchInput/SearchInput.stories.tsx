import { Meta, StoryObj } from "@storybook/react";
import SearchInput from "./SearchInput";

const meta: Meta<typeof SearchInput> = {
  title: "SearchInput",
  component: SearchInput,
  parameters: {
    layout: "centered",
  },
  args: {
    label: "Search",
    placeholder: "Search here ...",
  },
};
type Story = StoryObj<typeof meta>;

export default meta;

export const Default: Story = {
  args: {
    inputSize: "default",
    buttonSize: "default",
  },
};
export const ExtraLarge: Story = {
  args: {
    inputSize: "xl",
    buttonSize: "lg",
  },
};

export const Large: Story = {
  args: {
    inputSize: "lg",
    buttonSize: "default",
  },
};

// export const Medium: Story = {
//   args: {
//     inputSize: "md",
//     buttonSize: "sm",
//   },
// };
export const Small: Story = {
  args: {
    inputSize: "sm",
    buttonSize: "sm",
  },
};

export const Primary: Story = {
  args: {
    inputSize: "lg",
    buttonSize: "sm",
    buttonVariant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    inputSize: "lg",
    buttonSize: "sm",
    buttonVariant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    inputSize: "lg",
    buttonSize: "sm",
    buttonVariant: "outline",
  },
};
