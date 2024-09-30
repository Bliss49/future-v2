import { Meta, StoryFn } from "@storybook/react";
import List, { IList } from "./index";
import Typography from "../Typography";

const meta = {
  title: "Table",
  component: List,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof List>;

export default meta;

const data = ["안녕하세요", "반가워요", "잘 있어요", "다시 만나요"];

export const Default: StoryFn<typeof List> = ({ ...args }: IList<any>) => {
  return (
    <List data={data} gap="10px">
      {({ value, index = 1 }) => <Typography>{value}</Typography>}
    </List>
  );
};

export const ListChildren: StoryFn<typeof List> = Default.bind({});
ListChildren.args = {
  data: data,
};
