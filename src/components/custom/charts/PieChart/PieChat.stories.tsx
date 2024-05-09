import { Meta, StoryObj } from "@storybook/react";
import PieChart from "./PieChart";

const meta: Meta<typeof PieChart> = {
  title: "Charts/Pie",
  component: PieChart,
  parameters: {
    layout: "centered",
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export default meta;
