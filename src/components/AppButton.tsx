import React from "react";
import styled, { css } from "styled-components";

interface ButtonProps {
  variant?: "primary";
  children: React.ReactNode;
  onClick: () => void;
}

const StyledButton = styled.button<ButtonProps>`
  padding: ${({ theme }) => theme.spacing.small};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  ${({ variant, theme }) =>
    variant === "primary" &&
    css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
    `}
`;

const AppButton: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  onClick,
}) => {
  return (
    <StyledButton variant={variant} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default AppButton;
