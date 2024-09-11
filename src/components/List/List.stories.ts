import { StoryObj } from "@storybook/react";
import List from "./index";

const meta = {
  title: "List",
  component: List,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    children: "Default List",
  },
};
