import styled from "@emotion/styled";
import { Property } from "csstype";

export type TTypographyStyle = "center" | "left" | "right";

export interface ITypographyStyle {
  align?: TTypographyStyle;
  color?: string;
  fontSize?: Property.FontSize;
  fontWeight?: Property.FontWeight;
  fontFamily?: string;
  lineHeight?: Property.LineHeight;
  textDecoration?: Property.TextDecoration;
  textDecorationColor?: string;
  width?: string;
}

export const TypographyContainer = styled.span<ITypographyStyle>`
  display: inline-block;

  text-align: ${({ align }) => align};
  color: ${({ color }) => color};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-family: ${({ fontFamily }) => fontFamily};
  line-height: ${({ lineHeight }) => lineHeight};
  width:  ${({ width }) => width};

  ${({ textDecoration, textDecorationColor }) =>
    textDecoration &&
    `
      text-decoration: ${textDecoration};
      text-decoration-thickness: 2px;
      text-underline-position: under;
      text-decoration-color: ${textDecorationColor};
    `}
`;
