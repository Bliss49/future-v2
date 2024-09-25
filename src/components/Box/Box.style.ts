import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Property } from "csstype";

export type TBoxType = "dashed" | "line" | "hidden";

export interface IBoxStyle {
  type?: TBoxType;
  useFull?: boolean;
  useRound?: boolean;
  useShadow?: boolean;
  hAlign?: Property.AlignContent;
  vAlign?: Property.AlignContent;
}

export interface IBoxWrapStyle extends IBoxStyle {
  boxGap?: number;
}

export const BoxContainer = styled.div<IBoxStyle>`
  padding: 10px;

  ${({ useRound }) =>
    useRound &&
    `
        border-radius: 8px;
    `};

  ${({ useFull }) =>
    useFull &&
    `
        width: 100%;
        height: 100%;
    `};

  ${({ useShadow }) =>
    useShadow &&
    `
      box-shadow: 0px 4px 16px 0px #65738F12;
      border: 1px solid #EFF0F2;
    `}

  ${({ hAlign }) =>
    hAlign &&
    `
        display: flex;
        align-items: center;
        justify-content: ${hAlign};
    `};

  ${({ vAlign }) =>
    vAlign &&
    `
          display: flex;
          align-items: ${vAlign};
      `};

  ${({ type }) => {
    switch (type) {
      case "dashed":
        return css`
          border: 2px dashed gray;
        `;
      case "line":
        return css`
          border: 2px solid gray;
        `;
      case "hidden":
        return css`
          overflow: hidden;
          position: absolute;
          z-index: -1;
          width: 1px;
          height: 1px;
          font-size: 1px;
          clip: rect(1px, 1px, 1px, 1px);
        `;
    }
  }}
`;
export const BoxWrapContainer = styled.div<IBoxWrapStyle>`
  display: flex;

  > div:not(:last-child) {
    margin-right: ${({ boxGap = 24 }) => `${boxGap}px`};
  }
`;
