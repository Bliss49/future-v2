import {
  BoxContainer,
  BoxWrapContainer,
  IBoxStyle,
  IBoxWrapStyle,
} from "./Box.style";

export interface IBoxPropsWrap extends IBoxWrapStyle {
  children: React.ReactNode;
}

export interface IBoxProps extends IBoxStyle {
  children?: React.ReactNode;
  id?: string;
}

export const BoxWrap = ({ children, boxGap = 24 }: IBoxPropsWrap) => {
  return <BoxWrapContainer boxGap={boxGap}>{children}</BoxWrapContainer>;
};

export const Box = ({
  children,
  type,
  useFull = false,
  useRound = false,
  useShadow = false,
  vAlign,
  hAlign,
  id,
}: IBoxProps) => {
  return (
    <BoxContainer
      id={id}
      type={type}
      useFull={useFull}
      useRound={useRound}
      useShadow={useShadow}
      vAlign={vAlign}
      hAlign={hAlign}
    >
      {children}
    </BoxContainer>
  );
};

export default Box;
