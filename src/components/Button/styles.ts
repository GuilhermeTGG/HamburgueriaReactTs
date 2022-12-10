import styled, { css } from "styled-components";
import { Theme } from "../../types/styled-components";

interface StyledButtonProps {
  theme: Theme;
  variant?: "disabled" | "cancel" | false;
  size?: "small" | "large" | false;
}

export const StyledButton = styled.button`
  ${({ theme, variant, size }: StyledButtonProps) => css`
    width: 11rem;
    height: 3rem;
    border-radius: 8px;
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.textColor};
    box-shadow: 0px 0px 24px rgba(105, 234, 118, 0.2);
    cursor: pointer;
    font-family: ${theme.constants.bodyFontFamily};
    font-weight: 500;

    ${variant === "disabled" && css`
    background-color: ${theme.colors.baseBg2};
    color: ${theme.colors.primaryColor};
    border: 1px solid ${theme.colors.baseBg1};
    box-shadow: none;
    `}

    ${variant === "cancel" && css`
    background-color: ${theme.colors.baseBg2};
    color: ${theme.colors.secondaryColor};
    border: 1px solid ${theme.colors.secondaryColor};
    box-shadow: none;
    `}

    ${size === "small" && css`
      height: 2.15rem;
      padding: 0 0.75rem;
      width: 7.25rem;
    `}

    ${size === "large" && css`
      width: 22.5rem;
    `}
  `}
`;
