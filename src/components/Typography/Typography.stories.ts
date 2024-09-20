import { StoryObj } from "@storybook/react";
import Typography from "./index";

const meta = {
  title: "Typography",
  component: Typography,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    children: "Default Typography",
  },
};

export const TextDecoration: Story = {
  args: {
    children: "TextDecoration Typography",
    textDecoration: "underline",
  },
};
