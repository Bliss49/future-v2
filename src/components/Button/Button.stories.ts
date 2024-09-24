import { StoryObj } from "@storybook/react";
import Button from "./index";
import { EButtonShape, EButtonStyle } from "./Button.style";

const meta = {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    ariaLabel: "button",
    children: "Default Button",
    color: EButtonStyle.NORMAL,
  },
};

export const Round: Story = {
  args: {
    ariaLabel: "button",
    children: "Default Button",
    color: EButtonStyle.DEFAULT,
    shape: EButtonShape.ROUND,
  },
};

export const Shadow: Story = {
  args: {
    ariaLabel: "button",
    children: "Default Button",
    color: EButtonStyle.SECONDARY,
    shape: EButtonShape.SHADOW,
  },
};

export const Yellow: Story = {
  args: {
    ariaLabel: "button",
    children: "Default Button",
    color: EButtonStyle.YELLOW,
  },
};

export const Brown: Story = {
  args: {
    ariaLabel: "button",
    children: "Default Button",
    color: EButtonStyle.BROWN,
    shape: EButtonShape.ROUND,
  },
};

export const Blue: Story = {
  args: {
    ariaLabel: "button",
    children: "Default Button",
    color: EButtonStyle.BLUE,
    shape: EButtonShape.SHADOW,
  },
};