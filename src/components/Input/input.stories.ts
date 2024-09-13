import { StoryObj } from "@storybook/react";
import Input from "./index";
import { EInputStatus } from "./Input.style";

const meta = {
  title: "Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    type: "text",
    value: "",
    ariaLabel: "Input",
    textAlign: "center",
    status: EInputStatus.DEFAULT,
    onChange: () => {},
  },
};
export const Error: Story = {
  args: {
    type: "text",
    value: "",
    ariaLabel: "Input",
    status: EInputStatus.ERROR,
    size: "large",
    textAlign: "left",
    onChange: () => {},
  },
};
export const Enable: Story = {
  args: {
    type: "text",
    value: "",
    ariaLabel: "Input",
    status: EInputStatus.ENABLE,
    size: "medium",
    textAlign: "right",
    onChange: () => {},
  },
};
export const Disabled: Story = {
  args: {
    type: "text",
    value: "",
    ariaLabel: "Input",
    status: EInputStatus.DEFAULT,
    size: "small",
    onChange: () => {},
    isDisabled: true,
  },
};
export const ReadOnly: Story = {
  args: {
    type: "text",
    value: "",
    ariaLabel: "Input",
    status: EInputStatus.DEFAULT,
    size: "x-small",
    onChange: () => {},
    isReadOnly: true,
  },
};
