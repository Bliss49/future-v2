import styled from "@emotion/styled";

export enum EButtonShape {
  DEFAULT = "default",
  ROUND = "round",
  SHADOW = "shadow",
}

export enum EButtonStyle {
  NORMAL = "normal",
  DEFAULT = "default",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SUCCESS = "success",
  TERTIARY = "tertiary",
  YELLOW = "yellow",
  GRAY = "gray",
  BROWN = "brown",
  LIGHTBROWN = "lightbrown",
  BLUE = "blue",
  LIGHTBLUE = "lightblue",
  ERROR = "error",
}

export type ButtonSet = {
  [key in EButtonStyle]: {
    background?: string;
    color?: string;
    border?: string;
  };
};

type TSize =
  | "x-large"
  | "large"
  | "medium"
  | "small"
  | "x-small"
  | "xx-small"
  | "full-auto";

export const buttons: ButtonSet = {
  [EButtonStyle.NORMAL]: {
    background: "none",
    color: "#232426",
    border: "none",
  },
  [EButtonStyle.DEFAULT]: {
    color: "#232426",
    background: "#EFF0F2",
    border: "none",
  },
  [EButtonStyle.PRIMARY]: {
    background: "#232426",
    color: "#ffffff",
    border: "none",
  },
  [EButtonStyle.SECONDARY]: {
    color: "#6A6D73",
    background: "#ffffff",
    border: "1px solid #B0B6C0",
  },
  [EButtonStyle.SUCCESS]: {
    color: "#00A42E",
    background: "#ffffff",
    border: "1px solid #00A42E",
  },
  [EButtonStyle.TERTIARY]: {
    color: "#B0B6C0",
    background: "#ffffff",
    border: "1px solid #B0B6C0",
  },
  [EButtonStyle.YELLOW]: {
    color: "#232426",
    background: "#FFB400",
    border: "none",
  },
  [EButtonStyle.GRAY]: {
    color: "#232426",
    background: "#EFF0F2",
    border: "1px solid #B0B6C0",
  },
  [EButtonStyle.BROWN]: {
    background: "#996500",
    color: "#ffffff",
    border: "none",
  },
  [EButtonStyle.LIGHTBROWN]: {
    background: "#FFF0CC",
    color: "#000000",
    border: "none",
  },
  [EButtonStyle.BLUE]: {
    background: "#275CE7",
    color: "#ffffff",
    border: "none",
  },
  [EButtonStyle.LIGHTBLUE]: {
    background: "#E2F2FF",
    color: "#000000",
    border: "none",
  },
  [EButtonStyle.ERROR]: {
    background: "#FFF4F3",
    color: "#C11D00",
    border: "none",
  },
};

export interface IButtonStyled {
  color?: EButtonStyle;
  shape?: EButtonShape;
  size?: TSize;
}

export const ButtonContainer = styled.button<IButtonStyled>`
  cursor: pointer;

  ${({ color }) => {
    switch (color) {
      case EButtonStyle.NORMAL: {
        return buttons.normal;
      }
      case EButtonStyle.DEFAULT: {
        return buttons.default;
      }
      case EButtonStyle.PRIMARY: {
        return buttons.primary;
      }
      case EButtonStyle.SECONDARY: {
        return buttons.secondary;
      }
      case EButtonStyle.SUCCESS: {
        return buttons.success;
      }
      case EButtonStyle.TERTIARY: {
        return buttons.tertiary;
      }
      case EButtonStyle.YELLOW: {
        return buttons.yellow;
      }
      case EButtonStyle.GRAY: {
        return buttons.gray;
      }
      case EButtonStyle.BROWN: {
        return buttons.brown;
      }
      case EButtonStyle.LIGHTBROWN: {
        return buttons.lightbrown;
      }
      case EButtonStyle.BLUE: {
        return buttons.blue;
      }
      case EButtonStyle.LIGHTBLUE: {
        return buttons.lightblue;
      }
      case EButtonStyle.ERROR: {
        return buttons.error;
      }
    }
  }}

  ${({ shape }) => {
    switch (shape) {
      case EButtonShape.DEFAULT: {
        return `
        padding: 6px 12px;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 700;
        `;
      }
      case EButtonShape.ROUND: {
        return `
        padding: 6px 16px;
        border-radius: 24px;
        font-size: 16px;
        `;
      }
      case EButtonShape.SHADOW: {
        return `
        border-radius: 8px;
        font-size: 24px;
        font-weight: 700;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        `;
      }
    }
  }};

  height: ${({ size }) => {
    switch (size) {
      case "full-auto": {
        return `100%`;
      }
      case "xx-small": {
        return `36px`;
      }
      case "x-small": {
        return `40px`;
      }
      case "small": {
        return `44px`;
      }
      case "medium": {
        return `53px`;
      }
      case "large": {
        return `57px`;
      }
      case "x-large": {
        return `61px`;
      }
    }
  }};
`;
