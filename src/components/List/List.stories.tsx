import { Meta, StoryFn } from "@storybook/react";
import List, { IList } from "./index";
import Typography from "../Typography";

const meta = {
  title: "List",
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
    <List data={data}>
      {({ value, index = 1 }) => <Typography>{value}</Typography>}
    </List>
  );
};

export const Horizontal: StoryFn<typeof List> = ({ ...args }: IList<any>) => {
  return (
    <List data={data} align="horizontal" gap="30px">
      {({ value, index = 1 }) => <Typography>{value}</Typography>}
    </List>
  );
};
