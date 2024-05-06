import { Story, Meta } from "@storybook/react";
import Button, { ButtonProps } from "./Button.tsx";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const LargePrimary = Template.bind({});
LargePrimary.args = {
  category: "large",
  type: "primary",
  text: "Button",
  variation: "default",
};

export const LargeSecondary = Template.bind({});
LargeSecondary.args = {
  category: "large",
  type: "secondary",
  text: "Button",
  variation: "default",
};
