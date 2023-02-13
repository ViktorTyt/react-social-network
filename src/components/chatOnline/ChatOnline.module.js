import styled from "@emotion/styled";
import { device, theme } from "styles";

export const OnlineWrapper = styled.ul`
  /* height: 100%;
  overflow-y: scroll; */
  padding-right: 10px;
`;

export const OnlineFriendInfo = styled.li`
  display: flex;
  align-items: center;
  font-weight: 500;
  cursor: pointer;
  margin-top: 10px;
`;

export const ImageContainer = styled.div`
  position: relative;
  margin-right: 10px;

  > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    border: 1px solid white;
  }

  > div {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: limegreen;
    position: absolute;
    top: 2px;
    right: 2px;
  }
`;

export const OnlineFriendName = styled.span`
  display: none;

  ${device.tablet} {
    display: flex;
  }
`;
