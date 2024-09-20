import { ITypographyStyle, TypographyContainer } from "./Typography.style";

interface ITypographyProps extends ITypographyStyle {
  children: React.ReactNode;
}

const Typography = ({
  children,
  align = "left",
  color = "black",
  fontSize = "28px",
  fontWeight = "500",
  fontFamily,
  lineHeight = "42px",
  textDecoration = "none",
  width,
}: ITypographyProps) => {
  return (
    <TypographyContainer
      align={align}
      color={color}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontFamily={fontFamily}
      lineHeight={lineHeight}
      textDecoration={textDecoration}
      width={width}
    >
      {children}
    </TypographyContainer>
  );
};

export default Typography;
