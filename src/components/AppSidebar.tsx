import React from "react";
import styled from "styled-components";

interface SidebarProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const SidebarContainer = styled.div<Pick<SidebarProps, "isOpen">>`
  position: fixed;
  border-left: 2px solid ${({ theme }) => theme.colors.border};
  top: 0;
  right: 0;
  height: 100%;
  width: 400px;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  transform: translateX(${({ isOpen }) => (isOpen ? "0" : "100%")});
  transition: transform 0.4s ease;
  z-index: 1000;
  padding: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.white};
  padding-left: ${({ theme }) => theme.spacing.large};
  padding-right: ${({ theme }) => theme.spacing.large};
  padding-top: ${({ theme }) => theme.spacing.medium};
  padding-bottom: ${({ theme }) => theme.spacing.medium};
  display: flex;
  flex-direction: column;
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transition: opacity 0.2s ease, visibility 0.4s ease;
  z-index: 999;
`;

const AppSidebar: React.FC<SidebarProps> = ({ isOpen, children, onClose }) => {
  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <SidebarContainer isOpen={isOpen}>{children}</SidebarContainer>
    </>
  );
};

export default AppSidebar;
