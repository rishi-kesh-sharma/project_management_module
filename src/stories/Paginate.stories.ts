import { StoryObj } from "@storybook/react";
import Paginate from "./Paginate";
const handlePageClick = (props: number) => {
  console.log(`Selected page: ${props}`);
};
const meta = {
  title: "Pagination",
  component: Paginate,
  argTypes: {
    active: {
      control: {
        type: "select",
        options: [1, 2, 3, 4, 5],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const firstPage: Story = {
  args: {
    currentPage: 1,
    paginationCount: 5,
    handlePageClick: handlePageClick(1),
    css: {},
  },
};
export const secondPage: Story = {
  args: {
    currentPage: 2,
    paginationCount: 5,
    handlePageClick: handlePageClick(1),
    css: {},
  },
};
export const thirdPage: Story = {
  args: {
    currentPage: 3,
    paginationCount: 5,
    handlePageClick: handlePageClick(1),
    css: {},
  },
};
export const fourthPage: Story = {
  args: {
    currentPage: 4,
    paginationCount: 5,
    handlePageClick: handlePageClick(1),
    css: {},
  },
};
export const fifthPage: Story = {
  args: {
    currentPage: 5,
    paginationCount: 5,
    handlePageClick: handlePageClick(1),
    css: {},
  },
};
