import { css } from "@emotion/react";
import styled from "@emotion/styled";

export interface IImageStyleProps {
  size?: string;
  width?: string;
  height?: string;
  style?: React.CSSProperties;
}

export interface IImageBgStyleProps extends IImageStyleProps {
  backgroundSrc: string;
}

const sizeStyles = ({ width, height, size }: IImageStyleProps) => css`
  ${(size || width) &&
  css`
    width: ${size || width};
  `}

  ${(size || height) &&
  css`
    height: ${size || height};
  `}
`;

export const ImageContainer = styled.img<IImageStyleProps>`
  ${sizeStyles};
`;

export const ImageBgContainer = styled.span<IImageBgStyleProps>`
  display: inline-block;
  background: url(${({ backgroundSrc }) => `"${backgroundSrc}"`}) center center
    no-repeat;
  background-size: contain;

  ${sizeStyles};
`;
