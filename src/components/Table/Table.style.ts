import styled from "@emotion/styled";

export type TTdAlign = "left" | "center" | "right";

export interface ITableContainer {
  width?: string;
  height?: string;
}

export interface ICellContainer {
  align?: TTdAlign;
}

export const TableContainer = styled.table<ITableContainer>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  text-align: left;
`;
export const THeadContainer = styled.thead``;
export const TBodyContainer = styled.tbody``;
export const TFootContainer = styled.tfoot``;
export const TRContainer = styled.tr``;
export const THContainer = styled.th<ICellContainer>`
  ${({ align }) => align && `text-align: ${align};`}
`;
export const TDContainer = styled.td<ICellContainer>`
  ${({ align }) => align && `text-align: ${align};`}
`;
