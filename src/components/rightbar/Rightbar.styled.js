import styled from "@emotion/styled";
import { device, theme } from "styles";

export const RightbarWrapper = styled.section`
  ${device.mobile} {
    display: none;
  }

  ${device.desktop} {
    position: sticky;
    background-color: ${theme.colors.lightMode.bgSoft};
    color: ${theme.colors.lightMode.textColor};
    height: calc(100vh - 70px);
    flex: 3;
    display: flex;
    top: 70px;
    overflow: scroll;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const RightbarContainer = styled.div`
  padding: 20px;
`;

export const Item = styled.div`
  -webkit-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
  box-shadow: 0px 0px 15px 1px rgba(0, 0, 0, 0.09);
  padding: 20px;
  margin-bottom: 20px;
  background-color: ${theme.colors.lightMode.bg};
`;

export const ItemTitle = styled.span`
  color: ${theme.colors.lightMode.textColorSoft};
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  margin: 20px 0;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
`;

export const UserButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button {
    border: none;
    padding: 5px;
    color: white;
    cursor: pointer;

    &:first-of-type {
      background-color: #5271ff;
    }

    &:last-of-type {
      background-color: #f0544f;
    }
  }
`;

export const UserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const OnlineDot = styled.span`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: limegreen;
  position: absolute;
  top: 0;
  left: 30px;
`;

export const UserTitle = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${theme.colors.lightMode.textColor};

  span {
    font-size: 14px;
    color: ${theme.colors.lightMode.textColorSoft};
  }
`;

export const UserCnahges = styled.span`
  font-size: 12px;
  color: ${theme.colors.lightMode.textColorSoft};
`;
