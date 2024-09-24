import { StoryFn, StoryObj, Meta } from "@storybook/react";
import Box, { BoxWrap, IBoxPropsWrap } from ".";

const meta = {
  title: "Box",
  component: Box,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { children: "Sample Box" },
};

const Template: StoryFn<typeof BoxWrap> = ({ boxGap, ...args }: IBoxPropsWrap) => {
  return (
    <BoxWrap boxGap={boxGap}>
      <Box {...args}>Left Box</Box>
      <Box {...args}>Right Box</Box>
    </BoxWrap>
  );
};

export const BoxWrapDefault: StoryFn<typeof BoxWrap> = Template.bind({});
BoxWrapDefault.args = {
  boxGap: 24,
  hAlign: "end",
};
