import styled from "@emotion/styled";

export type TDirection = "horizontal" | "vertical";

export interface IListStyle {
  align?: TDirection;
  gap?: string;
}

export const ListContainer = styled.ul<IListStyle>`
  ${({ align }) => align === "horizontal" && `display:flex;`}
`;
export const ListItem = styled.li<IListStyle>`
  :not(:first-of-type) {
    ${({ align, gap = 10 }) =>
      align === "horizontal" ? `margin-left: ${gap};` : `margin-top: ${gap};`}
  }
`;
