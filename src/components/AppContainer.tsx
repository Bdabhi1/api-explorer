import React from "react";
import styled from "styled-components";

interface AppContainerProps {
  children: React.ReactNode;
}

const ContainerDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  gap: 20px;
`;

const AppContainer: React.FC<AppContainerProps> = ({ children }) => {
  return <ContainerDiv>{children}</ContainerDiv>;
};

export default AppContainer;
