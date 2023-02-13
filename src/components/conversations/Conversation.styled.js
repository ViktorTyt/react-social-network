import styled from "@emotion/styled";
import { device, theme } from "styles";

export const ConversationWrapper = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  margin-top: 20px;
  background-color: ${(p) => (p.choiceConv ? "lightgray" : "inherit")};
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: gray;
  }

  > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 20px;
  }

  > span {
    display: flex;
    font-weight: 500;
  }
`;
