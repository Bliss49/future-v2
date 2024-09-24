import {
  ButtonContainer,
  EButtonShape,
  EButtonStyle,
  IButtonStyled,
} from "./Button.style";

interface IButtonProps extends IButtonStyled {
  ariaLabel: string;
  title?: string;
  disabled?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Button = ({
  ariaLabel,
  title = "",
  disabled = false,
  color = EButtonStyle.DEFAULT,
  shape = EButtonShape.DEFAULT,
  size = "medium",
  children,
  style,
  onClick,
}: IButtonProps) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };
  return (
    <ButtonContainer
      type="button"
      aria-label={ariaLabel}
      title={title}
      color={color}
      disabled={disabled}
      shape={shape}
      size={size}
      style={style}
      onClick={handleClick}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
