import styled from "@emotion/styled";

export enum EInputStatus {
  DEFAULT = "default",
  ERROR = "error",
  ENABLE = "enable",
}

export type TInputSize = "x-small" | "small" | "medium" | "large";
export type TInputType = "text" | "button" | "number";
export type TInputTextAlign = "left" | "center" | "right";

export interface IInputStyleProps {
  type: TInputType;
  status: EInputStatus;
  size?: TInputSize;
  textAlign?: TInputTextAlign;
}

export const InputContainer = styled.input<IInputStyleProps>`
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}

  ${({ size }) => {
    switch (size) {
      case "x-small": {
        return `
          height: 48px;
          font-size: 24px;
          padding: 12px 6px;
        `;
      }
      case "small": {
        return `
          height: 52px;
          font-size: 28px;
          padding: 12px 8px;
        `;
      }
      case "medium": {
        return `
          height: 58px;
          font-size: 32px;
          padding: 12px 6px;
        `;
      }
      case "large": {
        return `
          height: 70px;
          font-size: 36px;
          padding: 12px 6px;
        `;
      }
      default: {
        return "";
      }
    }
  }}
  ${({ status }) => {
    switch (status) {
      case EInputStatus.DEFAULT: {
        return `
        background-color: #F8F8F8;
        border: 1px solid #8D9299`;
      }
      case EInputStatus.ERROR: {
        return `
        background-color: #FFF4F3;
        border: 1px solid #EB1807`;
      }
      case EInputStatus.ENABLE: {
        return `
        background-color: #ffffff;
        border: 1px solid #8D9299
        `;
      }
      default: {
        return "";
      }
    }
  }};
  :focus {
    background-color: #f4f8ff;
    border: 2px solid #1e6efa;
    outline: none;
  }

  border-radius: 8px;
`;
