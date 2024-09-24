import { ButtonContainer } from "./Button.style";

interface IButtonProps {
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
      disabled={disabled}
      style={style}
      onClick={handleClick}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
