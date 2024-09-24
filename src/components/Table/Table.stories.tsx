import { StoryFn, Meta } from "@storybook/react";
import { ITable, THead, Table, TR, TH, TBody, TD, TFoot } from "./index";

const meta = {
  title: "Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;

export const Default: StoryFn<typeof Table> = () => {
  return (
    <Table caption="table">
      <THead>
        <TR>
          <TH scope="row">헤더셀1</TH>
          <TH scope="row">헤더셀2</TH>
          <TH scope="row">헤더셀3</TH>
          <TH scope="row">헤더셀4</TH>
          <TH scope="row">헤더셀5</TH>
        </TR>
      </THead>
      <TBody>
        <TR>
          <TD>바디셀1</TD>
          <TD>바디셀2</TD>
          <TD>바디셀3</TD>
          <TD>바디셀4</TD>
          <TD>바디셀5</TD>
        </TR>
        <TR>
          <TD>바디셀1</TD>
          <TD>바디셀2</TD>
          <TD>바디셀3</TD>
          <TD>바디셀4</TD>
          <TD>바디셀5</TD>
        </TR>
        <TR>
          <TD>바디셀1</TD>
          <TD>바디셀2</TD>
          <TD>바디셀3</TD>
          <TD>바디셀4</TD>
          <TD>바디셀5</TD>
        </TR>
      </TBody>
      <TFoot>
        <TR>
          <TD>푸터셀1</TD>
          <TD>푸터셀2</TD>
          <TD>푸터셀3</TD>
          <TD>푸터셀4</TD>
          <TD>푸터셀5</TD>
        </TR>
      </TFoot>
    </Table>
  );
};
