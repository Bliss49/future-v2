import { ChangeEventHandler } from "react";
import {
  IInputStyleProps,
  InputContainer,
  EInputStatus,
  TInputSize,
  TInputType,
} from "./Input.style";

export interface InputProps extends IInputStyleProps {
  type: TInputType;
  value: string;
  ariaLabel: string;
  status: EInputStatus;
  onChange: ChangeEventHandler<HTMLInputElement>;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  placeholder?: string;
}

export const Input = ({
  type = "text",
  value,
  ariaLabel,
  status,
  onChange,
  size = "medium",
  textAlign = "center",
  isDisabled = false,
  isReadOnly = false,
  placeholder = "",
}: InputProps) => {
  return (
    <InputContainer
      type={type}
      value={value}
      aria-label={ariaLabel}
      status={status}
      size={size}
      textAlign={textAlign}
      onChange={onChange}
      disabled={isDisabled}
      readOnly={isReadOnly}
      placeholder={placeholder}
    />
  );
};

export default Input;
