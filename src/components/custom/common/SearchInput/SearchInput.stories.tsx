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
    buttonProps: { size: "default" },
  },
};
export const ExtraLarge: Story = {
  args: {
    inputSize: "xl",
    buttonProps: {
      size: "lg",
    },
  },
};

export const Large: Story = {
  args: {
    inputSize: "lg",
    buttonProps: { size: "default" },
  },
};

export const Medium: Story = {
  args: {
    inputSize: "md",
    buttonProps: {
      size: "sm",
    },
  },
};
export const Small: Story = {
  args: {
    inputSize: "sm",
    buttonProps: {
      size: "sm",
    },
  },
};

export const Primary: Story = {
  args: {
    inputSize: "lg",
    buttonProps: {
      size: "sm",
      variant: "default",
    },
  },
};

export const Secondary: Story = {
  args: {
    inputSize: "lg",
    buttonProps: {
      size: "sm",
      variant: "secondary",
    },
  },
};

export const Outline: Story = {
  args: {
    inputSize: "lg",
    buttonProps: {
      size: "sm",
      variant: "outline",
    },
  },
};
