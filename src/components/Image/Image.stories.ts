import { StoryObj } from "@storybook/react";
import Image, { EImageType } from "./index";

const meta = {
  title: "Image",
  component: Image,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    src: "",
    alt: "",
  },
};

export const ImgBg: Story = {
  args: {
    type: EImageType.Img_Bg,
    src: "",
    alt: "",
  },
};
