import { Meta, StoryObj } from "@storybook/react";
import BarChart from "./BarChart";

const meta: Meta<typeof BarChart> = {
  title: "Charts/Bar",
  component: BarChart,
  parameters: {
    layout: "centered",
  },
};

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    
  },
};

export default meta;
