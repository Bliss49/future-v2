import { ChangeEvent } from "react";
import {
  BoxWrapper,
  CheckBoxContainer,
  CheckBoxStyle,
  ICheckBoxStyle,
  IconStyle,
} from "./CheckBox.style";

interface ICheckBox extends ICheckBoxStyle {
  id: string;
  name: string;
  ariaLabel: string;
  children?: React.ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = ({
  id,
  name,
  ariaLabel,
  iconSize = "48px",
  children,
  styleType = "check",
}: ICheckBox) => {
  return (
    <CheckBoxContainer>
      {styleType === "box" ? (
        <>
          <CheckBoxStyle
            type="checkbox"
            id={id}
            name={name}
            aria-label={ariaLabel}
            iconSize={iconSize}
            styleType={styleType}
          />
          <BoxWrapper>{children}</BoxWrapper>
        </>
      ) : (
        <>
          <CheckBoxStyle
            type="checkbox"
            id={id}
            name={name}
            aria-label={ariaLabel}
            iconSize={iconSize}
            styleType={styleType}
          />
          <IconStyle iconSize={iconSize} />
        </>
      )}
    </CheckBoxContainer>
  );
};

export default CheckBox;
