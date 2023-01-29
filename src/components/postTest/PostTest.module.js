import styled from "@emotion/styled";
import { device, theme } from "styles";

export const PostItem = styled.li`
  -webkit-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  -moz-box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  box-shadow: 0px 0px 25px -10px rgba(0, 0, 0, 0.38);
  border-radius: 20px;
  background-color: themed("bg");
  color: themed("textColor");
`;

export const PostContainer = styled.div`
  padding: 10px;
  ${device.tablet} {
    padding: 20px;
  }
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserInfo = styled.div`
  display: flex;
  gap: 20px;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const UserInfoDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserInfoName = styled.span`
  font-weight: 500;
`;

export const UserInfoDate = styled.span`
  font-size: 12px;
`;

export const PostContent = styled.div`
  margin: 20px 0px;

  img {
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    margin-top: 20px;
  }
`;

export const PostInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  div {
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    font-size: 14px;
  }
`;
