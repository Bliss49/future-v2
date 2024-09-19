import { ChangeEventHandler } from "react";
import {
  IInputStyleProps,
  InputContainer,
  EInputStatus,
} from "./Input.style";

export interface IInputProps extends IInputStyleProps {
  value: string;
  ariaLabel: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  placeholder?: string;
}

export const Input = ({
  type,
  value,
  ariaLabel,
  status = EInputStatus.DEFAULT,
  onChange,
  inputSize = "medium",
  textAlign = "center",
  isDisabled = false,
  isReadOnly = false,
  placeholder = "",
}: IInputProps) => {
  return (
    <InputContainer
      type={type}
      value={value}
      aria-label={ariaLabel}
      status={status}
      inputSize={inputSize}
      textAlign={textAlign}
      onChange={onChange}
      disabled={isDisabled}
      readOnly={isReadOnly}
      placeholder={placeholder}
    />
  );
};

export default Input;
