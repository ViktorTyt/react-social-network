import styled from "@emotion/styled";
import { device, theme } from "styles";

export const ConversationWrapper = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: rgb(245, 243, 243);
  }

  > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
  }

  > span {
    display: none;

    ${device.tablet} {
      display: flex;
      font-weight: 500;
    }
  }
`;
