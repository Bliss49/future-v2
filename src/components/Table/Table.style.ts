import styled from "@emotion/styled";

export type TTdAlign = "left" | "center" | "right";

export interface ITableContainer {
  width?: string;
  height?: string;
}

export interface ITDContainer {
  align?: TTdAlign;
}

export const TableContainer = styled.table<ITableContainer>``;
export const THeadContainer = styled.thead``;
export const TBodyContainer = styled.tbody``;
export const TFootContainer = styled.tfoot``;
export const TRContainer = styled.tr``;
export const THContainer = styled.th``;
export const TDContainer = styled.td<ITDContainer>``;
