import { StoryObj } from "@storybook/react";
import SvgIcon from "./index";

const meta = {
  title: "SvgIcon",
  component: SvgIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    children: "Default SvgIcon",
  },
};
