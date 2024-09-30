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
    id: "checkBox1",
    name: "checkBox-Group",
    ariaLabel: "checkBox Button",
  },
};

export const Box: Story = {
  args: {
    children: "컨텐츠에 맞는 체크박스",
    styleType: "box",
    id: "checkBox1",
    name: "checkBox-Group",
    ariaLabel: "checkBox Button",
  },
};
