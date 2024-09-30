import styled from "@emotion/styled";
import check from "../../asset/icon/check.svg";

type TCheckBox = "box" | "check";

export interface ICheckBoxStyle {
  styleType?: TCheckBox;
  iconSize?: string;
}

export const CheckBoxContainer = styled.label`
  position: relative;
  cursor: pointer;
`;

export const CheckBoxStyle = styled.input<ICheckBoxStyle>`
  position: absolute;
  z-index: -1;
  border: none;
  background: none;
  appearance: none;
  width: 100%;
  height: 100%;
  margin: 0;

  ${({ styleType }) =>
    styleType === "box"
      ? `
      &:checked + * {
        background-color: #1e6efa;
      }
  `
      : `
    &:checked + * {
      border: 1px solid #1e6efa;
      background-color: #1e6efa;
      background-image: url(${check});
      background-repeat: no-repeat;
      background-position: center;
    }
  `}
`;

export const BoxWrapper = styled.div`
  width: fit-content;
  padding: 6px 12px;
  border-radius: 8px;
`;

export const IconStyle = styled.span<ICheckBoxStyle>`
  display: inline-block;
  min-width: ${({ iconSize = "48px" }) => iconSize};
  min-height: ${({ iconSize = "48px" }) => iconSize};

  border-radius: 8px;
  border: 1px solid #8d9299;
  background-color: #ffffff;
`;
