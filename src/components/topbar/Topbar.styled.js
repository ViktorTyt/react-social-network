import styled from "@emotion/styled";
import { device, theme } from "styles";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 15px;
  height: 50px;
  border: 1px solid ${theme.colors.lightMode.border};
  position: sticky;
  top: 0;
  z-index: 99;
  background-color: ${theme.colors.lightMode.bg};
  color: ${theme.colors.lightMode.textColor};

  ${device.tablet} {
    padding: 10px 20px;
  }
`;

export const NavLeft = styled.nav`
  display: flex;
  align-items: center;
  gap: 15px;

  ${device.tablet} {
    gap: 30px;
  }
`;

export const Logo = styled.span`
  font-size: 20px;
  font-weight: bold;
  color: ${theme.colors.lightMode.logo};
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${theme.colors.lightMode.border};
`;

export const SearchInput = styled.input`
  ${device.mobileOnly} {
    display: none;
  }

  ${device.tablet} {
    display: flex;
    border: none;
    width: 200px;
    background-color: transparent;
    color: ${theme.colors.lightMode.textColor};
  }

  ${device.desktop} {
    width: 300px;
  }

  &:focus {
    outline: none;
  }
`;

export const UserContainer = styled.div`
  ${device.mobileOnly} {
    display: none;
  }

  ${device.tablet} {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;

export const UserInfo = styled.div`
  ${device.mobile} {
    display: none;
  }

  ${device.desktop} {
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 500;
  }
`;

export const UserImg = styled.img`
  height: 32px;
  width: 32px;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;
`;
