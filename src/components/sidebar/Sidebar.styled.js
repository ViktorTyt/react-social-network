import styled from "@emotion/styled";
import { device, theme } from "styles";

export const SidebarWrapper = styled.section`
  ${device.mobileOnly} {
    display: none;
  }

  ${device.tablet} {
    flex: 2;
    position: sticky;
    top: 70px;
    height: calc(100vh - 70px);
    overflow: scroll;
    background-color: ${theme.colors.lightMode.bg};
    color: ${theme.colors.lightMode.textColor};
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SidebarContainer = styled.div`
  padding: 20px;
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const MenuTitle = styled.p`
  font-size: 12px;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: poin;
`;

export const UserImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserTitle = styled.p`
  font-size: 14px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ItemImg = styled.img`
  width: 32px;
`;

export const ItemTitle = styled.p`
  font-size: 14px;
`;

export const Hr = styled.hr`
  margin: 20px 0;
  border: none;
  height: 0.5px;
  background-color: ${theme.colors.lightMode.border};
`;
