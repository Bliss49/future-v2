import { StoryObj } from "@storybook/react";
import CheckBox from "./index";

const meta = {
  title: "CheckBox",
  component: CheckBox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    children: "Default CheckBox",
  },
};
